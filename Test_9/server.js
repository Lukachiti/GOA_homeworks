const express = require("express")
const string = "luka-"
const PORT = 3000

const server = express()

server.get("/", (req, res) => {
    res.statusCode = 305
    res.send(string)
    
})


server.listen(PORT, () =>{
    console.log(`server runnining on port: ${PORT}`)
})