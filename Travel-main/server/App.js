const express = require("express");
const cors = require("cors");
const User = require("./Routes/userRoutes");
const handleError = require("./Middleware/error");
const app = express();
const cookieParser = require("cookie-parser");

//Config path
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "server/.env" });
  app.use(
    cors({
      origin: "http://localhost:3000",
    })
  );
} else {
  app.use(
    cors({
      origin: "https://voyage-tours.netlify.app",
    })
  );
}
app.use(cookieParser());
app.use(express.json());

app.use("/api", User);

app.use(handleError);

module.exports = app;
