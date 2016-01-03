'use strict';

//Represents a course and a node in the graph
function Course(id, name, points, position, circleRadius, color, precedesIds, text, appContainer) {
  this.id =  id;
  this.name = name;
  this.position = position;
  this.circleRadius = circleRadius;
  this.color = color;
  this.precedesIds = precedesIds;
  this.precedes = [];
  this.createInfobox(name, points, text);
  appContainer.appendChild(this.infoBox);
  this.hideInfobox();
}

//The infobox is the html div that contains the course description
Course.prototype.createInfobox = function(name, points, text) {
  this.infoBox = document.createElement('div');
  this.infoBox.innerHTML = `<div class="course-name fl_left">${name}</div>
                         <div class="course-points fl_right">${points} hp</div>
                         <div class="course-text">${text}</div>`;
}

//Draws the node to the context with edges to continuing courses
Course.prototype.draw = function(context) {
    drawCircle(context, this.position, this.circleRadius, this.color, colorLuminance(this.color, -0.5));
    for (var i = 0; i < this.precedes.length; i++) {
      var procedingCourse = this.precedes[i];
      drawLine(context, this.position, procedingCourse.position, this.color);
    }
    drawText(context, this.position, this.id, colorLuminance(this.color, -0.5), '12pt Calibri');
}

//Shows the infobox. THe
Course.prototype.showInfobox = function() {
  this.infoBox.className = 'course-text-visible';
  this.infoBox.style.top = this.position.y - this.circleRadius;
  this.infoBox.style.left = this.position.x + this.circleRadius * 2;
}

Course.prototype.hideInfobox = function() {
  this.infoBox.className = 'course-text-hidden';
}

//Returns a list of all courses as Course objects. The bunch of parameters
//are passed to be able to calculate positions in one go
function getCourses(jsonCourses, periodOffset, fieldsOffset, periodsPerYear, circleRadius, marginTop, appContainer) {
  var periods = { 'HT1': 0, 'HT2': 1, 'VT1': 2, 'VT2': 3 }
  var fieldColor = { 'math': '#754022', 'software': '#70BD44',
                     'hardware': '#F7E623', 'physics': '#E5398D',
                     'softskills': '#20407C' }
  var courses = {};

  //Parses the jsonCourses
  for (var i = 0; i < jsonCourses.length; i++) {
    var courseData = jsonCourses[i];
    var posX = courseData['block'] * fieldsOffset;
    var totalPeriods = ((courseData['year'] - 1) * periodsPerYear + periods[courseData['start']]);
    var posY = totalPeriods * periodOffset + marginTop + periodOffset / 2;
    var position = {x:posX, y:posY};
    courses[courseData['id']] = new Course(courseData['id'],
                            courseData['name'],
                            courseData['points'],
                            position,
                            circleRadius,
                            fieldColor[courseData['field']],
                            courseData['precedes'],
                            courseData['text'],
                            appContainer);
  }

  //for each course, loads the courses that it precedes
  for (var id in courses) {
    var course = courses[id];
    if (course.precedesIds != '') {
      var precedesIds = course.precedesIds.split(',');
      for (var i = 0; i < precedesIds.length; i++) {
        course.precedes.push(courses[precedesIds[i]]);
      }
    }
  }
  return courses;
}

//Draws the lines and text representing years and periods
function drawPeriodsAndYears(canvas, context, periodsPerYear, periodsTotal, periodOffset, marginTop) {
  var lineColor = '#d5d6dd';
  var margin = {x: 20, y: -10};

  for (var i = 0; i < periodsTotal; i++) {
    var yOffset = i * periodOffset + marginTop;
    drawLine(context, {x: 0, y: yOffset}, {x: canvas.width, y: yOffset}, lineColor);
    var period = i % periodsPerYear;
    var position = {x:margin.x, y:yOffset + margin.y};

    if (period == 0) {
      drawText(context, position, Math.floor(i / periodsPerYear) + 1, '#000000', '40pt Calibri');
    }
    var term = period <= 1 ? 'HT ' : 'VT ';
    term += period % 2 == 0 ? 1 : 2;
    position.y += 30;
    drawText(context, position, term, '#111111', '20px Calibri');
  }
}

//Sets an onmousemove handler to hide and show infoboxes on hover
function setupMouseMoveEvent(canvas, courses, circleRadius) {
  canvas.onmousemove = function(e) {
    var mousePos = {x: e.pageX - canvas.offsetLeft,
                    y: e.pageY - canvas.offsetTop};

    for (var id in courses) {
      var course = courses[id];
      if (distance(mousePos, course.position) < circleRadius) {
        course.showInfobox();
      } else {
        course.hideInfobox();
      }
    }
  }
}

function drawCourses(context, courses) {
  for (var id in courses) {
    courses[id].draw(context);
  }
}

function drawText(context, pos, text, color, font) {
  context.font = font;
  context.fillStyle = color;
  var metrics = context.measureText(text);
  var magicMarginTop = 5; //Can't get the height of text :(
  context.fillText(text, pos.x - metrics.width / 2, pos.y + magicMarginTop);
}

function drawLine(context, startPos, endPos, color) {
  context.beginPath();
  context.moveTo(startPos.x, startPos.y);
  context.lineTo(endPos.x, endPos.y);
  context.strokeStyle = color;
  context.stroke();
}

function drawCircle(context, pos, radius, color, outlineColor) {
  context.beginPath();
  context.arc(pos.x, pos.y, radius, 0, 2 * Math.PI, false);
  context.fillStyle = color;
  context.fill();
  context.lineWidth = 5;
  context.strokeStyle = outlineColor;
  context.stroke();
}

function distance(pos1, pos2) {
  return Math.sqrt(Math.pow(pos1.x - pos2.x, 2) + Math.pow(pos1.y - pos2.y, 2));
}

//Modifies luminance for a hex color by a certain decimal. I.e. 0.2, -0.5.
//Source: http://www.sitepoint.com/javascript-generate-lighter-darker-color/
function colorLuminance(hex, lum) {

	// validate hex string
	hex = String(hex).replace(/[^0-9a-f]/gi, '');
	if (hex.length < 6) {
		hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
	}
	lum = lum || 0;

	// convert to decimal and change luminosity
	var rgb = "#", c, i;
	for (i = 0; i < 3; i++) {
		c = parseInt(hex.substr(i*2,2), 16);
		c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
		rgb += ("00"+c).substr(c.length);
	}

	return rgb;
}


(function main() {
  var canvas = document.getElementById('courseCanvas');
  var context = canvas.getContext('2d');
  canvas.width = 1000;
  canvas.height = 1400;

  var marginTop = 80;
  var periodsPerYear = 4;
  var periodsTotal = 12;
  var blocks = 20;
  var periodOffset = canvas.height / periodsTotal;
  var blockOffset = canvas.width / (blocks + 1);
  var circleRadius = 30;
  var appContainer = document.getElementById('courses-container');
  var courses = getCourses(jsonData, periodOffset, blockOffset,
                           periodsPerYear, circleRadius, marginTop, appContainer);

  drawPeriodsAndYears(canvas, context, periodsPerYear, periodsTotal, periodOffset, marginTop);
  setupMouseMoveEvent(canvas, courses, circleRadius);
  drawCourses(context, courses, marginTop);
})();
