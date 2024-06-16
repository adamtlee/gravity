const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Memory = sequelize.define('Memory', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    
    experience: {
        type: DataTypes.STRING,
        allowNull: false
    },
    reflection: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    }
});

module.exports = Memory;
