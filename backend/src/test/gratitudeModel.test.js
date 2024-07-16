const fs = require('fs');
const chai = require('chai');
const sinon = require('sinon');
const GratitudeNote = require('../models/gratitudeModel');

const { expect } = chai;

describe('GratitudeNote Model', () => {
  beforeEach(() => {
    // Stub fs.readFileSync and fs.writeFileSync to prevent reading/writing to actual files during tests
    sinon.stub(fs, 'readFileSync').returns('[]');
    sinon.stub(fs, 'writeFileSync');
  });

  afterEach(() => {
    // Restore the original fs functions after each test
    sinon.restore();
  });

  it('should get all gratitude notes', () => {
    // Test the getAllGratitudeNotes() method
    const gratitudeNotes = GratitudeNote.getAllGratitudeNotes();
    expect(gratitudeNotes).to.be.an('array').and.to.have.lengthOf(0);
  });

  it('should save a new gratitude note', () => {
    // Test the save() method
    const gratitudeNote = new GratitudeNote('New Gratitude Note');
    gratitudeNote.save();
    expect(fs.writeFileSync.calledOnce).to.be.true;
  });

  it('should update an existing gratitude note', () => {
    // Test the update() method
    const gratitudeNote = new GratitudeNote('Existing Gratitude Note', '1630240211058');
    gratitudeNote.update();
    expect(fs.writeFileSync.calledOnce).to.be.true;
  });

  it('should delete an existing gratitude note', () => {
    // Test the delete() method
    GratitudeNote.delete('1630240211058');
    expect(fs.writeFileSync.calledOnce).to.be.true;
  });

  it('should get a gratitude note by ID', () => {
    // Test the getGratitudeNoteById() method
    const gratitudeNote = GratitudeNote.getGratitudeNoteById('1630240211058');
    expect(gratitudeNote).to.deep.equal({
      id: '1630240211058',
      note: 'I am grateful for my family.',
    });
  });
});
