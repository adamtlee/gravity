const Connection = require('../models/connectionModel');

const connectionController = {
  getConnections: (req, res) => {
    // In a real app, this data would come from a database
    const connections = Connection.getAllConnections();

    res.render('connections/index', { connections });
  },

  getAddConnectionPage: (req, res) => {
    res.render('connections/add');
  }, 

  addConnection: (req, res) => {
    const { connection } = req.body; 
    const newConnection = new Connection(connection); 

    // In a real app, you'd save the connection to a database
    newConnection.save();

    res.redirect('/connections');
  }, 

  getEditConnectionPage: (req, res) => {
    const { id } = req.params;
    const connection = Connection.getConnectionById(id);

    if (!connection) {
      res.status(404).send('Connection not found.');
      return;
    }

    res.render('connections/edit', { connection });
  },

  editConnection: (req, res) => {
    const { id } = req.params;
    const { first_name, last_name, relationship, details } = req.body;
    const updatedConnection = new Connection(first_name, last_name, relationship, details, id);

    // In a real app, you'd update the gratitude note in the database
    updatedConnection.update();

    res.redirect('/connections');
  },

  deleteConnection: (req, res) => {
    const { id } = req.params;

    // In a real app, you'd delete the connection from the database
    Connection.delete(id);

    res.redirect('/connections/');
  },
};

module.exports = connectionController;
