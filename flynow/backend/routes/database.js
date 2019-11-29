var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'newpassword',
  database: 'cs157a'
});
router.get('/', function(req, res, next){
    connection.connect(function(err) {
        if (err){
        console.log ('error');
        return
      }

});

connection.query('select * from airplanes', function (err, rows, fields) {
    if (err){
      console.log ('error');
      return
    } else{
      res.send(JSON.stringify(rows));
    }
});

router.post('/register', function(req, res){
  var today = new Date();
  var users={
    "firstName":req.body.firstName,
    "lastName":req.body.lastName,
    "email":req.body.email,
    "password":req.body.password,
    "created":today,
    "modified":today
  }
  connection.query('INSERT INTO users SET ?',users, function (error, results, fields) {
  if (error) {
    console.log("error ocurred",error);
    res.send({
      "code":400,
      "failed":"error ocurred"
    })
  }else{
    console.log('The solution is: ', results);
    res.send({
      "code":200,
      "success":"user registered sucessfully"
        });
    res.redirect('/signin');
  }
  });
});

router.post('/auth', function(req, res){
  var email= req.body.email;
  var password = req.body.password;
  connection.query('SELECT * FROM users WHERE email = ?',[email], function (error, results, fields) {
  if (error) {
    res.send({
      "code":400,
      "failed":"error ocurred"
    })
  }else{
    if(results.length >0){
      if(results[0].password == password){
        res.send({
          "code":200,
          "success":"Signin sucessfull"
            });
        res.redirect('/');
      }
      else{
        res.send({
          "code":204,
          "success":"Email and password does not match"
            });
      }
    }
    else{
      res.send({
        "code":204,
        "success":"Email does not exits"
          });
    }
  }
  });
});
connection.end();
});
module.exports = router;
