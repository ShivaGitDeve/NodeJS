const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Welcome to Node.js backend!');
        res.end();
    } else if (req.url === '/about') {
        res.write('This is the About page');
        res.end();
    } else if (req.url === '/contact') {
        res.write('This is the contact page');
        res.end();
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
