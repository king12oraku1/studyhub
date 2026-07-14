const assert = require('assert');
const StudyHubCatalog = require('../js/courseCatalog.js');

assert.ok(StudyHubCatalog.getCollegeOptions().some(college => college.value === 'COLNAS'));
assert.ok(StudyHubCatalog.getProgrammeOptions('COLNAS').some(option => option.value === 'Computer Science'));

const courses = StudyHubCatalog.getCourseOptions({
  college: 'COLNAS',
  programme: 'Computer Science',
  level: '100',
  semester: 'First',
  sourceCodes: ['MTH101', 'COS101', 'PHY101']
});

assert.ok(courses.some(course => course.code === 'MTH101'));
assert.ok(!courses.some(course => course.code === 'COS102'));

const engineeringCourses = StudyHubCatalog.getCourseOptions({
  college: 'COLENG',
  programme: 'Mechanical Engineering',
  level: '100',
  semester: 'First'
});

assert.ok(engineeringCourses.some(course => course.code === 'MTH101'));

const sharedEntry = StudyHubCatalog.getCourseEntry('GST111');
assert.ok(sharedEntry.programmes.includes('Computer Science'));
assert.ok(sharedEntry.programmes.includes('Mechanical Engineering'));

console.log('course catalog tests passed');
