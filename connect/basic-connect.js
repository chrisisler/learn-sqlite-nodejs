let sqlite3 = require('sqlite3').verbose()

let db = new sqlite3.Database('./db/chinook.db', error => {
  if (error) {
    throw Error(error.message)
  }
  console.log('connected')
})

// ...

db.close(error => {
  if (error) {
    throw Error(error.message)
  }
  console.log('closed')
})
