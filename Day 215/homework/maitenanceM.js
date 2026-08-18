function maintenanceM(req, res, next) {
  if (Math.random() > 0.8) {
    return {
      message: "Server is under maintenance",
    };
  } else {
    next();
  }
}

module.exports = maintenanceM;
