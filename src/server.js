const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Set up body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Import the gratitudeController
const gratitudeController = require('./controllers/gratitudeController');
const memoryController = require('./controllers/memoryController');

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Routes

// Gratitude Notes
app.get('/', gratitudeController.getGratitudeNotes);
app.get('/add', gratitudeController.getAddGratitudeNotePage);
app.post('/add', gratitudeController.addGratitudeNote);
app.get('/edit/:id', gratitudeController.getEditGratitudeNotePage);
app.post('/edit/:id', gratitudeController.editGratitudeNote);
app.post('/delete/:id', gratitudeController.deleteGratitudeNote);

// Memories
app.get('/memories', memoryController.getMemories);

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
