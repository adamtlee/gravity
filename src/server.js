const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Set up body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Import the gratitudeController
const pagesController = require('./controllers/pagesController');

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Import Routers
const gratitudeRouter = require('./routers/gratitudeRouter'); 
const memoryRouter = require('./routers/memoryRouter');
const connectionRouter = require('./routers/connectionRouter');

// Use Routers
app.use('/gratitudeNotes', gratitudeRouter );
app.use('/memories', memoryRouter ); 
app.use('/connections', connectionRouter );

// Pages
app.get('/', pagesController.getIndex);





// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
