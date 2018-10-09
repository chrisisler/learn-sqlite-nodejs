let sqlite3 = require('sqlite3').verbose()

let db = new sqlite3.Database('./db/chinook.db')

let sql = `SELECT DISTINCT Name name FROM playlists ORDER BY name`

db.all(sql, [], (error, rows) => {
  if (error) {
    throw Error(error.message)
  }
  rows.forEach(row => {
    console.log(row.name)
  })
})

db.close()
