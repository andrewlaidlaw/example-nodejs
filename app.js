const http = require('http');

const os = require('os');
const hostname = "0.0.0.0";
const host = os.hostname();
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello world from pod '+host);
  console.log("http request at /");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
