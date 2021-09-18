const { exec } = require('child_process');
const { application } = require('express');
const express = require('express');
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
    exec(`sh nmap_vuln/nmap_vuln_scan ${url}`, (err, stdout) => {
        if (err) {
            console.error(err);
        }
        return stdout;
    });
}

app.listen(8080);