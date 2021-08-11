const inquirer = require('inquirer')
const express = require('express')
const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;
const app = express()

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const openQ = [
    {
        message: 'What would you like to do?',
        type: 'list',
        name: 'selection',
        choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a role',
            'Add a department',
            'Add an employee',
        ]
    },
]

const db = mysql.createConnection(
    {
    host: 'localhost',
      // MySQL username,
    user: 'root',
      // TODO: Add MySQL password here
    password: '1q2w3e4r5t',
    database: 'job_db'
    },
    console.log(`Connected to the job_db database.`)
);


app.get('/api/departments', (req, res) => {
    const sql = `SELECT * FROM departments`;
    
    db.query(sql, (err, rows) => {
    if (err) {
        res.status(500).json({ error: err.message });
        return;
    }
    res.json({
        message: 'success',
        data: rows
    });
    });
});
app.get('/api/employees', (req, res) => {
    const sql = `SELECT * FROM employees`;
    
    db.query(sql, (err, rows) => {
    if (err) {
        res.status(500).json({ error: err.message });
        return;
    }
    res.json({
        message: 'success',
        data: rows
    });
    });
});
app.get('/api/roles', (req, res) => {
    const sql = `SELECT * FROM roles`;
    
    db.query(sql, (err, rows) => {
    if (err) {
        res.status(500).json({ error: err.message });
        return;
    }
    res.json({
        message: 'success',
        data: rows
    });
    });
});


app.use((req, res) => {
    res.status(404).end();
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

inquirer
.prompt(openQ)
.then((data) => {
    
    if (data.selection == openQ[0].choices[0]) {
        const sql = `SELECT * FROM departments`;
    
    db.query(sql, (err, rows) => {
    if (err) {
        return;
        }
    console.table(rows)
        })
    }
    if (data.selection == openQ[0].choices[1]) {
        const sql = `SELECT * FROM roles`;
    
    db.query(sql, (err, rows) => {
    if (err) {
        return;
        }
    console.table(rows)
        })
    }
    if (data.selection == openQ[0].choices[2]) {
        const sql = `SELECT * FROM employees`;
    
    db.query(sql, (err, rows) => {
    if (err) {
        return;
        }
    console.table(rows)
        })
    }
    if (data.selection == openQ[0].choices[3]) {
        const sql = `SELECT * FROM departments`;
    
    db.query(sql, (err, rows) => {
    if (err) {
        return;
        }
    console.table(rows)
        })
    }
    if (data.selection == openQ[0].choices[4]) {
        const sql = `SELECT * FROM departments`;
    
    db.query(sql, (err, rows) => {
    if (err) {
        return;
        }
    console.table(rows)
        })
    }
    if (data.selection == openQ[0].choices[5]) {
        const sql = `SELECT * FROM departments`;
    
    db.query(sql, (err, rows) => {
    if (err) {
        return;
        }
    console.table(rows)
        })
    }
})