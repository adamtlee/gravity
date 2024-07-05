const Gratitude = require('../models/gratitudeNoteDbModel');


const gratitudeNoteDbController = {
    async getAllGratitudeNotes(req, res) {
        try {
            const gratitudes = await Gratitude.findAll();
            if (gratitudes.length === 0) {
                return res.status(200).json({ message: 'No gratitude notes found' });
            }
            return res.status(200).json(gratitudes);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    
    async getGratitudeNoteById(req, res) {
        try {
            const gratitude = await Gratitude.findByPk(req.params.id);
            if (gratitude) {
                res.status(200).json(gratitude);
            } else {
                res.status(404).json({ error: 'Gratitude Note not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async createGratitudeNote(req, res) {
        try {
            const { note } = req.body;
            const gratitude = await Gratitude.create({ note });
            res.status(201).json(gratitude);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async updateGratitudeNote(req, res) {
        try {
            const { note } = req.body;
            const gratitude = await Gratitude.findByPk(req.params.id);
            if (gratitude) {
                // refactor
                gratitude.note = note;
                await gratitude.save();
                res.status(200).json(gratitude);
            } else {
                res.status(404).json({ error: 'Gratitude note not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async deleteGratitudeNote(req, res) {
        try {
            const gratitude = await Gratitude.findByPk(req.params.id);
            if (gratitude) {
                await gratitude.destroy();
                res.status(204).send();
            } else {
                res.status(404).json({ error: 'Gratitude Note not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};


module.exports = gratitudeNoteDbController;
