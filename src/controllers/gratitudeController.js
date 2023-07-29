const GratitudeNote = require('../models/gratitudeModel');

const gratitudeController = {
  getGratitudeNotes: (req, res) => {
    // In a real app, this data would come from a database
    const gratitudeNotes = GratitudeNote.getAllGratitudeNotes();

    res.render('index', { gratitudeNotes });
  },

  getAddGratitudeNotePage: (req, res) => {
    res.render('addGratitudeNote');
  },

  addGratitudeNote: (req, res) => {
    const { note } = req.body;
    const newGratitudeNote = new GratitudeNote(note);

    // In a real app, you'd save the gratitude note to a database
    newGratitudeNote.save();

    res.redirect('/');
  },

  getEditGratitudeNotePage: (req, res) => {
    const { id } = req.params;
    const gratitudeNote = GratitudeNote.getGratitudeNoteById(id);

    if (!gratitudeNote) {
      res.status(404).send('Gratitude note not found.');
      return;
    }

    res.render('editGratitudeNote', { gratitudeNote });
  },

  editGratitudeNote: (req, res) => {
    const { id } = req.params;
    const { note } = req.body;
    const updatedGratitudeNote = new GratitudeNote(note, id);

    // In a real app, you'd update the gratitude note in the database
    updatedGratitudeNote.update();

    res.redirect('/');
  },

  deleteGratitudeNote: (req, res) => {
    const { id } = req.params;

    // In a real app, you'd delete the gratitude note from the database
    GratitudeNote.delete(id);

    res.redirect('/');
  },
};

module.exports = gratitudeController;
