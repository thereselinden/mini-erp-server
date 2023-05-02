const express = require('express');
const cors = require('cors');

const { getProducts } = require('../controllers/products.controller');
const router = express.Router();

router.use(cors());

router.get('/', getProducts);

module.exports = router;
