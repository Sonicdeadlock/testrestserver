/**
 * Created by alexthomas on 5/12/16.
 */
var express = require('express');
var app = express();
var server = require('http').createServer(app);

app.use(function(req,res,next){
    console.log(req.originalUrl);
    next();
});

server.listen(9000);