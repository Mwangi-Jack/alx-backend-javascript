/* eslint-disable no-tabs */
/* eslint-disable guard-for-in */
/* eslint-disable indent */
const fs = require('fs');

function countStudents(db) {
  try {
    const data = fs.readFileSync(db, 'utf-8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    lines.shift();
    const fieldCount = {};
	const NoOfStudents = lines.length;

    lines.forEach((line) => {
      const student = line.split(',');

      const field = student[3];

      if (!fieldCount[field]) {
        fieldCount[field] = [student[0]];
      } else {
        fieldCount[field] = [...fieldCount[field], student[0]];
      }
    });
	console.log(`Number of students: ${NoOfStudents}`);

	for (const field in fieldCount) {
		console.log(`Number of students in ${field}: ${fieldCount[field].length}. List: ${fieldCount[field].join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
