
const app = require('express')
const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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

// app.post('/api/new-movie', ({ body }, res) => {
//     const sql = `INSERT INTO movies (movie_name)
//     VALUES (?)`;
//     const params = [body.movie_name];
    
//     db.query(sql, params, (err, result) => {
//     if (err) {
//         res.status(400).json({ error: err.message });
//         return;
//     }
//     res.json({
//         message: 'success',
//         data: body
//     });
//     });
// });


app.get('/api/departments', (req, res) => {
    const sql = `SELECT id, movie_name AS title FROM movies`;
    
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