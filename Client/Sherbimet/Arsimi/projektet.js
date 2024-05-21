import React, { useState } from "react";
import './projektet.css';

const projektet = () => {
    const [selectedOption, setSelectedOption] = useState("");
    const [ref, setRef] = useState("");
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(selectedOption, ref);
    };

    return (
        <div className="projektet-form-container">
            <h2>Universiteti i Prishtinës "Hasan Prishtina" - Të hyrat nga projektet</h2>
            <fieldset className="projektet-form-wrapper">
                <label htmlFor="reference">Shuma e donacionit</label>
                <div className="form-elements">
                    <input type="text" name="reference" value={ref} onChange={(e) => setRef(e.target.value)} className="projektet-input" placeholder="€ 100.00" />
                    <button type="submit" onClick={handleSubmit} className="form-button">Paguaj</button>
                </div>
            </fieldset>
        </div>
    );
};

export default projektet;
