var express      = require('express');
var path         = require('path');
var app          = express();

// app.use('/public', express.static(path.join(__dirname, '../public')));
// app.use('/admin', express.static(path.join(__dirname, '../public')));
app.use('/', express.static(path.join(__dirname, '../public')));

module.exports = app;
