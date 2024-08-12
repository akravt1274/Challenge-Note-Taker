const express = require('express');
const router = express.Router();

const fs = require('fs');
const ShortUniqueId = require('short-unique-id');
const notes = require('../db/db');

// To generate unique ids using 'short-unique-id'
const uid = new ShortUniqueId({ length: 4 });

const dbName = './db/db.json';
// Write data to db.json file
function writeToDB(data) {  
  fs.writeFile(dbName, data, (err) =>
    err
      ? console.error(err)
      : console.log(
        `${dbName} file has been updated`
      )
  );  
}

// Read data from db.json file
function readFromDB(data) {
  

}

// GET request for ALL notes
router.get('/api/notes', (req, res) => {
  console.info(`${req.method} request received to get notes from db.json`);
  return res.json(notes);
});

// POST request to add a new note
router.post('/api/notes', (req, res) => {
  console.info(`${req.method} request received to post a notes to db.json`);
  
  // Destructuring assignment for the items in req.body
  const { title, text } = req.body;

  // If all the required properties are present
  if (title && text) {
    // Variable for the object to save in db.json
    const newNote = {
      title,
      text,
      id: uid.rnd(),
    };

    fs.readFile(dbName, 'utf8', (err, data) => {
      if (err) console.error(err);
        
      const storedNotes = JSON.parse(data);        
      storedNotes.push(newNote);        
      // Write 'notes' to a file. Convert the data to a string to save it
      writeToDB(JSON.stringify(storedNotes));  
    });

    // console.log('response', response);
    const response = {
      status: 'success',
      body: newNote,
    };

    res.status(200).json(response);
  }
  else {
      res.status(500).json('Error in posting a note');
  }
});

router.delete('/api/notes/:id', (req, res) => {
  console.info(`${req.method} request received to delete a note from db.json`);

  // Destructuring assignment for the items in req.body
  const id = req.params.id;

  // If all the required properties are present
  if (id) {
    fs.readFile(dbName, 'utf8', (err, data) => {
      if (err) console.error(err);      

      const storedNotes = JSON.parse(data);        
      const index = storedNotes.findIndex(inx => inx.id === id);
      if (index !== -1) storedNotes.splice(index, 1);        
        
      // Write 'notes' to a file. Convert the data to a string to save it
      writeToDB(JSON.stringify(storedNotes));     
    });

    const response = {
      status: 'success',
      body: id,
    };
    res.status(200).json(response);
  }
  else {
      res.status(500).json('Error in deleting a note');
  }
});

module.exports = router;