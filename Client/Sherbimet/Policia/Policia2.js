import React, { useState } from "react";
import './Policia2.css';

const Policia2 = () => {
    const [ref, setRef] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(ref);
    };
    const handleReset = () => {
        setRef("")
    };
    return (
        <div className="Pol-p-form-container">
            <h2>Kërkimi i gjobave individuale</h2>
            <fieldset className="Pol-p-form-wrapper">
                        <label htmlFor="reference">Referenca</label>
                        <input type="text" name="referenc" value={ref} onChange={(e) => setRef(e.target.value)} className="Pol-p-input" placeholder="Shkruaj këtu" />
                    <div className="ButtonP">
                        <button type="submit" value="Submit" className="Form-button">Kërko</button>
                    </div>
            </fieldset>
        </div>
    );
};

export default Policia2;