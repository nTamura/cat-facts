var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');
const LocalStrategy = require('passport-local').Strategy;
const axios = require('axios');

// direct the mongoose file
const mongodb = require('./mongoose')

var app = express();

// route vars
// app.use(welcome = require('./routes/welcome');
app.use(index = require('./routes/index'));
app.use(response = require('./routes/response'));
app.use(users = require('./routes/users'));



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// set up body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// middleware
app.use(logger('dev'));

// Express session
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}))

app.use(passport.initialize())
app.use(passport.session())

// express validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
    var namespace = param.split('.'),
    root = namespace.shift(),
    formParam = root;
    while(namespace.length){
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg: msg,
      value: value
    }
  }
}));

// connect flash
app.use(flash());

// global vars
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg')
  res.locals.error_msg = req.flash('error_msg')
  res.locals.error = req.flash('error')
  next()
});

// set up static folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/signup', function(req, res, next) {
  res.render('signup');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
