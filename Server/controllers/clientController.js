//Controller for all client related operations

const Client = require('../models/clientModel');

export function createClient(req, res) {
    const { first_name, last_name, address, phone_number, gender, dob} = req.body;
    try {
        Client.saveClient(first_name, last_name, address, phone_number, gender, dob);
        res.status(201).json({ message: 'Client created successfully' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export function getClients(req, res) {
    const clientEmail = req.params.email;
    try {
        const clients = Client.getClients(clientEmail);
        res.status(200).json(clients);
        return clients;
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
    
}

