const express = require("express");
const router = express.Router();

// Require controller modules.
const client_controller = require("../controllers/clientController");


router.post("/create", client_controller.createClient);

router.get("/getclient", client_controller.getClients);

router.get("/removeClient", client_controller.removeClient);

module.exports = router;