const http=require('http');
const server=http.createServer((req,res)=>
{
    if(req.url==='/')
    {
        res.write(`<h1>Welcome to Node.js</h1>`);
    }
});

server.listen(3000,()=>{
    console.log('Server is running on port 3000 :','http://localhost:3000');
});


//run npm init to create package.json file
