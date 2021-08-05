let x = true
let y =true 
const getResult=()=>{
  return new Promise((resolve,reject) =>{
    //resolve is sent if evrything we want is true 
    //reject is sent if there is something we dont want (error)
    if(!x && !y){
      reject('x and y is false')
    }
    else if (!x){
      reject('x is false')
    }
    else if (!y){
      reject('y is false')
    }
    else{
      resolve('everything is true')
    }
  })
}

getResult().then(response => console.log(response)).catch(err => console.log(err))