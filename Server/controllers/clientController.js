//Controller for all client related operations
const Client = require('../models/clientModel');
const asyncHandler = require("express-async-handler");

// Display book delete form on GET.
exports.createClient = asyncHandler(async (req, res) => {
    const { first_name, last_name, address, phone_number, gender, dob} = req.body;
    try {
        Client.saveClient(first_name, last_name, address, phone_number, gender, dob);
        res.status(201).json({ message: 'Client created successfully' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
  });


exports.getClients = asyncHandler(async (req, res) => {
    const clientEmail = req.params.email;
    try {
        const clients = Client.getClient(clientEmail);
        res.status(200).json(clients);
        return clients;
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
    
});

