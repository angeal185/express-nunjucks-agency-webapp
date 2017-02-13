var express = require('express');
var nunjucks = require('nunjucks');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var about = require('./routes/about');
var services = require('./routes/services');
var portfolio = require('./routes/portfolio');
var blog = require('./routes/blog');
var singleBlog = require('./routes/singleBlog');
var app = express();

nunjucks.configure('views', {
    express: app,
    autoescape: true,
    watch: true
});
app.set('view engine', 'njk');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/about', about);
app.use('/services', services);
app.use('/portfolio', portfolio);
app.use('/blog', blog);
app.use('/singleBlog', singleBlog);
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

//app globals
app.locals.year = '2016'
app.locals.author = 'Ben Eaves';
app.locals.email = 'me@myapp.com'; 'beneaves01@hotmail.com';

//dev globals
app.locals.D3 = 'An dicat libris intellegam sea, dicit mollis id vel. Utroque iracundia duo et, vim diceret cotidieque eu. Bonorum gubergren pro id. Ea pro soluta dissentiet, no alii pertinacia quo, populo legimus cum in. Ad eam falli iudico, quis patrioque definiebas nec at, ad his atomorum salutandi. An tota paulo saepe his, vis in munere graeco delenit.';
app.locals.D2 = 'Lorem ipsum dolor sit amet, usu an prima novum verear, his justo iriure appetere te.';
app.locals.D1 = 'usu an prima novum verear.';
module.exports = app;
