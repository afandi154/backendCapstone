require("./connection");

const express = require("express");
const cookieParser = require("cookie-parser");
const router = require("./routes/router");
const logger = require("./middleware/logger");
const notFound = require("./middleware/404");

const app = express();

app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(router);
app.use(notFound);

app.listen(8080, () =>
  console.log("Server is running on port http://localhost:8080/")
);
