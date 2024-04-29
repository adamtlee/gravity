const GratitudeNote = require('../models/gratitudeModel');

const gratitudeController = {
  getGratitudeNotes: (req, res) => {
    // In a real app, this data would come from a database
    const gratitudeNotes = GratitudeNote.getAllGratitudeNotes();

    res.render('gratitudeNotes/index', { gratitudeNotes });
  },

  getAddGratitudeNotePage: (req, res) => {
    res.render('gratitudeNotes/add');
  },

  addGratitudeNote: (req, res) => {
    const { note } = req.body;
    const newGratitudeNote = new GratitudeNote(note);

    // In a real app, you'd save the gratitude note to a database
    newGratitudeNote.save();

    res.redirect('/gratitudeNotes');
  },

  getEditGratitudeNotePage: (req, res) => {
    const { id } = req.params;
    const gratitudeNote = GratitudeNote.getGratitudeNoteById(id);

    if (!gratitudeNote) {
      res.status(404).send('Gratitude note not found.');
      return;
    }

    res.render('gratitudeNotes/edit', { gratitudeNote });
  },

  editGratitudeNote: (req, res) => {
    const { id } = req.params;
    const { note } = req.body;
    const updatedGratitudeNote = new GratitudeNote(note, id);

    // In a real app, you'd update the gratitude note in the database
    updatedGratitudeNote.update();

    res.redirect('/gratitudeNotes');
  },

  deleteGratitudeNote: (req, res) => {
    const { id } = req.params;

    // In a real app, you'd delete the gratitude note from the database
    GratitudeNote.delete(id);

    res.redirect('/gratitudeNotes/');
  },
};

module.exports = gratitudeController;
