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

app.post('/register', async (req, res) => {
    const { usernameR, passwordR } = req.body;
    try {
        // Hash the password on the server side as well for security
        const hashedPwd = await bcrypt.hash(passwordR, 10); // 10 is the number of salt rounds
        const newUserRecord = await Register.create({
            usernameR,
            passwordR: hashedPwd // Use the hashed password
        });
        console.log('User registered successfully:', newUserRecord);
        res.send('User registered successfully');
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            res.status(409).send('Username Taken');
        } else {
            console.error('Error registering user:', error.message);
            res.status(500).send('Registration Failed');
        }
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


