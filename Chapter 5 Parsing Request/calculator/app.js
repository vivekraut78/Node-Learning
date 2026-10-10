const http=require('http');
const {requestHandler}=require('./handler.js');


const server=http.createServer(requestHandler);



const port=3000;
server.listen(port, () => 
{
  console.log(`Server is running on http://localhost:${port}`);
});