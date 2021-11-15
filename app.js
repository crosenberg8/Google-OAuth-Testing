//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const session = require('express-session');
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate = require('mongoose-findorcreate');

// Create an app JS object to represent the application
const app = express();

// Enable express, EJS, and body-parser
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));

// Initialize the GET request for the home page
app.get("/", function(req, res) {
  res.render("index");
})








// Initialize the server on port 3000
app.listen(3000, function() {
  console.log("Server started on port 3000");
})
