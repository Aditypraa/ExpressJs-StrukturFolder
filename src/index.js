require("dotenv").config();
const express = require("express");

//IMPORT Router
const usersRouter = require("./routes/users");

//IMPORT Middleware
const middlewareLogReq = require("./middleware/logs");
const upload = require("./middleware/multer");
const e = require("express");

//INITIALIZE Variable
const app = express();
const PORT = process.env.PORT || 5000;

//MIDDLEWARE
app.use(middlewareLogReq);
app.use(express.json());
app.use("/assets", express.static("public/images"));

//ROUTER
app.use("/users", usersRouter);

//Upload Image
app.post("/upload", upload.single("photo"), (req, res) => {
  res.status(200).json({ message: "Success Upload Image", data: req.file });
});

app.use((err, req, res, next) => {
  if (err.code === "LIMIT_FILE_SIZE") {
    res.status(400).json({ message: "File to large" });
    return;
  }
  res.status(500).json({ message: "Internal Server Error" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
