const express = require('express');
const cors = require('cors');

const { getPosts } = require('../controllers/posts.controller');
const router = express.Router();

router.use(cors());

router.get('/', getPosts);

module.exports = router;
