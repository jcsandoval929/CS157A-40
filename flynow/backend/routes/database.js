var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'cs157a'
});
router.get('/', function(req, res, next){
    connection.connect(function(err) {
        if (err){
        console.log ('error');
        return
      } else{
        res.send('Connection Successful');
      }

});

connection.query('select * from emp', function (err, rows, fields) {
    if (err){
      console.log ('error');
      return
    } else{
      console.log('The solution is: ', rows)
    }
});
connection.end();
});
module.exports = router;
