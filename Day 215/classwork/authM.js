function authM(req, res, next) {
  const password = req.query.password;
  if (password === "1234") {
    next();
  } else {
    res.status(403).json({ message: "Access Denied" });
  }
}
module.exports = authM;