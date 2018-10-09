let sqlite3 = require('sqlite3').verbose()

let db = new sqlite3.Database(':memory:', error => {
  if (error) {
    throw Error(error.message)
  }
  console.log('connected')
})

let dbSum = (db, num1, num2) => {
  db.get(`SELECT (? + ?) sum`, [num1, num2], (error, row) => {
    if (error) {
      throw Error(error.message)
    }
    console.log('Sum of %s and %s is %s', num1, num2, row.sum)
  })
}

db.parallelize(() => {
  dbSum(db, 1, 1)
  dbSum(db, 2, 2)
  dbSum(db, 3, 3)
  dbSum(db, 4, 4)
  dbSum(db, 5, 5)
})

db.close(error => {
  if (error) {
    throw Error(error.message)
  }
  console.log('closed')
})
