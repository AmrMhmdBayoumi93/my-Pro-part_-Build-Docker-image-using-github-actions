const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

app.get('/', (req, res) => {
  res.send(' Hello Amr ');
});

app.get('/hello', (req, res) => {
  res.send('Hello World');
});


app.get('/users', (req, res) => {
  res.send('A list of users!');
});

app.listen(PORT, HOST, () => {
  console.log('Application started successfully.');
});
