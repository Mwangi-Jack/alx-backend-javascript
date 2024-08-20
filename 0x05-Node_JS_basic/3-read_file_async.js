/* eslint-disable no-tabs */
/* eslint-disable guard-for-in */
const fs = require('fs');

function countStudents (db) {
  return new Promise((resolve, reject) => {
    fs.readFile(db, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      lines.shift();
      const numberOfStudents = lines.length;
      const studentStats = {};

      lines.forEach((line) => {
        const student = line.split(',');
        const field = student[3];

        if (!studentStats[field]) {
          studentStats[field] = [student[0]];
        } else {
          studentStats[field].push(student[0]);
        }
      });
      console.log(`Number of students: ${numberOfStudents}`);
      for (const stat in studentStats) {
        console.log(`Number of students in ${stat}: ${studentStats[stat].length}. List: ${studentStats[stat].join(', ')}`);
      }
      resolve();
    });
  });
}

module.exports = countStudents;
