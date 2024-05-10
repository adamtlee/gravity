const express = require('express');
const router = express.Router();
const connectionController = require('../controllers/connectionController');

// Connections
router.get('/', connectionController.getConnections); 
router.get('/add', connectionController.getAddConnectionPage); 
router.post('/add', connectionController.addConnection); 
router.get('/edit/:id', connectionController.getEditConnectionPage);
router.post('/edit/:id', connectionController.editConnection); 
router.post('/delete/:id', connectionController.deleteConnection);

module.exports = router; 