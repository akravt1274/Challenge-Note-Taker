const express = require('express');
const path = require('path');

const noteRoutes = require('./routes/noteRoutes');
// const fs = require('fs');
// const ShortUniqueId = require('short-unique-id');
// const notes = require('./db/db');

// setup application server
// const PORT = 3001;
const port = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to serve static files from the public folder
app.use(express.static('public'));

// To generate unique ids using 'short-unique-id'
// const uid = new ShortUniqueId({ length: 4 });

// Serve the index.html page without middleware
app.get('/', (req, res) => {
  const options = {
    root: path.join(__dirname)
  };
  const fileName = '/public/index.html';
  res.sendFile(fileName, options, (err) => {
    if (err) {
      console.error('Error sending file:', err);
    } else {
      console.log('Sent:', fileName);
    }
  });
});

// Serve the notes.html page without middleware
app.get('/notes', (req, res) => {
  const options = {
    root: path.join(__dirname)
  };
  const fileName = '/public/notes.html';
  res.sendFile(fileName, options, (err) => {
    if (err) {
      console.error('Error sending file:', err);
    } else {
      console.log('Sent:', fileName);
    }
  });
});

// Use note routes
app.use(noteRoutes);

// run application on a server
app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
);