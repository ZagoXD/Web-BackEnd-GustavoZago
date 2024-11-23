const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const mustacheExpress = require('mustache-express');

const indexRouter = require('./routes/index');
const tasksRouter = require('./routes/tasks');
const authRouter = require('./routes/auth');

const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'mustache');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true,
  })
);

app.use('/', indexRouter);
app.use('/tasks', tasksRouter);
app.use('/auth', authRouter);

app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
