const express = require('express');
const router = express.Router();
const connectionDbController = require('../controllers/connectionDbController');

router.get('/', connectionDbController.getAllConnections);

// Route to get a single memory by ID
router.get('/:id', connectionDbController.getConnectionById);

// Route to create a new memory
router.post('/', connectionDbController.createConnection);

// Route to update a memory
router.put('/:id', connectionDbController.updateConnection);

// Route to delete a memory
router.delete('/:id', connectionDbController.deleteConnection);

module.exports = router;
