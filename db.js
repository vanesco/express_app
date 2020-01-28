var mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://leehyojun:qlalfdldi80!@leehyojun-wpdws.mongodb.net/test');

mongoose.connect('mongodb://leehyojun:qlalfdldi80!@ds311128.mlab.com:11128/heroku_g4lrbwhn');



// mongoose.set('useNewUrlParser', true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);

var db = mongoose.connection;

db.once("open", function () {
  console.log("DB connected");
});
db.on("error", function (err) {
  console.log("DB ERROR : ", err);
});



