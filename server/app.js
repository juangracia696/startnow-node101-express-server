// import files and packages up here


// create your express server below
// var express = require('express');
// var app = express();

// app.get('',function(req, res){
//     res.send(json);

// });
// var server = app.listen(3000 
// );


//vidcode


var express = require('express');
var app = express();
//import data.json file
var jsaN = require('./data.json')

var morgan = require('morgan');
app.use(morgan('dev')

);

app.get('/data',function(req, res){
    res.status(200);
    res.send(jsaN);
});
app.get('/',function(req, res){
    res.status(200);
    res.send('ok');
});
//When someone gets ping, run the second parameter
// app.get('/ping', (req,res) => {
//     //respond back to the user 'pong'
//     res.send('pong');
// })

// add your routes and middleware below

// finally export the express application
module.exports = app;
