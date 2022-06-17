/*
    index.js
    Student's name: Yuk Hong Ma
    Student ID: 301210312
    Date: June 4, 2022
*/

var express = require('express');
var router = express.Router();
let controlerIndex = require('../controller/index');

/* GET home page. */
// router.get('/', home);
router.get('/', controlerIndex.home);

// function home(req, res, next) {
//   res.render('index', { 
//     title: 'Home',
//     userName: 'Julio'  });
// }

// /* GET About Me page. */
// router.get('/aboutme', function(req, res, next) {
//   res.render('aboutme', { title: 'Aboutme', userName: 'Julio' });
// });
router.get('/aboutme', controlerIndex.about);

// /* GET Projects page. */
// router.get('/projects', function(req, res, next) {
//   res.render('projects', { title: 'Projects', userName: 'Julio' });
// });
router.get('/projects', controlerIndex.projects);

// /* GET Services page. */
// router.get('/services', function(req, res, next) {
//   res.render('services', { title: 'Services', userName: 'Julio' });
// });
router.get('/services', controlerIndex.services);

// /* GET Contact page. */
// router.get('/contact', function(req, res, next) {
//   res.render('contact', { title: 'contact', userName: 'Julio' });
// });
router.get('/contact', controlerIndex.contact);

module.exports = router;
