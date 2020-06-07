const sqlite3 = require("sqlite3")

const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
// db.serialize(() => {

//   db.run(`
//     CREATE TABLE IF NOT EXISTS places(
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       image TEXT,
//       name TEXT,
//       andress TEXT,
//       andress2 TEXT,
//       state TEXT,
//       city TEXT,
//       items TEXT
//     )
//   `)

//   const query =`
//       INSERT INTO places(
//         image,
//         name,
//         andress,
//         andress2,
//         state,
//         city,
//         items
//       ) VALUES (?,?,?,?,?,?,?);
//   `

//   const values =[
//         "https://www.larplasticos.com.br/wp-content/uploads/2020/02/S%C3%ADmbolo-da-reciclagem-1024x576.jpg",
//         "Paperside",
//         "Guilherme Gemballa, Jardim América",
//         "N° 260",
//         "Santa Catarina",
//         "Rio do Sul",
//         "Papéis e Papelão"
//   ]

//   function afterInsertData(err){
//     if(err){
//       return console.log(err)
//     }

//     console.log("Cadastrado com sucesso")
//     console.log(this)
//   }
//    db.run(query, values,afterInsertData)

  db.all(`SELECT * FROM places`, function(err, rows){
    if(err){
      return console.log(err)
    }

    console.log("Aqui estão os registros")
    console.log(rows)
  })

  // db.run(`DELETE FROM places WHERE id = ?`,[5], function(err){
  //   if(err){
  //     return console.log(err)
  //   }

  //   console.log("Registros deletados com sucesso")
  // })

  

// })