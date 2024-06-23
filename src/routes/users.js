const express = require("express");
const usersController = require("../controllers/users");

const router = express.Router();

//* READ - GET
router.get("/", usersController.index);

//* READ - GET
router.get("/:idUsers", usersController.show);

//* CREATE - POST
router.post("/", usersController.create);

//* UPDATE - PUT
router.patch("/:idUsers", usersController.update);

//* DELETE - DELETE
router.delete("/:idUsers", usersController.destroy);

module.exports = router;
