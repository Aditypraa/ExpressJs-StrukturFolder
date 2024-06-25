const create = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "Image Not Found" });
  }

  try {
    res.status(200).json({ message: "Success Upload Image", data: req.file });
  } catch (error) {
    res.status(500).json({ message: "Server Error", serverMessage: error });
  }
};

module.exports = { create };
