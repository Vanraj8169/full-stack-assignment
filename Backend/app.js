const path = require("path");
const express = require("express");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const helmet = require("express-mongo-sanitize");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");

const AppError = require("./utils/appError");
const userRouter = require("./routes/userRoutes");
const dataRouter = require("./routes/dataRoutes");
const globalErrorHandler = require("./utils/globalErrorHandler");

const app = express();
app.use(cors());
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

//1) GLOBAL MIDDLEWARES
app.use(globalErrorHandler);
// Serving static files
app.use(express.static(path.join(__dirname, "public")));
//Set Security HTTP headers
app.use(helmet());

// Limit requests from same API
const limiter = rateLimit({
  max: 100,
  windowsMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour",
});
app.use("/api", limiter);

// Body parser, reading data from body into req.body
app.use(express.json({ limit: "10kb" }));

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// Prevent parameter pollution
app.use(
  hpp({
    whitelist: [
      "duration",
      "ratingsQuantity",
      "ratingsAverage",
      "maxGroupSize",
      "difficulty",
      "price",
    ],
  })
);

// 3) ROUTES

app.use("/api/v1/users", userRouter);
app.use("/api/v1/data", dataRouter);
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});
module.exports = app;
