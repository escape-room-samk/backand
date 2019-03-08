var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/test", { useNewUrlParser: true });
// create instance of Schema
var imageschema = mongoose.Schema({
  devID: String,
  question: String,
  value: String,
  boolean: String,
});

// create model if not exists.
module.exports = mongoose.model("imageschema", imageschema);
