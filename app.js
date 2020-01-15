var createError = require('http-errors');
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require("body-parser");
var session = require("express-session");
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();

app.use(require('connect-history-api-fallback')());

// -- DB setting
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
// mongoose.connect(process.env.MONGO_DB); //환경변수로세팅
mongoose.connect('mongodb+srv://leehyojun:qlalfdldi80!@cluster0-vsmwz.mongodb.net/test?retryWrites=true&w=majority');
var db = mongoose.connection;
db.once("open", function () {
  console.log("DB connected");
});
db.on("error", function (err) {
  console.log("DB ERROR : ", err);
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// -- DB schema : BOARD
var boardSchema = mongoose.Schema({
  email: { type: String, required: true },
  subject: { type: String, required: true },
  msg: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});
var Board = mongoose.model("board", boardSchema);

// -- API board-view
app.get("/view", function (req, res) {
  Board.find({})
    .sort("-createdAt")
    .exec(function (err, boards) {
      if (err) return res.json(err);
      res.json(boards)
    });
});

// -- API board-write
app.post("/write", function (req, res) {
  Board.create(req.body, function (err, boards) {
    if (err) return res.json(err);
  });
});

// -- DB schema : LOGIN
var userSchema = mongoose.Schema({
  userId: { type: String, required: true },
  password: { type: String, required: true }
});
var User = mongoose.model("users", userSchema);

app.post("/login", function (req, res) {
  User.find({})
    .exec(function (err, user) {
      if (err) return res.json(err);      

      var getUserId = req.body.userId;
      var myId = user[0].userId;

      if (myId == getUserId) {        
        console.log('ok');
        res.json(user)
      } else {
        console.log('err');
        res.json(err)
      }
    });
});

















// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
