const express = require('express');
const os = require("os");

const app = express();
const port = 8080;
const hostname = "0.0.0.0";
const host = os.hostname();

app.get('/', (req, res) => {
  res.send('Hello OpenShift from pod '+host)
})

app.get('/hello', (req, res) => {
  res.send('<html><head><style>.center{height: 200px; position: relative; border: 5px solid darkblue; }.center p {font-size: 2em; margin: 0; text-align: center; font-family: Arial, Helvetica, sans-serif; position: absolute; top: 50%; left: 50%; -ms-transform: translate(-50%, -50%); transform: translate(-50%, -50%);}</style></head><body><div class="center"><p>Hello from pod '+host+'</p></div></body></html>')
})

app.listen(port, hostname, () => {
  console.log(`Example app listening at http://${hostname}:${port}`)
})
