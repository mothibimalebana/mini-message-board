//imports
const express = require('express')
const path = require("node:path");
const indexRouter = require('./router/indexRouter')

const app = express()
const assetsPath = path.join(__dirname, "public");

//middleware
app.use(express.static(assetsPath));
app.use(express.urlencoded({extended: true}))

//configs
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//Routers
app.use("/", indexRouter)

app.listen(3000, () => {
    console.log("running")
})

