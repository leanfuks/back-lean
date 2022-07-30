const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const PeinadosRouter= require('./routes/peinados');
const ApiRouter = require("./routes/api")
const { dbConnection } = require('./db/db');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/peinados', PeinadosRouter);
app.use("/api", ApiRouter)
dbConnection();

module.exports = app;
