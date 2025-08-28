const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>Test Page</h1><p>Server is running!</p>');
});

server.listen(5000);