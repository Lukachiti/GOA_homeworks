function secretM(req, res, next) {
  const secret = req.query.secret;
  if (secret === 'open') {
    next();
  }
  else {
    res.status(403).json({
      message: "Invalid secret"
    });
  }
}
module.exports = secretM;
