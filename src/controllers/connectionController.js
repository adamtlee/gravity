const Connection = require('../models/connectionModel');

const connectionController = {
  getConnections: (req, res) => {
    // In a real app, this data would come from a database
    const connections = Connection.getAllConnections();

    res.render('connections/index', { connections });
  },

  getAddConnectionPage: (req, res) => {
    res.render('connections/add');
  }
};

module.exports = connectionController;
