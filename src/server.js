const express = require("express")
const server = express()

server.use(express.static("public"))

const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
  express:server,
  noCache:true
})


server.get("/",(req,res) =>{
  return res.render("index.html")
})

server.get("/create-point",(req,res) =>{
  return res.render("create-point.html")
})

server.get("/seach-results",(req,res) =>{
  return res.render("seach-results.html")
})

server.listen(3000)
console.log("Server started 🚀🚀🚀")