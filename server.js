//ALL OF OUR DEPENDENCIES
var express = require("express");
var epshbs = require("express-handlebars");

//Creates our server and establishes which port we're using
var app = express();
var PORT = 3000;

// MIDDLEWARE for data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//providing our server with the necessary routes for certain information
require("../FriendFinder/app/routing/api-routes")(app);
require("../FriendFinder/app/routing/html-routes")(app);

// I always feel like somebody's LISTENING
app.listen(PORT, function () {
    console.log("App is listening on PORT" + PORT)
})