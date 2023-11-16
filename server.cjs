const express = require("express");

const port = 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to my Izak's backend Applications");
});

app.get("/izak", (req, res) => {
  res.send("Hello Izak");
});

app.listen(port, () => console.log("Listening"));
