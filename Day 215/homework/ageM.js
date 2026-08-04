
function ageM(req, res, next) {
  const age = req.query.age;
  if (age >= 18) {
    next();
  } else {
    res.status(403).json({
      message: "You must be 18 or older",
    });
  }
}

module.exports = ageM;