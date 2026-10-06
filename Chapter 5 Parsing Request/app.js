const http=require('http');
const userRequestHandler=require('./user');

const server=http.createServer(userRequestHandler);

const port=3000;
server.listen(port,()=>
{
    console.log(`Server is running on port ${port}`);
});