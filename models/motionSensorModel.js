var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/demoDb", { useNewUrlParser: true });
// create instance of Schema
var motionSchema = mongoose.Schema({
  devID: String,
  motionMessage: String
});

// create model if not exists.
module.exports = mongoose.model("motionSchema", motionSchema);