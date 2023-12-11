const URL = require('../models/url');
const shortUniqueID = require('short-unique-id');

const handleCreateURL = (req, res) => {
  const body = req.body;
  if (!body || !body.redirectURL) {
    return res.status(400).send({ message: "bad request" });
  }
  const uid = new shortUniqueID({ length: 10 });
  const id = uid.rnd();
  URL.create({
    shortID: id,
    redirectURL: body.redirectURL,
    visitHistory: [],
    createdBy: req.user._id
  }).then(() => {
    return res.redirect('/');
  }).catch((err) => {
    return res.status(500).send({
      message: "some error occurred. Please try after some time.",
      error: err
    });
  });
}

const handleRedirectURL = (req, res) => {
  const shortID = req.params.shortID;
  URL.findOneAndUpdate({
    shortID: shortID
  }, {
    $push: {
      visitHistory: {
        timestamp: Date.now()
      }
    }
  }).then((entry) => {
    return res.redirect(entry.redirectURL);
  }).catch((err) => {
    return res.status(500).send({
      message: "some error occurred. Please try after some time.",
      error: err
    });
  });

}

module.exports = { handleCreateURL, handleRedirectURL };