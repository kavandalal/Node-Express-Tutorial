const { readFile } = require('fs')

console.log('started a first task')
readFile('./content/first.txt', 'utf8', (err, result) => {
  //the file path is relative from app.js file not from this file
  if (err) {
    console.log(err)
    return
  }
  console.log(result)
  console.log('completed first task')
})
console.log('starting next task')