var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/bilibiliVideo', function(req, res, next) {
    res.render('index', { title: 'Bilibili Video Express', tips01: "I'm the master" });
});

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource......');
});

module.exports = router;