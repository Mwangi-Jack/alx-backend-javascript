/* eslint-disable class-methods-use-this */

const readDatabase = require('../utils');

const db = process.argv[2];

class StudentController {
  static getAllStudents(request, response) {
    response.statusCode = 200;
    readDatabase(db)
      .then((data) => {
        response.write('This is the list of our students\n');
        for (const [k, v] of Object.entries(data)) {
          response.write(`Number of students in ${k}: ${v.length}. List: ${v.join(', ')}\n`);
        }
        response.end();
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { url } = request;
    console.log(url);

    switch (url) {
      case '/students/SWE':
        console.log('SWE');
        response.statusCode = 200;
        readDatabase(db)
          .then((data) => {
            response.statusCode = 200;
            response.write(`List. ${data.SWE.join(', ')}`);
            response.end();
          })
          .catch(() => {
            response.statusCode = 500;
            response.end('Cannot load the database');
          });
        break;
      case '/students/CS':
        console.log('CS');
        readDatabase(db)
          .then((data) => {
            response.statusCode = 200;
            response.write(`List. ${data.CS.join(', ')}`);
            response.end();
          })
          .catch(() => {
            response.statusCode = 500;
            response.end('Cannot load the database');
          });
        break;
      default:
        response.statusCode = 500;
        response.end('Major parameter must be CS or SWE');
    }
  }
}

module.exports = StudentController;
