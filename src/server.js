const express = require("express")
const server = express()

const db = require("./database/db")

server.use(express.static("public"))
server.use(express.urlencoded({ extended: true}))

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

server.post("/savepoint",(req,res) =>{

  const query =`
  INSERT INTO places(
    image,
    name,
    andress,
    andress2,
    state,
    city,
    items
  ) VALUES (?,?,?,?,?,?,?);
`

const values =[
    req.body.imagem,
    req.body.name,
    req.body.address,
    req.body.address2,
    req.body.state,
    req.body.city,
    req.body.items
]



function afterInsertData(err){
    if(err){
      return res.send("Erro no cadastro")
    }

    console.log("Cadastrado com sucesso")
    console.log(this)

    return res.render('create-point.html',{saved: true})

}
db.run(query, values,afterInsertData)
})

server.get("/seach-results",(req,res) =>{

  const seach = req.query.seach

  if(seach == "") {
    return res.render("seach-results.html",{total:0})
  }

    db.all(`SELECT * FROM places WHERE state LIKE '%${seach}%'`, function(err, rows){
    if(err){
      return console.log(err)
    }

    const total = rows.length

    return res.render("seach-results.html",{places:rows,total:total})
  })

  
})

server.listen(3000)
console.log("Server started 🚀🚀🚀")