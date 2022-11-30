const { readFile, writeFile} = require('fs')

console.log('start');
readFile('./newFile/first.txt', 'utf8', (err,res) => {
    if(err) {
        console.log(err);
    }
    const first = res
    readFile('./newFile/second.txt', 'utf8',(err,res) => {
        if(err) {
            console.log(err);
        }
        const second = res
        writeFile(
            './newFile/result-async.txt',
            `Here is the result ${first},${second}`,
            (err,res) => {
                if(err) {
                    console.log(err);
                }
                console.log('end');
            }
        )
    })
})
console.log('Start an new task');