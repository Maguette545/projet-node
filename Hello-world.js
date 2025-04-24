console.log("HELLO WORLD");

const { log } = require('console');
const http = require('http');
 
const server = http.createserver((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html'});
    res.end('<h1>Hello Node !!!!</h1>\n');
});

server.listen(3000, () => {
    console.log('Server en ecoute sur http://localhost:3000');
    
});

const fs = require('fs');
    fs.writeFileSync('welcome.txt', 'Hello Node');

const fs = require('fs');
const data = fs.readFileSync('welcome.txt', 'utf8');
console.log(data);

