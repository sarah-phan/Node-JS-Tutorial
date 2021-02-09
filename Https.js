const http = require('http');
const server = http.createServer((req,res) => {
    res.write('Hello World from nodejs');
    //this line just told what to response
    res.end();
    //this line will make the response run
});
//create the port so that server can run
server.listen('3000')
