const router = require("express").Router();
const upload = require("../middleware/multerMiddleware");
const { create } = require("../controllers/imagesController");

//Upload Image
router.post("/", upload.single("photo"), create);

module.exports = router;
