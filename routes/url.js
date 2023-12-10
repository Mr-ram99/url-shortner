const express = require('express');
const { handleGetAllURLs, handleCreateURL, handleRedirectURL } = require('../controllers/url')

const router = express.Router();

router.get('/', handleGetAllURLs);
router.get('/:shortID', handleRedirectURL);
router.post('/', handleCreateURL);

module.exports = router;