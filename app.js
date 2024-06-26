const express = require('express');
const os = require("os");

const app = express();
const port = 8080;
const hostname = "0.0.0.0";
const host = os.hostname();
const secretinfo = process.env.SECRET;

app.get('/', (req, res) => {
  res.send('<html><head><style>.center{height: 400px; position: relative; border: 5px solid darkblue }.center p {font-size: 2em; margin: 0; text-align: center; font-family: Arial, Helvetica, sans-serif; position: absolute; top: 50%; left: 50%; -ms-transform: translate(-50%, -50%); transform: translate(-50%, -50%);}</style></head><body><div class="center"><p>Hello from pod <br />'+host+'<br/>The secret is: <em>'+secretinfo+'</em></p></div></body></html>')
})

app.get('/version', (req, res) => {
  res.send('2.0');
})

app.get('/hello', (req, res) => {
  res.send('<html><head><style>.center{height: 200px; position: relative; border: 5px solid darkgreen; }.center p {font-size: 2em; margin: 0; text-align: center; font-family: Arial, Helvetica, sans-serif; position: absolute; top: 50%; left: 50%; -ms-transform: translate(-50%, -50%); transform: translate(-50%, -50%);}</style></head><body><div class="center"><p>Hello from pod <br />'+host+'</p></div></body></html>')
})

app.get('/secret', (req, res) => {
  res.send('The secret is: '+secretinfo);
  console.log(secretinfo)
})

app.get('/andrew', (req, res) => {
  res.send('<html><head><title>Andrew</title></head><body><h1>Andrew Laidlaw</h1></body></html>');
  console.log("Andrew endpoint requested.")
})

app.get('/healthz', (req, res) => {
  res.send('ok');
})

app.get('/techu', (req, res) => {
  res.send('Hello Technical University');
})

app.get('/azure', (reqq, res) => {
    res.send('Automated build completed via Azure Pipelines');
})

app.get('/techzone', (reqq, res) => {
    res.send('<html><head><title>Andrew</title></head><body><h1>Showing that we can deploy this environment easily on an environment provisioned through IBM TechZone</h1></body></html>');
})

app.listen(port, hostname, () => {
  console.log(`Example app listening at http://${hostname}:${port}`)
})
