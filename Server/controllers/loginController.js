const loginModel = require("../models/loginModel");
const asyncHandler = require("express-async-handler");

/*loginController handles login and authintication of users*/

exports.login = asyncHandler(async (req, res) => {
    const email = req.body.email; 
    const password = req.body.password;
    try {
        const user = loginModel.getLogin(email);
        if (user.password === password) {
            res.status(200).json({ message: 'Login successful' });
        }
        else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

exports.createLogin = asyncHandler(async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    try {
        loginModel.registerLogin(email, password);
        res.status(200).json({ message: 'User registered successfully' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

