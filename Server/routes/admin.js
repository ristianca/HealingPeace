const express = require("express");
const router = express.Router();

const admin_controller = require("../controllers/adminController");
const client_controller = require("../controllers/clientController");

router.get("/getClient", admin_controller.getClient);

router.post("/createClient", client_controller.createClient);

router.get("/removeClient", client_controller.removeClient);


