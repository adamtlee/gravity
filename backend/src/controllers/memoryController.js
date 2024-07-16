const Memory = require('../models/memoryModel');


const memoryController = {
    async getAllMemories(req, res) {
        try {
            const memories = await Memory.findAll();
            if (memories.length === 0) {
                return res.status(200).json({ message: 'No memories found' });
            }
            return res.status(200).json(memories);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    
    async getMemoryById(req, res) {
        try {
            const memory = await Memory.findByPk(req.params.id);
            if (memory) {
                res.status(200).json(memory);
            } else {
                res.status(404).json({ error: 'Memory not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async createMemory(req, res) {
        try {
            const { experience, reflection } = req.body;
            const memory = await Memory.create({ experience, reflection });
            res.status(201).json(memory);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async updateMemory(req, res) {
        try {
            const { experience, reflection } = req.body;
            const memory = await Memory.findByPk(req.params.id);
            if (memory) {
                memory.experience = experience;
                memory.reflection = reflection;
                await memory.save();
                return memory;
            } else {
                res.status(404).json({ error: 'Memory not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async deleteMemory(req, res) {
        try {
            const memory = await Memory.findByPk(req.params.id);
            if (memory) {
                await memory.destroy();
                return;
            } else {
                res.status(404).json({ error: 'Memory not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};


module.exports = memoryController;
