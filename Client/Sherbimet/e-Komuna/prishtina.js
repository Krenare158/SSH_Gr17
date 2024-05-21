import React, { useState } from "react";
import './prishtina.css';

const prishtina = () => {
    const [selectedOption, setSelectedOption] = useState("");
    const [ref, setRef] = useState("");
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(selectedOption, ref);
    };

    return (
        <div className="prishtina-form-container">
            <p>Regjistri i procedurave administrative për Komunën e Prizrenit është një vend i vetëm për
                të gjetur informacionin përkatës në lidhje me procedurat administrative të lëshuara nga
                autoritetet komunale për bizneset dhe qytetarët.</p>
            <fieldset className="prishtina-form-wrapper">
                <label htmlFor="reference">Kerko drejtorine: </label>
                <div className="form-elements">
                    <input type="text" name="reference" value={ref} onChange={(e) => setRef(e.target.value)} className="prishtina-input" placeholder="Shkruaj ketu..." />
                    <button type="submit" onClick={handleSubmit} className="form-button">Kerko</button>
                </div>
            </fieldset>
        </div>
    );
};

export default prishtina;
