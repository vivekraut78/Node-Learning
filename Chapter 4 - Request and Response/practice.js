const http=require('http')

const server = http.createServer((req,res)=>
{
    console.log(req.url,req.method);

    if(req.url==='/Home')
    {
        res.write
        (`
            <h1>Welcome to the Home Page</h1>        
        `);
        return res.end();
    }
    else if(req.url==='/Men')
    {
        res.write
        (`
            <h1>Welcome to the Men Page</h1>        
        `);
        return res.end();
    }
    else if(req.url==='/Women')
    {
        res.write
        (`
            <h1>Welcome to the Women Page</h1>        
        `);
        return res.end();
    }
    else if(req.url==='/Kids')
    {
        res.write
        (`
            <h1>Welcome to the Kids Page</h1>        
        `);
        return res.end();
    }
    else if(req.url==='/Cart')
    {
        res.write
        (`
            <h1>Welcome to the Cart Page</h1>        
        `);
        return res.end();
    }
    res.write
    (`
        <HTML>
            <head>
                <title>Myntra</title>
            </head>
            <body>
                <head>

                    <nav>
                        <ul>
                            <li><a href="/Home">Home</a></li>
                            <li><a href="/Men">Men</a></li>
                            <li><a href="/Women">Women</a></li>
                            <li><a href="/Kids">Kids</a></li>
                            <li><a href="/Cart">Cart</a></li>
                        </ul>
                    </nav>
                </head>
            </body>
        </HTML>        
    `);
    res.end();

    
});

server.listen(3001,()=>console.log(`Server is running on port http://localhost:${3001}`));