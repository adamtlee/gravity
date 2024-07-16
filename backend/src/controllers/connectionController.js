const Connection = require('../models/connectionModel');


const connectionController = {
    async getAllConnections(req, res) {
        try {
            const connections = await Connection.findAll();
            if (connections.length === 0) {
                return res.status(200).json({ message: 'No connections found' });
            }
            return res.status(200).json(connections);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    
    async getConnectionById(req, res) {
        try {
            const connection = await Connection.findByPk(req.params.id);
            if (connection) {
                res.status(200).json(connection);
            } else {
                res.status(404).json({ error: 'Connection not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async createConnection(req, res) {
        try {
            const { first_name, last_name, details, relationship } = req.body;
            const connection = await Connection.create({ first_name, last_name, details, relationship });
            res.status(201).json(connection);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async updateConnection(req, res) {
        try {
            const { first_name, last_name, details, relationship } = req.body;
            const connection = await Connection.findByPk(req.params.id);
            if (connection) {
                connection.first_name = first_name;
                connection.last_name = last_name;
                connection.details = details;
                connection.relationship = relationship;
                await connection.save();
                res.status(200).json(connection);
            } else {
                res.status(404).json({ error: 'Connection not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async deleteConnection(req, res) {
        try {
            const connection = await Connection.findByPk(req.params.id);
            if (connection) {
                await connection.destroy();
                res.status(404).send();
            } else {
                res.status(404).json({ error: 'Connection not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};


module.exports = connectionController;
