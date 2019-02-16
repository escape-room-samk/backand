var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/demoDb", { useNewUrlParser: true });
// create instance of Schema
var imageschema = mongoose.Schema({
  devID: String,
  imageMessage: String
});

// create model if not exists.
module.exports = mongoose.model("imageschema", imageschema);
