var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.json([{
    id:1,
    username: "Armando"
  }, {
    id:2,
    username: "Nithil"
  }, {
    id: 3,
    username: "Juan"
  }])
});

module.exports = router;
