const http = require("http");
const fs = require('fs')

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) =>{
    const data = fs.readFileSync('user.json', 'utf8');
    console.log(data);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/json');
    res.end(data);
});

server.listen(port, hostname, ()=>{
    console.log(`Server is listening at http:${hostname}:${port}....`);
})




// res.setHeader('Content-Type', 'text/plain');

/*
res.setHeader('Content-Type', 'text/html');
res.end(`
    <html>
        <head>
            <title>User Data</title>
        </head>
        <body>
            <h1>Users</h1>
            <p1>Kyri</p>
        </body>
    </html>
    `);
*/