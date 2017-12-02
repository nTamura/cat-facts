var express = require('express');
var router = express.Router();
const axios = require('axios');
const bodyParser = require('body-parser');

/* GET home page. */
router.post('/response', function(req, res, next) {
  // res.send(202, 'response', req.body.number)
});

router.get('/response', function(req, res, next) {
  axios.get('https://catfact.ninja/fact')
    .then((response) => {
      let fact = response.data.fact
      // console.log(response.data.fact);
      // res.render('response', { title: 'Cat-Facts - Sample JSON repsponse' });
      res.render('response', { fact })
    })
});





module.exports = router;
