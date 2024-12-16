const express = require("express");
const router = express.Router();

const messagesController = require("../controllers/messagesController");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

router.get("/", messagesController.getMessages);

router.get("/new", function (req, res) {
  res.render("form");
});

router.post("/new", messagesController.createMessage);

module.exports = router;
