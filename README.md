# Note Taker

## Description
In this challenge, I built the back end for an application called Note Taker, integrated it with front end, provided in the starter code, and deployed the entire application to Render. The Note Taker application can be used to write, save and delete notes.
* Note: the front end code provided is buggy - to see the changes after adding a new note or deleting existing note, a user needs refresh the page.

This application will use an Express.js back end and will store and retrieve notes from a JSON file on the back end.

The following HTML routes were created:
* GET /notes to return the notes.html file.
* GET * to return the index.html file.

The following API routes were created:
* GET /api/notes to read the db.json file and return all saved notes as JSON.
* POST /api/notes to receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. A unique id is given to each note when it's saved (using 'short-unique-id' npm package).
* DELETE /api/notes/:id to receive a query parameter containing the id of a note to delete. 


## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Review](#review)
* [Contact](#contact)

## Installation
Clone this project repository to your computer. Use the terminal to run the commands:
- Use the command "npm install" to install application dependecies. 

## Usage
Navigate to the project folder in the terminal. 
Invoke the application by typing "node index.js" in the terminal's command line. 
Refer to the demonstration video posted in the [Review](#review).

### Screenshots
- A landing page with a link to a notes page
![alt text](images/image.png)
- A notes page with existing notes listed in the left-hand column, and empty fields to enter a new note title and the note’s text in the right-hand column.
![alt text](images/image-1.png)
- When entering a new note title and the note’s text, the "Save Note" and "Clear Form" buttons appear in the navigation at the top of the page. 
![alt text](images/image-2.png)
- Clicking on the Save button, saves a note in the db.json file and newly added note appears in the left-hand column with the other existing notes, the "Save Note" and "Clear Form" buttons in the navigation disappear.
![alt text](images/image-3.png)
- Clicking on an existing note in the list in the left-hand column, displays that note in the right-hand column and a "New Note" button appears in the navigation.
![alt text](images/image-4.png)
- Clicking on the "New Note" button in the navigation at the top of the page, displays empty fields to enter a new note title and the note’s text in the right-hand column and the button disappears.
![alt text](images/image-5.png)
- Clicking on the Delete button (trash icon), deletes a note in the db.json file and that note disappears in the left-hand column.
![alt text](images/image-6.png)

## Review
The walkthrough video that demonstrates application functionality: [video](https://drive.google.com/file/d/12sHeWmg6psycQgmYkoDlRiehKfoXoeU1/view)

The URL of the functional, deployed application: [live project](https://challenge-note-taker.onrender.com/). Note: POST and DELETE API routes work locally (refer to the video above) but not on Render server.

## Contact
Contact me with any ideas or requests: akravt1274@gmail.com
