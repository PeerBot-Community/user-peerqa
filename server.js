const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from PeerBot!');
});

server.listen(7777, () => {
  console.log('Server running on port 7777');
});