// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

//4 5 6 7 file names are used in this file 
const names = require('./04-names')
const sayHi = require('./05-utils')
const data = require('./06-alternative-flavor')
require('./07-mind-grenade')
sayHi('bob')
sayHi(names.john)
sayHi(names.peter)