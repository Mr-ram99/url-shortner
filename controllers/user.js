const { v4: uuidv4 } = require('uuid')
const User = require('../models/user');
const { setUser, getUser } = require('../service/auth');

const handleUserSignup = (req, res) => {
  const { name, email, password } = req.body;
  User.create({
    name,
    email,
    password
  }).then(() => {
    return res.render('login', {
      message: "User created"
    })
  }).catch((err) => {
    return res.render('signup', {
      error: err
    })
  });
}

const handleUserLogin = (req, res) => {
  const { email, password } = req.body;
  User.findOne({
    email,
    password
  }).then((user) => {
    if (!user) throw new error("User not found");
    const sessionId = uuidv4();
    setUser(sessionId, user);
    res.cookie('uuid', sessionId);
    return res.redirect('/');
  }).catch((err) => {
    return res.render('login', {
      error: err
    })
  });
}

module.exports = { handleUserSignup, handleUserLogin }