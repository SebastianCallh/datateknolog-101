
//Creates a "namespace" to prevent naming collisions
var CourseGraph = window.CourseGraph || {};

CourseGraph.settings = {
  width: 1000,
  height: 1200,
  margin: 80,
  periodsPerYear: 4,
  periodsTotal: 12,
  blocks: 20,
  nodeRadius: 30,
  lineColor: '#d5d6dd',
  yearColor: '#000000',
  yearFont: '2em Calibri',
  periodColor: '#111111',
  periodFont: '1em Calibri',
  breadTextFont: '0.8em Calibri',
  fieldColor: { 'math': '#754022',
                'software': '#70BD44',
                'hardware': '#F7E623',
                'physics': '#E5398D',
                'softskills': '#20407C' }
};
