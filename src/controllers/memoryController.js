const Memories = require('../models/memoryModel');

const memoryController = {
  getMemories: (req, res) => {
    // In a real app, this data would come from a database
    const memories = Memories.getAllMemories();

    res.render('memories', { memories });
  }
};

module.exports = memoryController;
