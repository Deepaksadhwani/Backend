const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const adminRoute = require("./routes/admin");
const shopRoute = require("./routes/shop");
const contactRoute = require("./routes/contact");
const successRoute = require("./routes/success");
const path = require("path");

// order matters always keep on top of other routes

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", adminRoute);
app.use("/shop", shopRoute);
app.use("/contact", contactRoute);
app.use("/success", successRoute);

app.use("*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3009);
