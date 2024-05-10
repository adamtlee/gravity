const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Set up body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Import the gratitudeController
const memoryController = require('./controllers/memoryController');
const connectionController = require('./controllers/connectionController');
const pagesController = require('./controllers/pagesController');

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Import Routers
const gratitudeRouter = require('./routers/gratitudeRouter'); 
const memoryRouter = require('./routers/memoryRouter');

// Use Routers
app.use('/gratitudeNotes', gratitudeRouter );
app.use('/memory', memoryRouter ); 

// Pages
app.get('/', pagesController.getIndex);


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
