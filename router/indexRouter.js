const express = require('express')

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

const { Router } = express
const indexRouter = Router()

indexRouter.get("/", (req, res) => {
    res.render("index", { messages })
});
indexRouter.get("/new", (req, res) => {
    res.render("form")
})
indexRouter.post("/new", (req, res) => {
    const { uname, tbox } = req.body

    messages.push({
        text: tbox,
        user: uname,
        added: new Date()
    })

    res.redirect("/")
})

module.exports = indexRouter