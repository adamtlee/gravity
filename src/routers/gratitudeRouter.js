const express = require('express');
const router = express.Router();
const gratitudeController = require('../controllers/gratitudeController');

// Gratitude Notes
router.get('/', gratitudeController.getGratitudeNotes);
router.get('/add', gratitudeController.getAddGratitudeNotePage);
router.post('/add', gratitudeController.addGratitudeNote);
router.get('/edit/:id', gratitudeController.getEditGratitudeNotePage);
router.post('/edit/:id', gratitudeController.editGratitudeNote);
router.post('/delete/:id', gratitudeController.deleteGratitudeNote);

module.exports = router;