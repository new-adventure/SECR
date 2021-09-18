const { exec } = require('child_process');
const express = require('express');
const app = express();

app.get('/api/scan', (req, res) => {
    /* 
        Desired interface:
        - /api/scan?ip=<ip> 
        Response:
        - CLI output of nmap vuln scan and parsing accordingly 
    */
    const output = executeScan(req.query.url);
    res.send(output)
});

const executeScan = (ip) => {
    exec(`./nmap_vuln/nmap_vuln_scan ${ip}`, (err, stdout) => {
        if (err) {
            console.error(err);
        }
        return stdout;
    });
}
