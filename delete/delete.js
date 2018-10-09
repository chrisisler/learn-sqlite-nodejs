let sqlite3 = require('sqlite3').verbose()

let db = new sqlite3.Database('./db/sample.db')

let id = 1
db.run(`DELETE FROM langs WHERE rowid = ?`, id, function(error) {
  if (error) {
    return console.error(error.message)
  }
  let { changes } = this
  console.log(`Row(s) deleted:`, changes)
})

db.close()
