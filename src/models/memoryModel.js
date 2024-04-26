const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, '../data/memories.json');

class Memory {
    constructor(reaction, outcome, feeling, memory, id) {
        this.id = id || Date.now().toString();
        this.memory = memory;
        this.reaction = reaction;
        this.outcome = outcome; 
        this.feeling = feeling;
    }
    static getAllMemories() {
        try {
          const data = fs.readFileSync(dataFilePath, 'utf8');
          return JSON.parse(data);
        } catch (err) {
          // If the file doesn't exist or is empty, return an empty array
          return [];
        }
      }
}

module.exports = Memory;
