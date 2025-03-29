require('dotenv').config;
const express = require('express');
const cors = require('cors');
const sequelize = require(`./config/db`);
require(`./models`)//Ensures models are synced

const app = express();

//Middleware
app.use(cors());
app.use(express.json());

//Test route
app.get('/',(req,res) => {
    res.send("Health App Backend running");
});

//Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));