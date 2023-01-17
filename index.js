const gateway = require('fast-gateway');

const port =2000

const server = gateway({
    routes :[
        {
            prefix:'customers',
            target: 'http://localhost:4500/',
            hooks:{

            }

        },
        {
            prefix:'books',
            target: 'http://localhost:8000/',
            hooks:{

            } 
        },
        {
            prefix:'orders',
            target: 'http://localhost:5000/',
            hooks:{

            }
        },
    ]
})

server.get("/gateway",(req,res)=>
res.send("this is a gateway"));

server.start(port,()=>{
    console.log(`gateway started at ${port}`);
})