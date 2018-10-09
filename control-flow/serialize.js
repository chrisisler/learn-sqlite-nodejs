let sqlite3 = require('sqlite3').verbose()

// in-memory database
let db = new sqlite3.Database(':memory:', error => {
  if (error) {
    throw Error(error.message)
  }
  console.log('connected')
})

db.serialize(() => {
  db
    .run(`CREATE TABLE greetings(message text)`)
    .run(`INSERT INTO greetings
          VALUES('Hi'),
                ('Hello'),
                ('Welcome')`)
    .each(`SELECT message FROM greetings`, (error, row) => {
      if (error) {
        throw error
      }
      console.log(row.message)
    })
})

db.close(error => {
  if (error) {
    throw Error(error.message)
  }
  console.log('closed')
})
