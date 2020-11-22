module.exports = (err, req, res, next) => {
  console.log(err, req, res, next);
  res.status(500);
  res.render('error', { error: err });
};
