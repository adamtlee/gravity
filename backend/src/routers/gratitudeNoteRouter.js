const express = require('express');
const router = express.Router();
const gratitudeNoteDbController = require('../controllers/gratitudeNoteController');

router.get('/', gratitudeNoteDbController.getAllGratitudeNotes);

// Route to get a single memory by ID
router.get('/:id', gratitudeNoteDbController.getGratitudeNoteById);

// Route to create a new memory
router.post('/', gratitudeNoteDbController.createGratitudeNote);

// Route to update a memory
router.put('/:id', gratitudeNoteDbController.updateGratitudeNote);

// Route to delete a memory
router.delete('/:id', gratitudeNoteDbController.deleteGratitudeNote);

module.exports = router;
