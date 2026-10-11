const sumRequestHandler=(req,res)=>
{
    console.log('In sum request handler',req.url,);
    const body=[];
    req.on('data',(chunk)=>
    {   
        console.log(chunk);
        body.push(chunk);
    });
    
    req.on('end',()=>
    {
        const bodyStr=Buffer.concat(body).toString();
        const params=new URLSearchParams(bodyStr);
        const bodyObj=Object.fromEntries(params.entries());
        console.log(bodyObj);
        const result=Number(bodyObj.num1)+Number(bodyObj.num2);
        console.log(result);
        
        res.setHeader('Content-Type','text/html');
        res.write
        (`
            <html>
                <head>
                    <title>Result</title>
                </head>
                <body>
                    <h1>Result is ${result}</h1>
                    <a href="/calculator">Go back to calculator</a>
                </body>
            </html>     
        `);
        return res.end();
    });
}

exports.sumRequestHandler=sumRequestHandler;