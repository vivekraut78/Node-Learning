const http=require('http');

const server=http.createServer( (req , res)=>
{
    console.log(req.url , req.method, req.headers);
    if(req.url==='/')
    {
        res.setHeader('Content-type','text/html')
        res.write(`<html>`);
        res.write(`
            <head>
                <title>
                    My First Page
                </title>
            </head>
            <body>
                <h1>Welcome to Home page</h1>
            </body>
            
            `);
        res.write(`</html>`)
        return res.end();
    }
    else if(req.url==='/products')
    {
        res.setHeader('Content-type','text/html')
        res.write(`<html>`);
        res.write(`
            <head>
                <title>
                    My First Page
                </title>
            </head>
            <body>
                <h1>Checkout our products</h1>
            </body>
            
            `);
        res.write(`</html>`)
        return res.end();
    }
    else
    {
        res.setHeader('Content-type','text/html')
        res.write(`<html>`);
        res.write(`
            <head>
                <title>
                    My First Page
                </title>
            </head>
            <body>
                <h1>Welcome to Products page</h1>
            </body>
            
            `);
        res.write(`</html>`)
        return res.end();
    }
    res.setHeader('Content-type','text/html')
    res.write(`<html>`);
    res.write(`
        <head>
            <title>
                My First Page
            </title>
        </head>
        <body>
            <h1>Welcome to my website</h1>
        </body>
        
        `);
    res.write(`</html>`)
    return res.end();
    //process.exit(); //Stops the event loop
} 
);

const PORT=3001
server.listen(PORT, ()=>
{
    console.log(`server running on port http://localhost:${PORT}`);
});