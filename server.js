const express = require('express');
const app = express();

const productsRoute = require('./routes/products.routes');
const postsRoute = require('./routes/posts.routes');
const orderRoute = require('./routes/orders.routes');
const mediaRoute = require('./routes/media.routes');

//body parser
app.use(express.json());

// routes
app.use('/products', productsRoute);
app.use('/posts', postsRoute);
app.use('/orders', orderRoute);
app.use('/media', mediaRoute);

// error middleware

app.listen(3000, () =>
  console.log('Server is up and running on port 3000....')
);
