import { useState } from 'react';

function Form() {
    const [url, setUrl] = useState('localhost:8080');
    const [sqlInjection, setSqlInjection] = useState(true);
    const [ddos, setDdos] = useState(false);
    const [scanning, setScanning] = useState(false);
    console.log(sqlInjection, ddos, scanning);
    return (
        <form>
            <div class="main-input">
                <input class="url" type="text" placeholder="Enter URL..." />
                <input class="submit" type="submit" value="Check!" />
            </div>
            <div class="checkbox-buttons">
                <div class="checkbox-wrapper">
                    <input type="checkbox" name="type" id="c-1" value="SQL Injection" checked={sqlInjection} />
                    <label class="checkbox-label" for="c-1">SQL Injection</label>
                </div>
                <div class="checkbox-wrapper">
                    <input type="checkbox" name="type" id="c-2" value="DDOS" checked={ddos} />
                    <label class="checkbox-label" for="c-2">DDOS</label>
                </div>
                <div class="checkbox-wrapper">
                    <input type="checkbox" name="type" id="c-3" value="Port Scanning" checked={scanning} />
                    <label class="checkbox-label" for="c-3">Port Scanning</label>
                </div>
            </div>
        </form>
    );
}

export default Form;
