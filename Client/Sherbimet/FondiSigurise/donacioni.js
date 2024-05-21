import React, { useState } from "react";
import './donacioni.css';

const donacioni = () => {
    const [selectedOption, setSelectedOption] = useState("");
    const [ref, setRef] = useState("");
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(selectedOption, ref);
    };

    return (
        <div className="donacioni-form-container">
            <h2>Donacion permes pageses elektronike me banka komerciale</h2>
            <fieldset className="donacioni-form-wrapper">
                <label htmlFor="reference">Shuma e donacionit</label>
                <div className="form-elements">
                    <input type="text" name="reference" value={ref} onChange={(e) => setRef(e.target.value)} className="donacioni-input" placeholder="Shkruaj këtu" />
                    <button type="submit" onClick={handleSubmit} className="form-button">Dhuro</button>
                </div>
                <div className="attention-section">
                    <h5>Shënim:</h5>
                    <p>transaksioni do te jete pa asnje kosto per ju</p>
                </div>
            </fieldset>
        </div>
    );
};

export default donacioni;
