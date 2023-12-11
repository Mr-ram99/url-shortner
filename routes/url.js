const express = require('express');
const { handleCreateURL, handleRedirectURL } = require('../controllers/url')

const router = express.Router();

router.get('/:shortID', handleRedirectURL);
router.post('/', handleCreateURL);

module.exports = router;