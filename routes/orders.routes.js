const express = require('express');
const cors = require('cors');

const { getOrders } = require('../controllers/orders.controller');
const router = express.Router();

router.use(cors());

router.get('/', getOrders);

module.exports = router;
