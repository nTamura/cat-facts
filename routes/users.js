var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/signup', function(req, res, next) {
//   res.render('signup')
// });
// router.get('/login', function(req, res, next) {
//   res.render('login')
// });

// /* GET home page. */
router.get('/users', function(req, res, next) {
  res.render('users', { title: 'Cat-Facts' });
  // res.send('get')
});

router.post('/users', function(req, res, next) {
  res.render('users', { title: 'Cat-Facts' });
  // res.send('post')
});
//
// router.put('/users/:id', function(req, res, next) {
//   // res.render('users', { title: 'Cat-Facts' });
//   res.send('put')
// });
//
// router.delete('/users/:id', function(req, res, next) {
//   // res.render('users', { title: 'Cat-Facts' });
//   res.send('del')
// });


module.exports = router;
