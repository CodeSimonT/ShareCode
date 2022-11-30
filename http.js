const http = require('http')

const server = http.createServer((req,res)=>{
    // console.log(req);
    // res.write('Welcome to our home page')
    // res.end()
    if(req.url === '/') {
        res.write('Welcome to our localHome page')
        res.end()
    }
    else if(req.url === '/about') {
        res.write('Here is our content')
        res.end()
    }
    else {
        res.write(`
        <h1>opps!</h1>
        <p>We can't seem to find what you are looking for</p>
        <a href="/">Back Home<a/>
        `)
        res.end()
    }
    
})
server.listen(3000, function() {
    console.log('Listining on port 3000');
})