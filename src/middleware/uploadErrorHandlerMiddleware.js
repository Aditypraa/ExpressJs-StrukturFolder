const uploadErrorHandler = (err, req, res, next) => {
  if (err.code === "LIMIT_FILE_SIZE") {
    res.status(400).json({ message: "File to large" });
    return;
  }
  res.status(500).json({ message: "Internal Server Error" });
};

module.exports = uploadErrorHandler;
