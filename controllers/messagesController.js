const db = require("../db/queries");

async function getMessages(req, res) {
  const messages = await db.getMessages();
  res.render("index", { messages });
}

async function createMessage(req, res) {
  const { username, text } = req.body;
  await db.createMessage(username, text);
  res.redirect("/");
}

module.exports = {
  getMessages,
  createMessage,
};
