const mongoose = require('mongoose');

mongoose.connect("<YOUR DATABASE URL>", 
{ useNewUrlParser: true }, (error) => {
  
    if(!error)
    {
        console.log("successful");
    }
    else 
    {
        console.log("error");
    }  
});

const Course = require('./courses.model');