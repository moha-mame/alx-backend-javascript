const { readDatabase } = require('../utils');

class StudentsController {
    static async getAllStudents(req, res) {
        try {
            const data = await readDatabase('path/to/database.csv');
            if (!data) {
                throw new Error('Cannot load the database');
            }

            let response = 'This is the list of our students\n';
            const fields = Object.keys(data).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

            for (const field of fields) {
                const students = data[field];
                response += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
            }

            res.status(200).send(response);
        } catch (error) {
            res.status(500).send('Cannot load the database');
        }
    }

    static async getAllStudentsByMajor(req, res) {
        const major = req.params.major; // Assuming you're using a parameter named 'major'

        if (major !== 'CS' && major !== 'SWE') {
            res.status(500).send('Major parameter must be CS or SWE');
            return;
        }

        try {
            const data = await readDatabase('path/to/database.csv');
            if (!data) {
                throw new Error('Cannot load the database');
            }

            const students = data[major] || [];
            const response = `List: ${students.join(', ')}`;
            res.status(200).send(response);
        } catch (error) {
            res.status(500).send('Cannot load the database');
        }
    }
}

module.exports = StudentsController;
