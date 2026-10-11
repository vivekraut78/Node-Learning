const sumRequestHandler=(req,res)=>
{   console.log('1.In sum request handler',req.url,);
    const body=[];
    req.on('data',(chunk)=>
    {   
        body.push(chunk);
        console.log('2.Chunk came');
    });
    req.on('end',()=>{
        console.log('3.end event came');
        const bodyStr=Buffer.concat(body).toString();
        const params=new URLSearchParams(bodyStr);
        const bodyObj=Object.fromEntries(params);
        const result=Number(bodyObj.num1)+Number(bodyObj.num2);
        console.log(result);
        
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
        return res.end();
    });
}

exports.sumRequestHandler=sumRequestHandler;