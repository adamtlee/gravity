const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const GratitudeNote = sequelize.define('GratitudeNote', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    note: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    }
});

module.exports = GratitudeNote;
