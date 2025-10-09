const express = require("express");
const appError = require("./utils/appError.js");
const globalErrorHandlerMiddleware = require("./middlewares/globalErrorHandler.middleware.js");
const route = require("./routes/route.js");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.use("/", route);

app.use((_req, _res, next) => {
  next(new appError(404, "Resource Not Found"));
});

app.use(globalErrorHandlerMiddleware);

module.exports = app;
