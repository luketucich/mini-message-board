const { Router } = require("express");

const indexRouter = Router();

const messages = [
  {
    text: "Hello!",
    user: "Bert",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Luke",
    added: new Date(),
  },
];

indexRouter.get("/", (req, res) => {
  res.render("index", {
    title: "Mini Messageboard",
    messages: messages.slice().sort((a, b) => b.added - a.added),
  });
});

module.exports = indexRouter;
module.exports.messages = messages;
