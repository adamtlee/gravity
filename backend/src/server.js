const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Set up body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Import the gratitudeController
const pagesController = require('./controllers/pagesController');

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Middleware to parse JSON body
app.use(express.json());

// Import Routers
const memoryDbRouter = require('./routers/memoryRouter');
const connectionDbRouter = require('./routers/connectionRouter');
const gratitudeNoteDbRouter = require('./routers/gratitudeNoteRouter');

// Use Routers
app.use('/api/memories', memoryDbRouter);
app.use('/api/connections', connectionDbRouter);
app.use('/api/gratitudeNotes', gratitudeNoteDbRouter); 

// Pages
app.get('/', pagesController.getIndex);

// Import and sync the Sequelize models
const sequelize = require('./config/database');
const Memory = require('./models/memoryModel');
const Connection = require('./models/connectionModel');
const GratitudeNote = require('./models/gratitudeNoteModel');

sequelize.sync().then(() => {
    console.log('Database & tables created!');
}).catch((error) => {
    console.error('Unable to create database and tables:', error);
});


// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
