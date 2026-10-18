const http=require('http');
const testingSyntax=require('./syntax');

const server=http.createServer((req,res)=>
{
    console.log(req.url,req.method);
    testingSyntax();
    res.setHeader('Content-Type','text/html');
    res.write(`
        <html>
            <head>
                <title>Node Initial</title>
            </head> 
            <body>
                <h1>Welcome to Node Initial</h1>
            </body>
        </html> 
`);
});


const port=3000;

server.listen(port,()=>
{
    console.log(`Server is running on port ${port} : http://localhost:${port}`);
});