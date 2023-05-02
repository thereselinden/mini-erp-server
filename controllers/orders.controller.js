const axios = require('axios');
require('dotenv').config();

const { oauth } = require('../utils/oauth');

const getOrders = (req, res) => {
  const url = `${process.env.WC_URL}/wp-json/wc/v2/orders`;

  const requestData = {
    url: url,
    method: 'GET',
  };
  axios.get(requestData.url, { params: oauth.authorize(requestData) }).then(
    function (response) {
      res.status(200).json(response.data);
    },
    function (error) {
      console.log(error);
      res.send(500).json({ message: error.message });
    }
  );
};

module.exports = { getOrders };
