let sqlite3 = require('sqlite3').verbose()

let db = new sqlite3.Database('./db/sample.db')

let langs = ['C++', 'Python', 'Java', 'C#', 'Go']
let sql = 'INSERT INTO langs(name) VALUES ' +
  langs
  .map(() => '(?)')
  .join(',')

console.log('sql is:', sql)

db.run(sql, langs, function(error) {
  if (error) {
    return console.error(error.message)
  }

  let { lastID, changes } = this
  console.log('Inserted %s rows.', changes)
})

db.close()
