//Advanatage of using express JS written below 

const { readFileSync } = require('fs')
const http = require('http')
const homePage =readFileSync('./navbar-app/index.html')
const server = http.createServer((req, res) => {
  // req user to server 
  // res server to user 
  // console.log(req.method)
  const url = req.url
  // home page
  if (url === '/' || url === '/home') {
    res.writeHead(200, { 'content-type': 'text/html' })
    // res.writeHead('200',{'content-type':'text/plain'})
    // res.writeHead('200',{'content-type':'text/css'})
    // res.writeHead('200',{'content-type':'text/javascript'})
    // 200 is the statue that the server will send to the user
    //content type will define if the file is html,css,js 
    res.write(homePage)
    // we want to run the above file it will render the html prfectly but the css js and logo will not render for that we have to write a whole new if statemnt for each to make this problem simple EXPRESS JS (Framework) is introduced
    res.end()
  }
  // about page
  else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>about page</h1>')
    res.end()
  }
  // 404
  else {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write('<h1>page not found</h1>')
    res.end()
  }
})

server.listen(5000)
