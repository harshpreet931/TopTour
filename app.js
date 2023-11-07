const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');
const session=require("express-session");
const passport=require("passport");
const passportLocalMongoose=require("passport-local-mongoose");
const MongoDBStore = require("connect-mongodb-session")(session);

const app = express();

app.set('view engine','ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.use(session({
    secret:"our little secret",
    resave:false,
    saveUninitialized:false,
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect('mongodb://127.0.0.1:27017/top-tour', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.get("/",function(req,res){
    res.render("home.ejs");
})

app.get("/login",function(req,res){
    res.render("login.ejs");
})

app.post("/login",function(req,res){
    
})

app.listen(3000,function(){
    console.log("Server is running at port 3000");
})