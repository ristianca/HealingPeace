const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');


const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

const DB = require('../models/dbModel');

DB.connectDB();

const LoginController = require('../controllers/loginController');
app.post('/register', 
    LoginController.createLogin
);

app.listen(process.env.PORT || 8081);