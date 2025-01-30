const http = require('http');

const server = http.createServer((req, res) => {
  // Without this check the server will crash if there is an error in the request handling
  // For example if you try to access a property that does not exist
  if (req.url === '/error') {
    throw new Error('Something went wrong!');
  }
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World');
});

server.on('error', (err) => {
  console.error('Server error:', err);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});