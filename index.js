//Imports

const express = require("express");
const cors = require("cors");

const PORT = 3000;
const HTTPSTATUSCODE = require("./utils/httpStatusCode");
const { connectMongo } = require("./utils/db");
const classicsRoutes = require("./src/routes/classics.routes");
// CONFIG
connectMongo();
const app = express();
// header control
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Methods", "GET,PATCH,POST,DELETE");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//endpoints
app.get("/", (req, res, next) =>
  res.status(200).json({
    status: 200,
    message: "Welcome to my server",
    app: "myapp",
  })
);

app.use("/api/classics", classicsRoutes);

//manejo de errores
app.use((req, res, next) => {
  let error = new Error();
  error.status = 404;
  error.message = HTTPSTATUSCODE[404];
  next(error);
});
app.use((error, req, res, next) => {
  return res
    .status(error.status || 500)
    .json(error.message || "Unexpected error");
});
// ESCUCHA
app.listen(PORT, () => {
  console.log(`app running in port ${PORT}`);
});
