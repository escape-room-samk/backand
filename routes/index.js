// https://stackoverflow.com/questions/4295782/how-to-process-post-data-in-node-js
var express = require("express");
var router = express.Router();
var qrReader = require("./QRReader.js");
var RFIDReader = require("./RFIDReader.js");
var imageReader = require("./imageReader.js");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});


router.use("/api/QRReader", qrReader);
router.use("/api/RFIDReader", RFIDReader);
router.use("/api/imageReader", imageReader);

module.exports = router;
