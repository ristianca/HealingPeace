const asyncHandler = require("express-async-handler");
const clients = require("../models/clientModel")


exports.getClient = asyncHandler(async (req, res) => {
    const email = req.body.email;

    try {
        const clientData = clients.getClient(email);
        res.status(200).json({clientData})
    }
    catch (error){
        res.status(500).json({ message: "Error getClient"});
    }
});

