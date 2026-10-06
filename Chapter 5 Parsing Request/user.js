const http=require('http');
const fs=require('fs');

const requestHandler=( (req , res)=>
{
    console.log(req.url , req.method);
    if(req.url==='/')
    {
        res.setHeader('Content-type','text/html')
        res.write(`
            <html>()
                <head>
                    <title>
                        My First Page
                    </title>
                </head>
                <body>
                    <h1>Enter your details: </h1>
                        <form action="/submit-details" method="POST">
                            <input type="text" name="username" placeholder="Enter your name">
                            <br>
                            <label >Select your gender: </label>
                            <label for="male">Male</label>
                            <input type="radio" name="gender" id="male" value="male">
                            <label for="female">Female</label>
                            <input type="radio" name="gender" id="female" value="female">
                            <br>
                            <input type="submit" value="Submit">
                        </form>
                </body>
            </html>`);
        return res.end();
    }

    else if(req.url.toLocaleLowerCase()==='/submit-details' 
            && req.method.toLocaleLowerCase()==='post')
    {
        const body=[];
        req.on('data', chunk=>
        {
            console.log(chunk);  
            body.push(chunk);
        });

        req.on('end',()=>
        {
            const fullBody=Buffer.concat(body).toString();
            //console.log(fullBody);  This will print the data in the form of query string
            const params=new URLSearchParams(fullBody);
            
            
            // const bodyObject={};
            // for(const [key, value] of params.entries())
            // {
            //     bodyObject[key]=value;
            // }
            // console.log(bodyObject); //This will print the data in the form of object


            const bodyObject=Object.fromEntries(params.entries());
            console.log(bodyObject); 
            fs.writeFileSync('user.txt', 'User details submitted successfully');
        });

        res.statusCode=302;
        res.setHeader('Location', '/');
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





module.exports=requestHandler;