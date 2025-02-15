const { Router } = require("express");
const { messages } = require("./indexRouter");
const messageRouter = Router();

messageRouter.get("/", (req, res) => {
  res.render("form");
});

messageRouter.post("/", (req, res) => {
  messages.push({
    text: req.body.message,
    user: req.body.name || "Anonymous",
    added: new Date(),
  });

  res.redirect("/");
});

module.exports = messageRouter;
