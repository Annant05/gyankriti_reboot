// all requires and declarations
const express = require("express"), app = express(); // creating express server
const path = require('path');
const request = require("request");
const bodyParser = require("body-parser");  // used bodyparser to get data from all the field in form
// const db_server = require('./config/start_db');

// Declaration related to servers
const PORT = process.env.PORT || 80;

request('http://169.254.169.254/latest/meta-data/public-ipv4', function (error, response, body) {
    if (body !== undefined) console.log('server started on ip:port : http://' + body + ":" + PORT);
    else console.log('server started on ip:port : ' + 'http://localhost' + ":" + PORT);
});

app.listen(PORT, function (err) {
    if (err) console.log("There was some problem in starting the server  : " + JSON.stringify(err, undefined, 2));
    else console.log('server started on port : ' + PORT);
});

//Main body of the js file
app.use(bodyParser.urlencoded({  // this is important
    extended: true
}));

app.use(bodyParser.json());  // this is important caused a lot of time waste.

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', require('./routes/index'));
// app.use('/student', require('./routes/student'));
// app.use('/transport', require('./routes/transport'));


console.log('Server-side code running');

app.get('/basetemplate', function (req, res) {
    res.render("basetemplate", {TITLE: "BASIC TEMPLATE"});
});