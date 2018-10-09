let sqlite3 = require('sqlite3').verbose()

let db = new sqlite3.Database('./db/sample.db', error => {
  if (error) {
    return console.error(error.message)
  }
  console.log('connected')
})

db.run('INSERT INTO langs(name) VALUES(?)', ['C'], function(error) {
  if (error) {
    return console.error(error.message)
  }

  let { lastID, changes } = this
  console.log('inserted row with id', lastID)
})

db.close(error => {
  if (error) {
    return console.error(error.message)
  }
  console.log('closed')
})
