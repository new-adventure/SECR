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
    res.send(executeScan(req.query.url));
});

const executeScan = (url) => {
    exec(`sh nmap_vuln/nmap_vuln_scan ${url}`, (error, stdout, stderr) => {
        if (error) {
            console.error(err);
        }
        console.log(stdout)
        return stdout;
    });
}

app.listen(8080);