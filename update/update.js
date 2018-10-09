let sqlite3 = require('sqlite3').verbose()

let db = new sqlite3.Database('./db/sample.db')

let data = ['Ansi C', 'C']
let sql = `UPDATE langs
            SET name = ?
            WHERE name = ?`

db.run(sql, data, function(error) {
  if (error) {
    return console.error(error.message)
  }

  let { changes } = this
  console.log('Row(s) updated:', changes)
})

db.close()
