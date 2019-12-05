var express = require("express");
var router = express.Router();
var mysql = require("mysql");

var connection = mysql.createConnection({
<<<<<<< HEAD
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'flynow'
=======
  host: "localhost",
  user: "root",
  password: "password",
  database: "flynow"
>>>>>>> 77bc9a393981e37bff10880e11b956082ee4a488
});

connection.connect(function(err) {
  if (!err) {
    console.log("Database is connected ... nn");
  } else {
    console.log("Error connecting database ... nn");
  }
});

router.get("/users", function(req, res, next) {
  connection.query("select * from users", function(err, rows, fields) {
    if (err) {
      console.log("error");
      return;
    } else {
      res.send(JSON.stringify(rows));
    }
  });
});

router.post("/book", function(req, res) {
  var flightNo = req.body.flightNo;
  connection.query(
    "INSERT INTO records (flightNo, origin, destination, date_time, cost) SELECT flightNo, origin, destination, date_time, cost FROM flights WHERE flightNo = ?",
    [flightNo],
    function(error, results, fields) {
      if (error) {
        res.send({
          code: 400,
          failed: "error ocurred"
        });
      } else {
        console.log("The solution is: ", results);
        res.send({
          code: 200,
          success: "Booking successful"
        });
      }
    }
  );
});

//Bookings
router.get("/bookings", function(req, res, next) {
  connection.query("select * from bookings", function(error, results, fields) {
    if (error) throw error;
    res.send(JSON.stringify(results));
  });
});

router.post("/addBookings", function(req, res) {
  var bookings = {
    bookingID: req.body.bookingID,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    payment: req.body.payment
  };
  connection.query("INSERT INTO bookings SET ?", bookings, function(
    error,
    results,
    fields
  ) {
    if (error) {
      console.log("error ocurred", error);
      res.send({
        code: 400,
        failed: "error ocurred"
      });
    } else {
      console.log("The solution is: ", results);
      res.send({
        code: 200,
        success: "Booking successful"
      });
    }
  });
});

router.post("/register", function(req, res) {
  var today = new Date();
  var users = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    created: today,
    modified: today
  };
  connection.query("INSERT INTO users SET ?", users, function(
    error,
    results,
    fields
  ) {
    if (error) {
      console.log("error ocurred", error);
      res.send({
        code: 400,
        failed: "error ocurred"
      });
    } else {
      console.log("The solution is: ", results);
      res.send({
        code: 200,
        success: "user registered sucessfully"
      });
    }
  });
});

router.post("/auth", function(req, res) {
  var email = req.body.email;
  var password = req.body.password;
  connection.query("SELECT * FROM users WHERE email = ?", [email], function(
    error,
    results,
    fields
  ) {
    if (error) {
      res.send({
        code: 400,
        failed: "error ocurred"
      });
    } else {
      if (results.length > 0) {
        if (results[0].password == password) {
          res.send({
            code: 200,
            success: "Signin sucessfull"
          });
          //            res.redirect('/users');
        } else {
          res.send({
            code: 204,
            error: "Email and password does not match"
          });
        }
      } else {
        res.send({
          code: 204,
          error: "Email does not exits"
        });
      }
    }
  });
});

router.get("/flights", (req, res) => {
  connection.query("SELECT * FROM flights", function(err, rows, fields) {
    if (!err) {
      console.log("Success getting flights");
      res.send(JSON.stringify(rows));
    } else {
      console.log("Error getting flights");
    }
  });
});

router.post("/search", function(req, res) {
  var origin = req.body.origin;
  var destination = req.body.destination;
  connection.query(
    "SELECT * FROM flights WHERE origin = ? AND destination = ?",
    [origin, destination],
    function(error, results, fields) {
      if (error) {
        res.send({
          code: 400,
          failed: "error ocurred"
        });
      } else {
        if (results.length > 0) {
          console.log("Success getting flights");
          res.send(JSON.stringify(results));
        } else {
          res.send({
            code: 204,
            success: "No flights exist"
          });
        }
      }
      console.log(results);
    }
  );
});

module.exports = router;
