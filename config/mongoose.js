const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://User:test123@cluster0.qeaoid1.mongodb.net/?retryWrites=true&w=majority') 
    .then( () => console.log("DB is connected"))
    .catch(err => console.log(err));