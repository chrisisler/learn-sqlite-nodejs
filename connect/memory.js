let sqlite3 = require('sqlite3').verbose()

// in-memory database
let db = new sqlite3.Database(':memory:', error => {
  if (error) {
    throw Error(error.message)
  }
  console.log('connected')
})

db.close(error => {
  if (error) {
    throw Error(error.message)
  }
  console.log('closed')
})
