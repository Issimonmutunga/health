require('dotenv').config;
const express = require('express');
const cors = require('cors');
const sequelize = require(`./config/db`);
require(`./models`)//Ensures models are synced
const db = require(`./config/db`);

const app = express();

//Middleware
app.use(cors());
app.use(express.json()); //Parses json data
app.use(`/api/auth`,require(`./routes/authRoutes`));

//Test route
app.get('/',(req,res) => {
    res.send("Health App Backend running");
});

//Start server
const PORT = process.env.PORT || 5000;
//app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.listen(PORT, async () => {
    try{
        await db.authenticate();
        console.log('Database Connected successfully');
        await db.sync();
        console.log('Database synced...');    
    } catch (error) {
        console.error('Database connection failed:', error);    
    }
    console.log(`Server running on port ${PORT}`);
});