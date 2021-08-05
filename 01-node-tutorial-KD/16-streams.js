const { createReadStream } = require('fs')

// reading file in streams of data not bit by bit 
// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })
const stream = createReadStream('./content/big.txt')
//big.txt file is of 165Kb

stream.on('data', (result) => {
  console.log(result)
})
stream.on('error', (err) => console.log(err))