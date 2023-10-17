var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
<% if(morgan) { %>
var logger = require('morgan');
<% } %>
<% if(winston) { %>
var { logger } = require('./config/winston');
<% } %>
var exampleRoutes = require('./routes/exampleRoutes');

var app = express();
<% if(morgan) { %>
app.use(logger('dev'));
<% } %>
<% if(winston) { %>
app.use(logger);
<% } %>app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/example', exampleRoutes);

module.exports = app;
