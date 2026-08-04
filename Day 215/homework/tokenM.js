

function tokenM(req, res, next) {
  const token = req.headers.token;
  if (token === "abcd1234") {
    next();
  } else {
    res.status(403).json({
      message: "Invalid token",
    });
  }
}

module.exports = tokenM;