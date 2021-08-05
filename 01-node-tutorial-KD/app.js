var http = require('http')
var fs = require('fs')

http
  .createServer(function (req, res) {
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text)

    // doing the above will send the data alltogether once we can see thatby going in Network and select All for the data of 1.8 mb it took approx 1.9s 
    //by clcking on the local host data > Response header > Content-Length you can see that it is sending the whole file at once 



    const fileStream = fs.createReadStream('./content/big.txt', 'utf8')
    fileStream.on('open', () => {
      fileStream.pipe(res)
    })
    fileStream.on('error', (err) => {
      res.end(err)
    })

    // by doing the above you can see in the Responsive Header > transfering-Encoding is chunked as it if sending data in chunks and will be sent faster tan normal
  })
  .listen(5000)