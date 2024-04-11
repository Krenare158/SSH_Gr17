const express = require('express');
const app = express();
const port = 3000;
const { Sequelize, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs'); // Import bcrypt for hashing
const db = require("../models");


const sequelize = new Sequelize('sisteme', 'root', 'Lana.1234', {
    host: 'localhost',
    dialect: 'mysql'
});

(async () => {
    try {
        await sequelize.sync();
        console.log('Database synchronized');
    } catch (error) {
        console.error('Error synchronizing database:', error);
    }
})();

app.use(express.json());



