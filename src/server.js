const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Set up body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Import the gratitudeController
const gratitudeController = require('./controllers/gratitudeController');
const memoryController = require('./controllers/memoryController');
const connectionController = require('./controllers/connectionController');
const pagesController = require('./controllers/pagesController');

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Routes

// Pages
app.get('/', pagesController.getIndex);

// Gratitude Notes
app.get('/gratitudeNotes', gratitudeController.getGratitudeNotes);
app.get('/gratitudeNotes/add', gratitudeController.getAddGratitudeNotePage);
app.post('/gratitudeNotes/add', gratitudeController.addGratitudeNote);
app.get('/gratitudeNotes/edit/:id', gratitudeController.getEditGratitudeNotePage);
app.post('/gratitudeNotes/edit/:id', gratitudeController.editGratitudeNote);
app.post('/gratitudeNotes/delete/:id', gratitudeController.deleteGratitudeNote);

// Memories
app.get('/memories', memoryController.getMemories);
app.get('/memories/add', memoryController.getAddMemoryPage);
app.post('/memories/add', memoryController.addMemory);
app.get('/memories/edit/:id', memoryController.getEditMemoryPage);
app.post('/memories/edit/:id', memoryController.editMemory); 
app.post('/memories/delete/:id', memoryController.deleteMemory);

// Connections
app.get('/connections', connectionController.getConnections); 
app.get('/connections/add', connectionController.getAddConnectionPage); 
app.post('/connections/add', connectionController.addConnection); 
app.get('/connections/edit/:id', connectionController.getEditConnectionPage);
app.post('/connections/edit/:id', connectionController.editConnection); 
app.post('/connections/delete/:id', connectionController.deleteConnection);


// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
