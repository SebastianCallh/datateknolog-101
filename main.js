'use strict';

//Creates a "namespace" to prevent naming collisions
var CourseGraph = window.CourseGraph || {};

//Represents a course and a node in the graph
CourseGraph.Course = function (id, name, points, position, circleRadius, color,
                                precedesIds, text, appContainer) {
  this.id =  id;
  this.name = name;
  this.position = position;
  this.circleRadius = circleRadius;
  this.color = color;
  this.precedesIds = precedesIds;
  this.precedes = [];
  this.infoBox = document.createElement('div');
  this.infoBox.innerHTML = `<div class="course-name fl_left">${name}</div>
                           <div class="course-points fl_right">${points} hp</div>
                           <div class="course-text">${text}</div>`;
  appContainer.appendChild(this.infoBox);
  this.hideInfobox();
};

//Draws the node to the context with edges to continuing courses
CourseGraph.Course.prototype.draw = function(context) {
    CourseGraph.drawCircle(context, this.position, this.circleRadius,
      this.color, CourseGraph.colorLuminance(this.color, -0.5));

    for (var i = 0; i < this.precedes.length; i++) {
      var procedingCourse = this.precedes[i];
      CourseGraph.drawLine(context, this.position,
        procedingCourse.position, this.color);
    }
    CourseGraph.drawText(context, this.position, this.id,
      CourseGraph.colorLuminance(this.color, -0.5),
      CourseGraph.settings.breadTextFont);
};

//The infobox contains the course info
CourseGraph.Course.prototype.showInfobox = function() {
  this.infoBox.className = 'course-text-visible';
  this.infoBox.style.top = this.position.y - this.circleRadius;
  this.infoBox.style.left = this.position.x + this.circleRadius * 2;
};

CourseGraph.Course.prototype.hideInfobox = function() {
  this.infoBox.className = 'course-text-hidden';
};

//Returns a list of all courses as Course objects.
CourseGraph.getCourses = function(jsonCourses, periodOffset, blockOffset, appContainer) {
  var setting = CourseGraph.settings;
  var courses = {};
  var positionInYear = { 'HT1': 0, 'HT2': 1, 'VT1': 2, 'VT2': 3 };

  //Calculates how many periods into the education the course
  //is and creates it from the json data
  for (var i = 0; i < jsonCourses.length; i++) {
    var courseData = jsonCourses[i];
    var posX = courseData['block'] * blockOffset;
    var totalPeriods = ((courseData['year'] - 1) * setting.periodsPerYear + positionInYear[courseData['start']]);
    var posY = totalPeriods * periodOffset + setting.margin + periodOffset / 2;
    var position = {x:posX, y:posY};
    courses[courseData['id']] = new CourseGraph.Course(courseData['id'],
                            courseData['name'],
                            courseData['points'],
                            position,
                            setting.nodeRadius,
                            setting.fieldColor[courseData['field']],
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
};

//Draws the lines and text representing years and periods
CourseGraph.drawPeriodsAndYears = function(canvas, context, periodOffset) {
  var setting = CourseGraph.settings;
  var textMargin = {x: 20, y: -10};

  for (var i = 0; i < setting.periodsTotal; i++) {
    var yOffset = i * periodOffset + setting.margin;
    var period = i % setting.periodsPerYear;
    var position = {x:textMargin.x, y:yOffset + textMargin.y};
    var term = period <= 1 ? 'HT ' : 'VT ';
    CourseGraph.drawLine(context, {x: 0, y: yOffset},
      {x: canvas.width, y: yOffset}, setting.lineColor);

    if (period == 0) {
      CourseGraph.drawText(context, position,
        Math.floor(i / setting.periodsPerYear) + 1,
        setting.yearColor,
        setting.yearFont);
    }

    term += period % 2 == 0 ? 1 : 2;
    position.y += 30;
    CourseGraph.drawText(context, position, term,
      setting.periodColor,
      setting.periodFont);
  }
};

//Sets an onmousemove handler to hide and show infoboxes on hover
CourseGraph.setupMouseMoveEvent = function(canvas, courses) {
  canvas.onmousemove = function(e) {
    var mousePos = {x: e.pageX - canvas.offsetLeft,
                    y: e.pageY - canvas.offsetTop};

    for (var id in courses) {
      var course = courses[id];
      if (CourseGraph.distance(mousePos, course.position) <
            CourseGraph.settings.nodeRadius) {
        course.showInfobox();
      } else {
        course.hideInfobox();
      }
    }
  }
};

CourseGraph.drawCourses = function(context, courses) {
  for (var id in courses) {
    courses[id].draw(context);
  }
};

CourseGraph.drawText = function(context, pos, text, color, font) {
  context.font = font;
  context.fillStyle = color;
  var metrics = context.measureText(text);
  var magicMarginTop = 5; //Can't get the height of text :(
  context.fillText(text, pos.x - metrics.width / 2, pos.y + magicMarginTop);
};

CourseGraph.drawLine = function(context, startPos, endPos, color) {
  context.beginPath();
  context.moveTo(startPos.x, startPos.y);
  context.lineTo(endPos.x, endPos.y);
  context.strokeStyle = color;
  context.stroke();
};

CourseGraph.drawCircle = function(context, pos, radius, color, outlineColor) {
  context.beginPath();
  context.arc(pos.x, pos.y, radius, 0, 2 * Math.PI, false);
  context.fillStyle = color;
  context.fill();
  context.lineWidth = 5;
  context.strokeStyle = outlineColor;
  context.stroke();
};

CourseGraph.distance = function(pos1, pos2) {
  return Math.sqrt(Math.pow(pos1.x - pos2.x, 2) + Math.pow(pos1.y - pos2.y, 2));
};

//Modifies luminance for a hex color by a certain decimal. I.e. 0.2, -0.5.
//Source: http://www.sitepoint.com/javascript-generate-lighter-darker-color/
CourseGraph.colorLuminance = function(hex, lum) {

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
};

//Expects a json array named "courseJson" and a json object called "settings"
//in the global namespace
(CourseGraph.main = function() {
  var canvas = document.getElementById('courseCanvas');
  var context = canvas.getContext('2d');
  var setting = CourseGraph.settings;
  var appContainer = document.getElementById('courses-container');
  var courses = CourseGraph.getCourses(CourseGraph.courseJson,
                  periodOffset, blockOffset, appContainer);
  canvas.width = setting.width;
  canvas.height = setting.height
  var periodOffset = (canvas.height - setting.margin) / setting.periodsTotal;
  var blockOffset = canvas.width / (setting.blocks + 1);

  CourseGraph.drawPeriodsAndYears(canvas, context, periodOffset);
  CourseGraph.setupMouseMoveEvent(canvas, courses, setting.circleRadius);
  CourseGraph.drawCourses(context, courses, setting.margin);
})();
