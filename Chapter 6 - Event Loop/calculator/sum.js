const sumRequestHandler=(req,res)=>
{
    console.log('1.In sum request handler',req.url,);
    const body=[];
    let result;

    req.on('end',()=>
    {
        console.log('3.end event came');
        const bodyStr=Buffer.concat(body).toString();
        const params=new URLSearchParams(bodyStr);
        const bodyObj=Object.fromEntries(params.entries());
        console.log(bodyObj);
        result=Number(bodyObj.num1)+Number(bodyObj.num2);
        console.log(result);
        
        return res.end();
    });

    req.on('data',(chunk)=>
    {   
        console.log(chunk);
        body.push(chunk);
        console.log('2.Chunk came');
    });

    console.log(`4. sending the response`)
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
}

exports.sumRequestHandler=sumRequestHandler;