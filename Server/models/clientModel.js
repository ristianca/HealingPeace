/*clientModel handles all user information ie Name, Address, Phone number, passed appointments etc.*/

const connection = require("./dbModel");

const clientSchema = `
CREATE TABLE IF NOT EXISTS clients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    phone_number VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    gender VARCHAR(255) NOT NULL,
    dob DATE NOT NULL,`

//function to create the client table
export function createDBTables(){
    connection.query(clientSchema, (err) => {
        if (err) {
            console.error('Error creating clients table:', err);
            return;
        }
        console.log('Clients table created');
    });
}

//function to save a new client to the database
export function saveClient(first_name, last_name, address, phone_number, email, gender, dob) {
    const client = {
        first_name: first_name,
        last_name: last_name,
        address: address,
        phone_number: phone_number,
        email: email,
        gender: gender,
        dob: dob
    };
    connection.query('INSERT INTO clients SET ?', client, (err, results) => {
        if (err) {
            console.error('Error creating client:', err);
            return;
        }
        return results;
    });
}

export function getClient(email){
    connection.query('SELECT * FROM clients WHERE email = ?', email, (err, results) => {
        if (err) {
            console.error('Error fetching client:', err);
            return;
        }
        return results[0];
    });

}

