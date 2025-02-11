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
