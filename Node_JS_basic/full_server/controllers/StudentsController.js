import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    const database = process.argv[2];

    readDatabase(database)
      .then((students) => {
        const sortedFields = Object.keys(students).sort((a, b) => (
          a.localeCompare(b, undefined, { sensitivity: 'base' })
        ));

        const lines = ['This is the list of our students'];

        sortedFields.forEach((field) => {
          const fieldLine = `Number of students in ${field}: ${students[field].length}. `
            + `List: ${students[field].join(', ')}`;
          lines.push(fieldLine);
        });

        response.status(200).send(lines.join('\n'));
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const database = process.argv[2];
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(database)
      .then((students) => {
        const list = students[major] ? students[major].join(', ') : '';
        response.status(200).send(`List: ${list}`);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
