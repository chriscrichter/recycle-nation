// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
// require("./routes/html-routes.js")(app);
require("./routes/user-api-routes.js")(app);
require("./routes/post-api-routes.js")(app);
require("./routes/fact-api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
var PORT = process.env.PORT || 8080;
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

//Put { force: true } -- in .sync() to drop and recreate database