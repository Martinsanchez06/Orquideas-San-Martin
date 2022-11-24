const createError = require('http-errors');
const session = require('express-session');
const express = require('express');
const path = require('path');
const cookies = require('cookie-parser');
const Sequelize = require ('sequelize')
const logger = require('morgan');
const userLogguedMiddleware = require('./src/middlewares/userLogguedMiddleware');
const homeRouter = require('./src/routes/home');
const clientRouter = require('./src/routes/client');
const adminRouter = require('./src/routes/admin')

const app = express();

app.use(cookies());
app.use(session({
  secret : 'shh es secreto',
  resave : false,
  saveUninitialized : false
}))
app.use(userLogguedMiddleware)


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
app.use(express.static('public'));

app.use('/', homeRouter);
app.use('/usuario', clientRouter);
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
