const express = require('express');
const app = express();
const expressSession = require('express-session') 
const router = require('./config/router');
const bodyParser = require('body-parser');
const { check , validaionResult } = require('express-validator')
app.use(express.static('public'));

app.use(expressSession({secret: 'shadi', saveUninitialized: false, resave: false}))

//require for EJS
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
//require mongoose
require('./config/mongoose')

//require router
app.use(router);


app.listen(5500, () => console.log("server is running on 5500"));