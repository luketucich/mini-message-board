const express = require("express");
const app = express();
const path = require("node:path");

// Enables EJS templating
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => res.send("Hello, world!"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Mini Message Board - listening on port ${PORT}!`);
});
