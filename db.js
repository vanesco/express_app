var mongoose = require('mongoose');

// mongoose.set('useNewUrlParser', true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);

// mongoose.connect('mongodb+srv://leehyojun:qlalfdldi80!@leehyojun.wpdws.mongodb.net/test');
mongoose.connect(process.env.MONGODB_URI);

var db = mongoose.connection;

db.once("open", function () {
  console.log("DB connected");
});
db.on("error", function (err) {
  console.log("DB ERROR : ", err);
});
