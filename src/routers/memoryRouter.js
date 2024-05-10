const express = require('express');
const router = express.Router();
const memoryController = require('../controllers/memoryController');

// Memories
router.get('/', memoryController.getMemories);
router.get('/add', memoryController.getAddMemoryPage);
router.post('/add', memoryController.addMemory);
router.get('/edit/:id', memoryController.getEditMemoryPage);
router.post('/edit/:id', memoryController.editMemory); 
router.post('/delete/:id', memoryController.deleteMemory);

module.exports = router;