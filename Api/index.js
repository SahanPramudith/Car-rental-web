const express = require('express')
var bodyParser = require('body-parser')
let postroute = require("./route/post_route")
const userroute=require('./route/User_route')
const coustomer=require('./route/coust.route')
var app = express()

var cors = require('cors')
var app = express()
 
app.use(cors())

app.use(cors())

app.use(express.static("images"))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const port = 3000

app.use('/post',postroute)
app.use('/user',userroute)
app.use('/couatomer',coustomer)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})