const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require("mysql");
const app = express(),
      staticServe = express.static(`${ __dirname }/public`);

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public/stylesheets'));
app.use(express.static('public/assets/images'));

app.engine('.handlebars', exphbs({
  defaultLayout: 'main',
  extname: '.handlebars',
  layoutsDir: path.join(__dirname, 'views/layouts')
}));
app.set('view engine', '.handlebars');
app.set('views', path.join(__dirname, 'views'));

// Requiring our models for syncing
//var db = require("./models");

// Routes
// =============================================================
// require("./routes/html-routes.js")(app);
//require("./routes/user-api-routes.js")(app);
//require("./routes/post-api-routes.js")(app);
//require("./routes/fact-api-routes.js")(app);


var connection = mysql.createConnection({
  host: "s3lkt7lynu0uthj8.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "bm8ozsqt8ehomlw5",
  password: "xr1wsmn48fb916jq",
  database: "gajb8m09t9ub53b5"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

// Root get route.
app.get("/", function(req, res) {
  connection.query("SELECT fact FROM facts ORDER BY RAND() limit 1;", function(err, data) {
    if (err) {
      throw err;
    }

    res.render("index", { facts: data });
  });
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});