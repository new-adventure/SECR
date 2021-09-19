const { exec } = require('child_process');
const { application } = require('express');
const express = require('express');
const { fileURLToPath } = require('url');
const app = express();

app.get('/api/scan', async (req, res) => {
    /* 
        Desired interface:
        - /api/scan?url=<url> 
        Response:
        - CLI output of nmap vuln scan and parsing accordingly 
    */
    const output = await executeScan(req.query.url);
    console.log(output)
    res.send(output);
});

const executeScan = (url) => {
    /*   exec(`sh nmap_vuln/nmap_ports ${url}`, (error, stdout, stderr) => {
        if (error) {
            console.error(error);
        }
        console.log(stdout)
        return stdout;
    });   */
    return execShellCommand(`sh nmap_vuln/nmap_ports ${url}`)
}

function execShellCommand(cmd) {
    const exec = require('child_process').exec;
    return new Promise((resolve, reject) => {
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                console.warn(error);
            }
            resolve(stdout ? stdout : stderr);
        });
    });
}

app.listen(8080);