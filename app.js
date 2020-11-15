const express = require('express');
const os = require("os");

const app = express();
const port = 8080;
const hostname = "0.0.0.0";
const host = os.hostname();

app.get('/', (req, res) => {
  res.send('Hello OpenShift from pod '+host)
})

app.listen(port, hostname, () => {
  console.log(`Example app listening at http://$(hostname):${port}`)
})
