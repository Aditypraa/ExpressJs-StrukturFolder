const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    const timesTamp = new Date().getTime();
    const originalname = file.originalname;
    cb(null, `${timesTamp}-${originalname}`);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 3 * 1000 * 1000 }, // 3MB
});

module.exports = upload;
