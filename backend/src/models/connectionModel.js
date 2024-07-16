const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Connection = sequelize.define('Connection', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    details: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    relationship: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    }
});

module.exports = Connection;
