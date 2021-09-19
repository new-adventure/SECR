import react, { useState } from "react"
import Modal from "./modal";

function Form() {

    const [isLoading, updateIsLoading] = useState(false)

    const handleSubmission = (event) => {
        event.preventDefault();
        let form = event.target;
        const data = Object.fromEntries(new FormData(form).entries());
        console.log(data);

        // Formatting
        let url = data.url
        let type = []
        if (data.type0) { type.push(data.type0) }
        if (data.type1) { type.push(data.type1) }
        if (data.type2) { type.push(data.type2) }

        // Validation
        if (url.length === 0) {
            // Needs update
            window.alert("Fix!");
            return;
        }
        if (type.length === 0) {
            // Needs update
            window.alert("Fix!");
            return;
        }

        // Request
        let fetchUrl = `http://34.67.176.228/api/scan?url=${url}&types=${type.join(',')}`;
        updateIsLoading(true);
        console.log(fetchUrl);
    }

    return (
        <form onSubmit={(event) => { handleSubmission(event) }}>
            <div className="main-input">
                <input className="url" name="url" type="text" placeholder="Enter URL..." />
                <button className={isLoading ? "submit loading" : "submit"} type="submit">Check!</button>
            </div>
            <div className="checkbox-buttons">
                <div className="checkbox-wrapper">
                    <input type="checkbox" name="type0" checked id="c-1" value="SQL Injection" />
                    <label className="checkbox-label" for="c-1">SQL Injection</label>
                </div>
                <div className="checkbox-wrapper">
                    <input type="checkbox" name="type1" checked id="c-2" value="Common Vulnerability" />
                    <label className="checkbox-label" for="c-2">Common Vulnerability</label>
                </div>
                <div className="checkbox-wrapper">
                    <input type="checkbox" name="type2" checked id="c-3" value="Port Scanning" />
                    <label className="checkbox-label" for="c-3">Port Scanning</label>
                </div>
            </div>
        </form>
    );
}

export default Form;
