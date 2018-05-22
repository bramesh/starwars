const fs = require('fs');
const express = require('express');
const http = require('http');
const httpProxy = require('http-proxy');
const logger = require('morgan');
const app = express();
app.use(logger('dev'));


//PROXY TO API
const apiProxy = httpProxy.createProxyServer({
  target: "http://localhost:5001"
});
app.use('/api', function(req, res){
  apiProxy.web(req, res);
})

app.use('/', express.static(`${__dirname}/client/build`));

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
