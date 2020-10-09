var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var bilibiliRouter = require('./routes/bilibili');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/**/
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/bilibili', bilibiliRouter);

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
    res.render('error');
});

//跨域访问单一配置
app.use(cors({
    origin: ['http://localhost:1100'],
    methods: ['GET', 'POST'],
    alloweHeaders: ['Content-Type', 'Authorization', 'Access-Control-Allow-Origin']
}))

//跨域访问通用配置
app.all('*', function() {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Heraders", "Content-Type, Content-Length, Authorization, Accept, X-Requested-With, yourHeaderFeild");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE.OPTIONS");
    res.header("X-Powered-By", "3.2.1");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
})

process.env.PORT = 2300;

module.exports = app;