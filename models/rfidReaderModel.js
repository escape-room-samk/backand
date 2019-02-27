var mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017", { useNewUrlParser: true });
// create instance of Schema
var rfidschema = mongoose.Schema({
  devID: String,
  RFIDMessage: String,
}); 
 
// create model if not exists.
module.exports = mongoose.model("rfidschema", rfidschema);
