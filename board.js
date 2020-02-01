var mongoose = require('mongoose');
var BoardSchema = new mongoose.Schema({
    email: { type: String, required: true },
    title: { type: String, required: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});
mongoose.model('Board', BoardSchema);
module.exports = mongoose.model('Board');
