const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 3000;

const pool = new Pool({
  user: 'devops',
  host: 'postgres',
  database: 'devopsdb',
  password: 'password',
  port: 5432,
});

app.get('/', (req, res) => {
  res.send('Hello from Backend!');
});

app.get('/db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json(result.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});
