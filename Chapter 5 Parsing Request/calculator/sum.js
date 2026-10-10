const sumRequestHandler=(req,res)=>
{
    console.log('In sum request handler',req.url,);
    const body=[];
    req.on('data',(chunk)=>
    {
        console.log('chunk',chunk);
        body.push(chunk);
    });
    req.on('end',()=>
    {
        const bodyStr=Buffer.concat(body).toString();
        const params=new URLSearchParams(bodyStr);

    });
}

exports.sumRequestHandler=sumRequestHandler;