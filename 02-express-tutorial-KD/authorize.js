const authorize = (req,res,next)=>{
  console.log('authorize')
  const {user}= req.query 
  if(user === 'kavan'){
    req.user = {'name':'kavan','id': '3'}
    next()
  }
  else{
    res.status(401).send('Unauthorize')
  }
}

module.exports = authorize