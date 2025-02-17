const http = require('http');

http.get('http://127.0.0.1:3000', (res)=>{
    console.log('Status Code', res.statusCode);

    res.on('data', (chunk) => {
        // console.log(chunk.toString()); // or you can do the below
        process.stdout.write(chunk);
        // const data  = JSON.parse(chunk.toString());
        // console.log(data.users[0].name)
    })
});