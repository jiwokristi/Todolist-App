const errorHandlers = async (err, req, res, next) => {
  if (err.name === "SequelizeValidationError") {
    res.status(400).json({ message: err.errors[0].message });
  }

  if (err.name === "SequelizeUniqueConstraintError") {
    res.status(403).json({ message: "Todo with that name already exists." });
  }

  switch (err.code) {
    case 404:
      res.status(err.code).json({ message: err.message });
      break;
    default:
      res.status(500).json({ message: "Internal Server Error" });
      break;
  }
};

module.exports = errorHandlers;
