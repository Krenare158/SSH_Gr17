import React, { useState } from "react";
import './verifikimi.css';

const verifikimi = () => {
    const [selectedOption, setSelectedOption] = useState("");
    const [ref, setRef] = useState("");
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(selectedOption, ref);
    };

    return (
        <div className="verifikimi-form-container">
            <h2>Verifiko Banderolat nga Agjencia e Kosovës për Produkte dhe Pajisje Medicinale</h2>
            <fieldset className="verifikimi-form-wrapper">
                <label htmlFor="reference">Kerko sipas numrit serik te banderoles</label>
                <div className="form-elements">
                    <input type="text" name="reference" value={ref} onChange={(e) => setRef(e.target.value)} className="verifikimi-input" placeholder="Shkruaj ketu..." />
                    <button type="submit" onClick={handleSubmit} className="form-button">Kerko</button>
                </div>
            </fieldset>
        </div>
    );
};

export default verifikimi;
