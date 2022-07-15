const { Client } = require('pg');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

const config = {
  user: 'postgres',
  host: 'localhost',
  database: 'phone_book',
  password: 'P@ssw0rd123',
  port: 5432,
};

const client = new Client(config);

client.connect();

app.post('/users', (req, res) => {
  const { firstname, lastname, phone } = req.body;
  const query = {
    text: 'INSERT INTO users(firstname, lastname, phone) VALUES($1, $2, $3)',
    values: [firstname, lastname, phone],
  };

  client
    .query(query)
    .then((response) => res.send(response.rows))
    .catch((e) => console.error(e.stack));
});

app.get('/users', (req, res) => {
  const query = {
    text: 'SELECT * from users',
  };

  client
    .query(query)
    .then((response) => res.send(response.rows))
    .catch((e) => console.error(e.stack));
});

app.listen(3001);
