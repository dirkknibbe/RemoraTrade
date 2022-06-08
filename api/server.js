// express import
const express = require("express");

// router imports
const Router = require("./router/router.js");

// server declaration
const server = express();

// allows for json to be used for transfer
server.use(express.json());

// router middleware usage
server.use("/api/router", Router);

server.get("/", (req, res, next) => {
  res.json("Welcome to RemoraTrade API");
  next();
});

// global error handling middleware
server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

// server export
module.exports = server;
