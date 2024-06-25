const express = require("express");

const app = express();
app.use((req, res, next) => {
  console.log("In the middleware!");
  next(); // allow request to continue to the next middleware in line
});

app.use((req, res, next) => {
  console.log("In the another middleware!");
  res.send("<h1>Hello to Express js!</h1>")
});

app.listen(3000)