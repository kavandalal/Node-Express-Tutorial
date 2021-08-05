const express = require('express')
const app = express()
const { products } = require('./data')

app.get('/', (req, res) => {
  res.send(`<h1> Home Page</h1><a href="/api/products">products</a><div>
  <p>/api/products/:productID</p>
  <p>/api/products/:productID/reviews/:reviewID</p>
  <p>/api/v1/query?limit=3&search=a </p>
  <p>// last line will find the element name starting with 'a' and limit of 3</p>
  </div>`)
})
app.get('/api/products', (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product
    //everything except the product description
    return { id, name, image }
  })

  res.json(newProducts)
})

app.get('/api/products/1',(req,res)=>{
  //only product with id === 1 
  // STATIC METHOD 
  const single = products.find((product)=>product.id===1)
  res.json(single)
})

app.get('/api/products/:productID', (req, res) => {
  //only product with id === 1 
  // DYNAMIC METHOD 

  // console.log(req)
  // console.log(req.params)
  const { productID } = req.params
  // req.params is the thing you write in the url after ':' 

  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  )
  if (!singleProduct) {
    return res.status(404).send('Product Does Not Exist')
  }

  return res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
  console.log(req.params)
  console.log(req.params.productID)
  console.log(req.params.reviewID)
  res.send('hello')
})

app.get('/api/v1/query', (req, res) => {
  // console.log(req.query)
  const { search, limit } = req.query
  console.log(req.query)
  let sortedProducts = [...products]

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search)
    })
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit))
  }
  if (sortedProducts.length < 1) {
    // res.status(200).send('no products matched your search');
    return res.status(200).json({ sucess: true, data: [] })
  }
  res.status(200).json(sortedProducts)
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
