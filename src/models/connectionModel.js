const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, '../data/connections.json');

class Connection {
    constructor(first_name, last_name, details, relationship, id) {
        this.id = id || Date.now().toString();
        this.first_name = first_name;
        this.last_name  = last_name; 
        this.details = details;
        this.relationship = relationship;
    }
    static getAllConnections() {
      try {
        const data = fs.readFileSync(dataFilePath, 'utf8');
        return JSON.parse(data);
      } catch (err) {
        // If the file doesn't exist or is empty, return an empty array
        return [];
      }
    }
    save() {
      const allConnections = Connection.getAllConnections();
      allConnections.push(this);
      fs.writeFileSync(dataFilePath, JSON.stringify(allConnections, null, 2));
    }
    update() {
      const allConnections = Connection.getAllConnections();
      const index = allConnections.findIndex(connection => connection.id === this.id);
      if (index !== -1) {
        allConnections[index] = this;
        fs.writeFileSync(dataFilePath, JSON.stringify(allConnections, null, 2));
      }
    }
  
    static delete(id) {
      const allConnections = Connection.getAllConnections();
      const filteredConnections = allConnections.filter(connection => connection.id !== id);
      fs.writeFileSync(dataFilePath, JSON.stringify(filteredConnections, null, 2));
    }
  
    static getConnectionById(id) {
      const allConnections = Connection.getAllConnections();
      return allConnections.find(connection => connection.id === id);
    }
}

module.exports = Connection;