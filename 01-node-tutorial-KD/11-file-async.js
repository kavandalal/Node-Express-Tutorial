//easier and efficient way to do this program is in : 2-async-pattern -> 2-await-pattern.js 
//without complexities 

const { readFile, writeFile } = require('fs')

console.log('start')
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  const first = result
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const second = result
    writeFile(
      './content/result-async.txt',
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log('done with this task',result)
      }
    )
  })
})
console.log('starting next task')

//if you will run this program the output will be :
// "
// start
// starting next task
// done with this task
// "
// as you can see it will skip the whole block of file read and write to be async function as the files could be so long
// it is not the case in filesync.js that will exectute task one after another 