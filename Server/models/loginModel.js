/* loginModel handles the database operations for login and registration of users. 
Still need to encrypt password before sending it to the db*/

const connection = require("./dbModel");

const loginSchema = `
    CREATE TABLE IF NOT EXISTS login (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL)`; 

//function to create the login table
export function createDBTables(){
    connection.query(loginSchema, (err) => {
        if (err) {
            console.error('Error creating login table:', err);
            return;
        }
        console.log('Login table created');
    });
}

//function to save a new user to the database
export function registerLogin(email, password) {
    const user = {
        email: email,
        password: password
    };
    connection.query('INSERT INTO login SET ?', user, (err, results) => {
        if (err) {
            console.error('Error creating user:', err);
            return;
        }
        return results;
    });
}

export function getLogin(email){
    connection.query('SELECT * FROM login WHERE email = ?', email, (err, results) => {
        if (err) {
            console.error('Error fetching user:', err);
            return;
        }
        return results[0];
    });

}