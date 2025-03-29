const sequelize = require(`../config/db`);
const User = require(`./User`);


const syncDB = async () => {
    /** 
     * sequelize.sync({ alter: true })::Creates tables if they don’t exist.
        ::Modifies columns if they’ve changed (without deleting data).
    */
    try{
        await sequelize.sync({ alter:true });//Use { force : true } to reset tables
        console.log(`Database synced`);
    }catch (error) {
        console.error(`Error syncing database:`,error);
    }
};
syncDB();

module.exports = { User };