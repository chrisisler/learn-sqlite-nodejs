let sqlite3 = require('sqlite3').verbose()

let db = new sqlite3.Database('../db/chinook.db', error => {
  if (error) {
    throw Error(error.message)
  }
  console.log('connected')
})

db.serialize(() => {
  let query = `SELECT PlaylistId as id, Name as name FROM playlists`
  db.each(query, (error, row) => {
    if (error) {
      throw Error(error.message)
    }
    console.log(row.id + '\t' + row.name)
  })
})

db.close(error => {
  if (error) {
    throw Error(error.message)
  }
  console.log('closed')
})
