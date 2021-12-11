const express = require("express")
const bodyParser = require("body-parser")
const request = require("request")
const app = express()

app.use(bodyParser.urlencoded({extended: true}))

const port = process.env.PORT || 3000

//server port
app.listen(port, ()=>{

console.log(`your server started at http://localhost${port} `)


})
