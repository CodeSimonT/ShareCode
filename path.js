const path = require('path')

console.log(path.sep);

const filePath = path.join('Nodejs', 'newFile', 'sub', 'text.txt')
console.log(filePath);

const base = path.basename(filePath)
console.log(base);

const resolve = path.resolve(__dirname, 'Nodejs', 'newFile', 'sub', 'text.txt')
console.log(resolve);