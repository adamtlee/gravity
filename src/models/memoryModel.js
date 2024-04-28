const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, '../data/memories.json');

class Memory {
    constructor(reflection, memory, id) {
        this.id = id || Date.now().toString();
        this.memory = memory;
        this.reflection = reflection; 
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
    save() {
      const allMemories = Memory.getAllMemories();
      allMemories.push(this);
      fs.writeFileSync(dataFilePath, JSON.stringify(allMemories, null, 2));
    }
    update() {
      const allMemories = Memory.getAllMemories();
      const index = allMemories.findIndex(memory => memory.id === this.id);
      if (index !== -1) {
        allMemories[index] = this;
        fs.writeFileSync(dataFilePath, JSON.stringify(allMemories, null, 2));
      }
    }
  
    static delete(id) {
      const allMemories = Memory.getAllMemories();
      const filteredMemories = allMemories.filter(memory => memory.id !== id);
      fs.writeFileSync(dataFilePath, JSON.stringify(filteredMemories, null, 2));
    }
  
    static getMemoryById(id) {
      const allMemories = Memory.getAllMemories();
      return allMemories.find(memory => memory.id === id);
    }
}

module.exports = Memory;
