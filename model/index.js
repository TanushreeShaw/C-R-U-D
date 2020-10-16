const mongoose = require('mongoose');

//your database url can be mongodb database url or mongodb atlas url
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
