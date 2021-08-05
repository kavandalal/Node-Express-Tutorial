const express = require('express')
const app = express()

app.get('/', (req, res) => {
  console.log('user hit the resource')
  res.status(200).send('Home Page')
})

app.get('/about', (req, res) => {
  res.status(200).send('About Page')
})

app.all('*', (req, res) => {
  res.status(404).send('<h1>resource not found</h1>')
})

app.listen(5000, () => {
  // 2nd parameter is callback function 
  console.log('server is listening on port 5000...')
})

// app.get (get data from server)
// app.post (post data to server)
// app.put (update data in server)
// app.delete (delete data in server)
// app.all (to access all the name that are not defined in .get)
// app.use ()
// app.listen (port number that we have to listen at)