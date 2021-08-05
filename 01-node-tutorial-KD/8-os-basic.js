//os inbuilt module 
const os = require('os');// inbuilt os 
console.log(`${os.version()} is the version of windows `);
console.log(os.userInfo());

console.log(`${os.uptime()} seconds is uptime`);

const obj = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem : os.freemem(),
}
console.log(obj);
