require('dotenv').config();

const getMedia = async (req, res) => {
  const url = `${process.env.WC_URL}/wp-json/wp/v2/media`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    res.status(200).json(data);
  } catch (err) {
    console.log('Err', err);
  }
};

module.exports = { getMedia };
