const connection = require('./model');
const express = require('express');
const app = express();
const path = require('path');
const hbars = require('express-handlebars');
const bodyparser = require('body-parser');
const courseCotroller = require('./controllers/courses');

app.use(bodyparser.urlencoded({
    extended : true
}));

app.set('views', path.join(__dirname, "/views/"))

app.engine("hbs", hbars({
    extname:"hbs",
    defaultLayout:"mainLayout",
    layoutsDir: __dirname + "/views/layouts"
}));

app.set("view engine", "hbs");

app.get('/', (req, res) => {
    //res.send("<h1>Hello World</h1>")
    res.render("index", {})
})

app.use('/course', courseCotroller)

app.listen("3000", () => {
    console.log("Server started.");
});
