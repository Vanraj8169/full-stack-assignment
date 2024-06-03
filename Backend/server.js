const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const app = require("./app");
const db = process.env.MONGO_URL.replace("PASSWORD", process.env.PASSWORD);
process.on("uncaughtException", (err) => {
  console.log(err.name, err.message);
  console.log("Unhandled Exception ! Shutting down ...");
  process.exit(1);
});
mongoose.connect(db).then(() => {
  console.log("DB connected successfully.");
});

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  console.log("Unhandled Rejection ! Shutting down ...");
  server.close(() => {
    process.exit(1);
  });
});
