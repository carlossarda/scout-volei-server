var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var jogosController = require('./app/controllers/JogoController');
var campeonatoController = require('./app/controllers/CampeonatoController');
var authCodeController= require('./app/controllers/AuthCodeController');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/jogos', jogosController);
app.use('/campeonatos',campeonatoController);
app.use('/login', authCodeController);

module.exports = app;
