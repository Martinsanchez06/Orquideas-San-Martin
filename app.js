const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const homeRouter = require('./src/routes/home');
const clientRouter = require('./src/routes/client');
const adminRouter = require('./src/routes/admin')

const app = express();

// ----- VIEW ENGINE SETP -----
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// ----- PORT ----- 
const port = process.env.PORT || 4000;
app.listen(port, () =>{
    console.log(`listening on port ${port}`);
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));

app.use('/', homeRouter);
app.use('/user', clientRouter);
app.use('/admin', adminRouter)

// ----- CATCH 404 -----
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  //----- ERRORES -----
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
