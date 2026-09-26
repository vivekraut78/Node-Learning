const http=require('http');

const server=http.createServer(  (req , res)=>
{
    console.log(req.url , req.method, req.headers);
    
    
    //process.exit(); //Stops the event loop
} , )

const PORT=3001

server.listen(PORT, ()=>
{
    console.log(`server running on port http://localhost:${PORT}`);
});