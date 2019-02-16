var express = require("express");
var bodyParser = require("body-parser");
var mongoOp = require("../models/soundDetectorModel");
var router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

//route() will allow you to use same path for different HTTP operation.
//So if you have same URL but with different HTTP OP such as POST,GET etc
//Then use route() to remove redundant code.

router
  .route("/")
  .get(function(req, res) {
    var response = {};
    mongoOp.find({}, function(err, data) {
      // Mongo command to fetch all data from collection.
      if (err) {
        response = { error: true, message: "Error fetching data" };
      } else {
        response = { error: false, message: data };
      }
      res.json(response);
    });
  })

  .post(function(req, res) {
    var db = new mongoOp();
    var response = {};
    //  from REST request.
    // Add strict validation when you use this in Production.
    db.devID = req.body.devID;
    // Hash the password using SHA1 algorithm.
    db.SoundMessage = req.body.SoundMessage;
    db.save(function(err) {
      // save() will run insert() command of MongoDB.
      // it will add new data in collection.
      if (err) {
        response = { error: true, message: "Error adding data" };
      } else {
        response = { error: false, message: "Data added" };
      }
      res.json(response);
    });
  });

router.use("/", router);

module.exports = router;
