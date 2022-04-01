const errHandler = (err, req, res, next) => {
  console.log(err);
  if (err) {
    res.status(500).json({
      status: 'error',
      message: 'Something went wrong',
    });
  }
  next();
};

module.exports = errHandler;
