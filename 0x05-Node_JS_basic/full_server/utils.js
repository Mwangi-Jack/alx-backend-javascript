const fs = require('fs');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(Error('Could not load database'));
        throw new Error('Could not load database');
      }

      const lines = data.trim().split('\n');
      const students = lines.splice(1).map((line) => line.split(','));

      const fields = {};

      students.forEach((student) => {
        const field = student[3];
        const firstname = student[0];

        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      });
      resolve(fields);
    });
  });
}

// readDatabase('../database.csv')
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log('READING ERROR::::', err);
//   });

module.exports = readDatabase;
