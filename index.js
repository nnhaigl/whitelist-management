require('dotenv').config();
const port = process.env.PORT || 3000;
const server = require('./server');
server.listen(port, () => {
  console.log(`Wishlist management run on http://localhost:${port}`);
});
