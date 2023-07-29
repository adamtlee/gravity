const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, '../data/gratitudeNotes.json');

class GratitudeNote {
  constructor(note, id) {
    this.id = id || Date.now().toString();
    this.note = note;
  }

  static getAllGratitudeNotes() {
    try {
      const data = fs.readFileSync(dataFilePath, 'utf8');
      return JSON.parse(data);
    } catch (err) {
      // If the file doesn't exist or is empty, return an empty array
      return [];
    }
  }

  save() {
    const allGratitudeNotes = GratitudeNote.getAllGratitudeNotes();
    allGratitudeNotes.push(this);
    fs.writeFileSync(dataFilePath, JSON.stringify(allGratitudeNotes, null, 2));
  }

  update() {
    const allGratitudeNotes = GratitudeNote.getAllGratitudeNotes();
    const index = allGratitudeNotes.findIndex(note => note.id === this.id);
    if (index !== -1) {
      allGratitudeNotes[index] = this;
      fs.writeFileSync(dataFilePath, JSON.stringify(allGratitudeNotes, null, 2));
    }
  }

  static delete(id) {
    const allGratitudeNotes = GratitudeNote.getAllGratitudeNotes();
    const filteredGratitudeNotes = allGratitudeNotes.filter(note => note.id !== id);
    fs.writeFileSync(dataFilePath, JSON.stringify(filteredGratitudeNotes, null, 2));
  }

  static getGratitudeNoteById(id) {
    const allGratitudeNotes = GratitudeNote.getAllGratitudeNotes();
    return allGratitudeNotes.find(note => note.id === id);
  }
}

module.exports = GratitudeNote;
