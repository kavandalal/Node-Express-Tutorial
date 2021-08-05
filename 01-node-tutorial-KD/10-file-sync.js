const { readFileSync, writeFileSync } = require('fs')

console.log('start')

const first = readFileSync('./content/first.txt', 'utf8') // utf-8 is default if not specified 
const second = readFileSync('./content/second.txt', 'utf8')
// console.log(first, '||', second);

writeFileSync('./content/result-sync.txt', `the combination of file 1 |${first}| and file 2 |${second}|`, { flag: 'w' }); // it will overwrite if any content is present in the file already or make the file if not present
console.log('done with this task')
console.log('starting next task')

// output will be:
// "
// start
// done with this task
// starting next task
// "


//difference between 10 and 11 file written in 11-file-async.js 