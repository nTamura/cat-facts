var express = require('express');
var router = express.Router();


// signup and login page. implement later


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('welcome', { title: 'Cat Facts - Login'});
});

module.exports = router;
