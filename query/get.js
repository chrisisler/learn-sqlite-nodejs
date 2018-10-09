let sqlite3 = require('sqlite3').verbose()

let db = new sqlite3.Database('./db/chinook.db')

let sql = `SELECT PlaylistId id, Name name FROM playlists WHERE PlaylistId = ?`
let playlistId = 1

db.get(sql, [playlistId], (error, row) => {
  if (error) {
    return console.error(error.message)
  }
  if (row) {
    console.log(row.id, row.name)
    return
  }
  console.log(`No playist found with id ${playlistId}`)
})

db.close()
