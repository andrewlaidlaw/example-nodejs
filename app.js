const http = require('http');

const os = require('os');
const hostname = "0.0.0.0";
const host = os.hostname();
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Systems AI Team from pod '+host);
  console.log("Someone's knocking at the door");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
