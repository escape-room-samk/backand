var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/test", { useNewUrlParser: true });
// create instance of Schema
var SoundSchema = mongoose.Schema({
  devID: String,
  value: String
});

// create model if not exists.
module.exports = mongoose.model("SoundSchema", SoundSchema);
