var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')

router.use(bodyParser.json());       // to support JSON-encoded bodies
router.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

router.use(express.json());       // to support JSON-encoded bodies

router.post('/', function (req, res) {
    var qrcode = req.body.qrcode;

    res.send(qrcode);
});

module.exports = router;
