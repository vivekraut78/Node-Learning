const requestHandler =(req,res)=>
{
    console.log(req.url,req.method);
    if(req.url==='/')
    {
        res.setHeader('Content-Type','text/html');
        res.write
        (`
            <html>
                <head>
                    <title>Practice set</title>
                </head>
                <body>
                    <h1>Welcome to the calculator</h1>
                    <a href="/calculator">Go to calculator</a>
                </body>
            </html>     
        `);
        return res.end();
    }
    else if(req.url.toLowerCase()==='/calculator')
    {
        res.setHeader('Content-Type','text/html');
        res.write
        (`
            <html>
                <head>
                    <title>Practice set</title>
                </head>
                <body>
                    <h1>Here is the Calculator</h1>
                    <form action="/calculate-result" method="POST">
                        <input type="number" name="num1" placeholder="first num" required>
                        <input type="number" name="num2" placeholder="second num" required>
                        <button type="submit">Calculate</button>
                    </form>
                </body>
            </html>     
        `);
        return res.end();
    }
    res.setHeader('Content-Type','text/html');
        res.write
        (`
            <html>
                <head>
                    <title>Practice set</title>
                </head>
                <body>
                    <a href="/">Go back to home</a>
                    <h1>Page does not exist</h1>
                </body>
            </html>     
        `);
        return res.end();
}

exports.requestHandler=requestHandler;