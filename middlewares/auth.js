const { getUser } = require('../service/auth');

const authenticateUser = (req, res, next) => {
  // const token = req.cookies?.authToken;
  const token = req.headers?.authorization?.split(' ')[1];
  if (!token) {
    return res.redirect('/login');
  }
  const user = getUser(token);
  if (!user) {
    return res.redirect('/login');
  }
  req.user = user;
  next();
}

const checkAuth = (req, res, next) => {
  // const token = req.cookies?.authToken;
  const token = req.headers?.authorization?.split(' ')[1];
  const user = getUser(token);
  req.user = user;
  next();
}

module.exports = { authenticateUser, checkAuth };