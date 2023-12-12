const jwt = require('jsonwebtoken');
const secret = "!@#$%^&";

const setUser = (user) => {
  const payload = {
    _id: user._id,
    name: user.name,
    email: user.email,
  }
  try {
    return jwt.sign(payload, secret);
  }
  catch (err) {
    console.log("JWT sign error:", err);
    return null;
  }
}

const getUser = (token) => {
  if (!token) return null;
  try {
    return jwt.verify(token, secret);
  }
  catch (err) {
    console.log("JWT sign error:", err);
    return null;
  }
}

module.exports = { setUser, getUser };