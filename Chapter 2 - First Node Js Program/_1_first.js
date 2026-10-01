const fs=require('fs')


//Syntax:
//fileObj.writeFile( fileDirectory , "Data" , function )
fs.writeFile('output.txt','writing file',(err)=>
    {
        if(err)
        {
            console.log("Error in writing into the file");
        }
    })