const OAuth = require('oauth-1.0a');
const CryptoJS = require('crypto-js');
require('dotenv').config();

const ck = process.env.CONSUMER_KEY;
const cs = process.env.CONSUMER_SECRET;

const oauth = OAuth({
  consumer: {
    key: ck,
    secret: cs,
  },
  signature_method: 'HMAC-SHA1',
  hash_function: function (base_string, key) {
    return CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA1(base_string, key));
  },
});

module.exports = { oauth };
