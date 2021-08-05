const http = require('http')

const server = http.createServer((req, res) => {
  //req => request 
  //res => response
  // req is what  the user wants and res is the response that we will provide to the user 
  //just printing req will have many things

  // res.write('Anything in the home page')
  // res.end()
  // the above 2 line will also make a server in locally 
  
  if (req.url === '/') {
    res.end('Welcome to our home page')
  } else if (req.url === '/about') {
    res.end('Here is our short history')
  } else {
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `)
  }
})

server.listen(5000)