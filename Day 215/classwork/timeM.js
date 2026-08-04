function timeM(req, res, next) {
  console.log(`Current Time: ${new Date()}`);
  next();
}

module.exports = timeM;