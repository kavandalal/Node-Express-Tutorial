const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Home Page')
  }
  if (req.url === '/about') {
    // blocking code
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i} ${j}`)
        // as this will run many times it will prevent others people on the same site to slow down we have to create a async function 
      }
    }
    res.end('About Page')
  }
  res.end('Error Page')
})

server.listen(5000, () => {
  console.log('Server listening on port : 5000....')
})