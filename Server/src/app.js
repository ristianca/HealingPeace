const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

require('dotenv').config();

const DB = require('../models/dbModel');
DB.connectDB();

// var clientRouter = require("../routes/client");
// var adminRouter = require("../routes/admin");


// app.use("/client", clientRouter);
// app.use("/admin", adminRouter);
// ***********************
const { auth, requiredScopes } = require('express-oauth2-jwt-bearer');
// Authorization middleware. When used, the Access Token must
// exist and be verified against the Auth0 JSON Web Key Set.
const checkJwt = auth({
    audience: 'healingpeacemassage.com/api',
    issuerBaseURL: `https://dev-l8xpvfi4.us.auth0.com/`,
    //issuerBaseURL: `https://dev-l8xpvfi4.us.auth0.com/oauth/token`
});

  // This route doesn't need authentication
  app.get('/api/public', function(req, res) {
    res.json({
      message: 'Hello from a public endpoint! You don\'t need to be authenticated to see this.'
    });
  });
  
  // This route needs authentication
  app.get('/api/private', checkJwt, function(req, res) {
    res.json({
      message: 'Hello from a private endpoint! You need to be authenticated to see this.'
    });
  });
  
  const checkScopes = requiredScopes('read:messages');
  
  app.get('/api/private-scoped', checkJwt, checkScopes, function(req, res) {
    res.json({
      message: 'Hello from a private endpoint! You need to be authenticated and have a scope of read:messages to see this.'
    });
  });
// ***********************

app.listen(process.env.PORT || 8081);