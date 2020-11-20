var pgtools = require('pgtools');
const config = {
  port: process.env.DATABASE_PORT,
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
};

pgtools.createdb(config, process.env.DATABASE_NAME, function (err, res) {
  if (err) {
    console.error(err);
    process.exit(-1);
  }
  console.log(res);
});
