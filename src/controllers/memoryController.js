const Memory = require('../models/memoryModel');

const memoryController = {
  getMemories: (req, res) => {
    // In a real app, this data would come from a database
    const memories = Memory.getAllMemories();

    res.render('memories/index', { memories });
  }
};

module.exports = memoryController;
