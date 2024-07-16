const express = require('express');
const router = express.Router();
const memoryController = require('../controllers/memoryController');

router.get('/', memoryController.getAllMemories);

// Route to get a single memory by ID
router.get('/:id', memoryController.getMemoryById);

// Route to create a new memory
router.post('/', memoryController.createMemory);

// Route to update a memory
router.put('/:id', memoryController.updateMemory);

// Route to delete a memory
router.delete('/:id', memoryController.deleteMemory);

module.exports = router;
