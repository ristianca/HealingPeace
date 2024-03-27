/*loginController handles login and authintication of users*/

const loginModel = require("../models/loginModel");

export function login(req, res) {
    const { email, password } = req.body;
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
}

export function register(req, res) {
    const { email, password } = req.body;
    try {
        loginModel.registerLogin(email, password);
        res.status(200).json({ message: 'User registered successfully' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

