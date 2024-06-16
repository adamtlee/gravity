const Memory = require('../models/memory');

exports.getAllMemories = async (req, res) => {
    try {
        const memories = await Memory.findAll();
        res.status(200).json(memories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getMemoryById = async (req, res) => {
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
};

exports.createMemory = async (req, res) => {
    try {
        const { experience, reflection } = req.body;
        const memory = await Memory.create({ experience, reflection });
        res.status(201).json(memory);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateMemory = async (req, res) => {
    try {
        const { experience, reflection } = req.body;
        const memory = await Memory.findByPk(req.params.id);
        if (memory) {
            memory.experience = experience;
            memory.reflection = reflection;
            await memory.save();
            res.status(200).json(memory);
        } else {
            res.status(404).json({ error: 'Memory not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteMemory = async (req, res) => {
    try {
        const memory = await Memory.findByPk(req.params.id);
        if (memory) {
            await memory.destroy();
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'Memory not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
