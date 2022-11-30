// CommonJS , every file in node application is called modules 
const item = require('./name')
const log = require('./logger')
require('./number')
log('unknown')
log(item.person1)
log(item.person2)