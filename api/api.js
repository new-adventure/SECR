const { exec } = require('child_process');
const { application } = require('express');
const express = require('express');
const { fileURLToPath } = require('url');
const app = express();

app.get('/api/scan', (req, res) => {
    /* 
        Desired interface:
        - /api/scan?url=<url> 
        Response:
        - CLI output of nmap vuln scan and parsing accordingly 
    */
    const output = executeScan(req.query.url);
    res.send("hello world");
});

const executeScan = (url) => {
    exec(`sh nmap_vuln/nmap_ports ${url}`, (error, stdout, stderr) => {
        if (error) {
            console.error(err);
        }
        console.log(stdout)
        return stdout;
    });
}

app.listen(8080);