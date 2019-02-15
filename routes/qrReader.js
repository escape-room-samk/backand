var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')

router.use(bodyParser.json());       // to support JSON-encoded bodies
router.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

router.use(express.json());       // to support JSON-encoded bodies

router.post('/', function (req, res) {
    var name = req.body.name,
        color = req.body.color;

    res.send(req.body.name);
});

module.exports = router;
