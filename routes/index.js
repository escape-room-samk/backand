// https://stackoverflow.com/questions/4295782/how-to-process-post-data-in-node-js
var express = require("express");
var router = express.Router();
var qrReader = require("./qrReader.js");
var rfidReader = require("./rfidReader.js");
var imageReader = require("./imageReader.js");
var soundDetector = require("./soundDetector.js");
var motionSensor = require("./motionSensor.js");



/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});


router.use("/api/qrReader", qrReader);
router.use("/api/rfidReader", rfidReader);
router.use("/api/imageReader", imageReader);
router.use("/api/soundDetector", soundDetector);
router.use("/api/motionSensor", motionSensor);



module.exports = router;
