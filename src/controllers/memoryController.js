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
    const { memory, reflection } = req.body;
    const newMemory = new Memory(reflection, memory);
    newMemory.save();
    res.redirect('/memories');
  },

  getEditMemoryPage: (req, res) => {
    const { id }  = req.params; 
    const memory = Memory.getMemoryById(id);
    
    if(!memory){
      res.status(404).send('Memory not found.')
      return; 
    }

    res.render('memories/edit', { memory }); 
  },

  editMemory: (req, res) => {
    const { id } = req.params; 
    const { memory, reflection } = req.body;
    const updateMemory = new Memory(reflection, memory, id)
    
    updateMemory.update();

    res.redirect('/memories');
  },

  deleteMemory: (req, res) => {
    const { id } = req.params; 

    Memory.delete(id); 

    res.redirect('/memories/');
  }
};

module.exports = memoryController;
