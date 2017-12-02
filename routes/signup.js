var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Cat-Facts - Signup'});
});

module.exports = router;
