var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
// var userType = ["admin","manager","cashier","member","therapist","walk_in"];

var app = express();



// midleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan('dev'))
    .get('/test',function(req, res)
    {
        res.json({msg:"test!"});
    })


app.listen(8800);