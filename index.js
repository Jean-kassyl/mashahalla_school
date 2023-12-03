const Joi = require('joi')
const express = require('express')
const homeRoutes = require('./routes/homeRoute')


const app = express()


app.set('view engine', 'pug')
app.set('views', './views')
app.use(express.static("public"))
app.use(express.json())


app.use("/home", homeRoutes)

const port = process.env.PORT || 3002
app.listen(port, console.log("listening on port " + port))