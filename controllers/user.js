const User = require('../models/user');
const { setUser } = require('../service/auth');

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
    const token = setUser(user);
    // res.cookie('authToken', token);
    // return res.redirect('/');
    return res.send({token: token});
  }).catch((err) => {
    return res.render('login', {
      error: err
    })
  });
}

module.exports = { handleUserSignup, handleUserLogin }