let sqlite3 = require('sqlite3').verbose()

let db = new sqlite3.Database('./db/chinook.db')

let sql = `SELECT FirstName firstName,
                  LastName lastName,
                  Email email
            FROM customers
            WHERE country = ?
            ORDER BY FirstName`

db.each(sql, ['USA'], (error, row) => {
  if (error) {
    throw Error(error.message)
  }
  console.log(`${row.firstName} ${row.lastName} - ${row.email}`)
})

db.close()
