/*
    users.js
    Student's name: Yuk Hong Ma
    Student ID: 301210312
    Date: June 4, 2022
*/

// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('users', { 
//     title: 'Users',
//     userName: 'Julio'  });
// });

// module.exports = router;

let express = require('express');
let router = express.Router();
let usersController = require('../controller/user');
let passport = require('passport');

/* GET users listing. */
router.get('/', function(req, res, next) {  
  res.render('users', { 
    title: 'Users',
    userName: req.user ? req.user.username : ''
  });
});

router.get('/signup', usersController.renderSignup);
router.post('/signup', usersController.signup);

router.get('/signin', usersController.renderSignin);
router.post('/signin', usersController.signin);

router.get('/signout', usersController.signout);

module.exports = router;
