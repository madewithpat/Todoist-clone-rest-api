const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(morgan("combined"));
app.use(cors());

app.get("/", (req, res) => {
   res.json({
      message: "hello express"
   });
});

module.exports = app;
