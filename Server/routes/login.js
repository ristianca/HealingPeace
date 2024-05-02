const express = require("express");
const router = express.Router();

const login_controller = require("../controllers/loginController");

router.post("/", login_controller.login);

router.post("/register", login_controller.createLogin);

module.exports = router;