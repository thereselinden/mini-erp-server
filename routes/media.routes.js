const express = require('express');
const cors = require('cors');

const { getMedia } = require('../controllers/media.controller');
const router = express.Router();

router.use(cors());

router.get('/', getMedia);

module.exports = router;
