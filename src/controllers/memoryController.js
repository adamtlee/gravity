const Memory = require('../models/memoryModel');

const memoryController = {
  getMemories: (req, res) => {
    // In a real app, this data would come from a database
    const memories = Memory.getAllMemories();

    res.render('memories/index', { memories });
  },

  getAddMemoryPage: (req, res) => {
    res.render('memories/add');
  },

  addMemory: (req, res) => {

    // Retrieve memory and reflection from the request body
    const { memory, reflection } = req.body;

    // Create a new memory object
    const newMemory = new Memory(reflection, memory);

    // Save the new memory to the data store (e.g. file or database)
    newMemory.save();

    // Redirect the user to the memories page
    res.redirect('/memories');
  }
};

module.exports = memoryController;
