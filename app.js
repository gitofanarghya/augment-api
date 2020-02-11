var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var companiesRouter = require('./routes/companies');
var centersRouter = require('./routes/centers');
var apartmentsRouter = require('./routes/apartments');
var currentLocationRouter = require('./routes/currentLocation');
var softNotificationsRouter = require('./routes/softNotifications');
var residentRouter = require('./routes/resident')
var motionDataRouter = require('./routes/motionData')
var orgRouter = require('./routes/org')
var cors = require('cors')
var app = express();
app.use(cors())

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/companies', companiesRouter);
app.use('/centers', centersRouter);
app.use('/apartments', apartmentsRouter);
app.use('/currentLocation', currentLocationRouter);
app.use('/softNotifications', softNotificationsRouter);
app.use('/resident', residentRouter);
app.use('/motionData', motionDataRouter);
app.use('/org', orgRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  //res.json('error');
  res.json({
    message: err.message,
    error: err
  })
});

module.exports = app;
