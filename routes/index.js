var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cat-Facts' });
  // res.send('get')
});




module.exports = router;
