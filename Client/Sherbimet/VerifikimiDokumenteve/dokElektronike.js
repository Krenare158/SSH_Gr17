import React, { useState } from "react";
import './dokElektronike.css';

const dokElektronike = () => {
    const [selectedOption, setSelectedOption] = useState("");
    const [ref, setRef] = useState("");
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(selectedOption, ref);
    };

    return (
        <div className="dokElektronike-form-container">
            <h2>Verifikimi i dokumenteve elektronike</h2>
            <fieldset className="dokElektronike-form-wrapper">
                <label htmlFor="reference">Numri serik</label>
                <div className="form-elements">
                    <input type="text" name="reference" value={ref} onChange={(e) => setRef(e.target.value)} className="dokElektronike-input" placeholder="€ 100.00" />
                    <button type="submit" onClick={handleSubmit} className="form-button">Verifiko</button>
                </div>
            </fieldset>
        </div>
    );
};

export default dokElektronike;
