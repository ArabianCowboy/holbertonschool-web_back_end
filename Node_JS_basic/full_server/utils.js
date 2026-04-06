import fs from 'fs';

const readDatabase = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      reject(err);
      return;
    }

    const rows = data.trim().split('\n');
    rows.shift();

    const studentsByField = {};

    rows.forEach((row) => {
      const [firstname, , , field] = row.split(',');

      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }

      studentsByField[field].push(firstname);
    });

    resolve(studentsByField);
  });
});

export default readDatabase;
