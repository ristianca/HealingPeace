/* loginModel handles the database operations for login and registration of users. 
Still need to encrypt password before sending it to the db*/

const connection = require("./dbModel");

const loginSchema = `
    CREATE TABLE IF NOT EXISTS LOGIN (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL)
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,`; 

//function to create the login table
const createDBTables = () =>{
    connection.query(loginSchema, (err) => {
        if (err) {
            console.error('Error creating LOGIN table:', err);
            return;
        }
        console.log('Login table created');
    });
};

//function to save a new user to the database
const registerLogin = async (email, password) => {
    const user = {email, password};
    try {
        const results = await connection.queryDB('INSERT INTO `LOGIN` (`email`, `password`) VALUES("' + user.email + '" , "' + user.password + '")');
        return results;
        }
        catch (error) {
            console.error(error);
            return error;
    }
    
}
const getLogin = (email) => {
    connection.query('SELECT * FROM LOGIN WHERE email = ?', email, (err, results) => {
        if (err) {
            console.error('Error fetching user:', err);
            return;
        }
        return results[0];
    });

}

module.exports = { createDBTables, registerLogin, getLogin };