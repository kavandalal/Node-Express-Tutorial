 // ----------- 1 start----------
 // below will work just fine, but here we had to wriite the full function for getText 

//  const {readFile,writeFile} = require('fs')
//  const getText=(path)=>{
//    return new Promise((resolve,reject)=>{
//      readFile(path,'utf8',(err,result)=>{
//        if(err){
//          reject(err)
//        }
//        else{
//          resolve(result)
//        }
//      })
//    })
//  }

// //  getText('./content/first.txt')
// //  .then(res=>console.log(res))
// //  .catch(er=>console.log(er))

//  const start =async()=>{
//    try{
//      const first =await getText('./content/first.txt')
//      const second =await getText('./content/second.txt')
//      console.log(first,second)
//    }
//    catch(er){
//      console.log(er)
//    }
//  }
// start()

// ------------ 1 end -----------

// ------------ 2 start ------------
 const {readFile,writeFile} = require('fs').promises
 //.promises will define that readFile and writeFile should return the promise 
 // and in this program we dont have to define the whole fucntion of getText it is inbuilt in nodejs with .promises 
  const start =async()=>{
   try{
     const first =await readFile('./content/first.txt','utf8')
     const second =await readFile('./content/second.txt','utf8')
     await writeFile('./content/result-mind-grenade-promise-async.txt',`the content inside both file is \n${first} \n${second}`)
   }
   catch(er){
     console.log(er)
   }
 }
start()

// ------------ 2 end ------------
start()