import { useState } from 'react';

function Form() {
    let [url, setUrl] = useState('localhost:8080');
    console.log(url);
    return (
        <form>
            <div class="main-input">
                <input class="url" type="text" placeholder="Enter URL..." onChange={i => setUrl(i.target.value)} />
                <input class="submit" type="submit" value="Check!" />
            </div>
            <div class="checkbox-buttons">
                <div class="checkbox-wrapper">
                    <input type="checkbox" name="type" id="c-1" value="SQL Injection" />
                    <label class="checkbox-label" for="c-1">SQL Injection</label>
                </div>
                <div class="checkbox-wrapper">
                    <input type="checkbox" name="type" id="c-2" value="DDOS" />
                    <label class="checkbox-label" for="c-2">DDOS</label>
                </div>
                <div class="checkbox-wrapper">
                    <input type="checkbox" name="type" id="c-3" value="Port Scanning" />
                    <label class="checkbox-label" for="c-3">Port Scanning</label>
                </div>
            </div>
        </form>
    );
}

export default Form;
