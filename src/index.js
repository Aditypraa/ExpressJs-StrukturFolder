require("dotenv").config();
const express = require("express");

//IMPORT Router
const usersRouter = require("./routes/usersRoute");
const imageRouter = require("./routes/imagesRoute");

//IMPORT Middleware
const middlewareLogReq = require("./middleware/logsMiddleware");
const uploadErrorHandler = require("./middleware/uploadErrorHandlerMiddleware");

//INITIALIZE Variable
const app = express();
const PORT = process.env.PORT || 5000;

//MIDDLEWARE
app.use(middlewareLogReq);
app.use(express.json());
app.use("/assets", express.static("public/images"));

//ROUTER
app.use("/users", usersRouter);
app.use("/upload", imageRouter);

app.use(uploadErrorHandler);
//Upload Image

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
