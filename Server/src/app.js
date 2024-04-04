const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const { auth } = require('express-openid-connect');
const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

require('dotenv').config();
// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(process.env.AUTH_CONFIG));

const DB = require('../models/dbModel');
DB.connectDB();

var clientRouter = require("../routes/client");
// var loginRouter = require("../routes/login");


app.use("/client", clientRouter);

// app.use("/login", loginRouter);

app.get('/login', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

app.listen(process.env.PORT || 8081);