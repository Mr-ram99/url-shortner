const express = require('express');
const URL = require('../models/url')
const router = express.Router();

router.get('/', (req, res) => {
  if(!req.user) return res.redirect('/login');
  URL.find({ createdBy: req.user._id }).then((urls) => {
    return res.render('home', {
      urls: urls
    })
  }).catch((err) => {
    res.status(500).send({ message: "some error occurred. Please try after some time." });
  })
})

router.get('/signup', (req, res) => {
  return res.render('signup');
})

router.get('/login', (req, res) => {
  return res.render('login');
})

router.get('/logout', (req, res) => {
  return res.render('login');
})

module.exports = router;