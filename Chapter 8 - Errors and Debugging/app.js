const http=require('http');
const testingSyntax=require('./syntax');

const server=http.createServer((req,res)=>
{
    console.log(req.url,req.method);
    testingSyntax();
});


const port=3000;

server.listen(port,()=>
{
    console.log(`Server is running on port ${port} : http://localhost:${port}`);
});