import React, { useState } from "react";
import './AutoB.css';

const AutoB = () => {
    const [auto, setAuto] = useState("vehicle");
    const [ownerType, setOwnerType] = useState("individual");
    const [subjects, setSubjects] = useState({
        english: true,
        maths: false,
    });
    const [selectedOption, setSelectedOption] = useState("");
    const [resume, setResume] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(auto, subjects, selectedOption, resume, ownerType);
        // Add your form submission logic here
    };

    const handleSubjectChange = (sub) => {
        setSubjects((prev) => ({
            ...prev,
            [sub]: !prev[sub],
        }));
    };

    const handleReset = () => {
        setAuto("vehicle");
        setOwnerType("individual");
        setSubjects({
            english: true,
            maths: false,
        });
        setSelectedOption("");
        setResume("");
    };

    return (
        <div className="auto-bb-form-container">
            <h1>Taksa komunale për regjistrim të automjetit për persona të tjerë</h1>
            <fieldset className="auto-bb-form-wrapper">
                <form onSubmit={handleSubmit}>
                    <div className="auto-bb-column-left">
                        <label htmlFor="auto">Zgjedh tipin e automjetit</label>
                        <div className="auto-bb-vehicle-options">
                            <input type="radio" name="autoType" value="vehicle" id="auto-bb-vehicle" checked={auto === "vehicle"} onChange={(e) => setAuto(e.target.value)} className="auto-bb-form-input" />
                            <label htmlFor="auto-bb-vehicle">Veturë</label>

                            <input type="radio" name="autoType" value="motorcycle" id="auto-bb-motorcycle" checked={auto === "motorcycle"} onChange={(e) => setAuto(e.target.value)} className="auto-bb-form-input" />
                            <label htmlFor="auto-bb-motorcycle">Motoçikletë</label>

                            <input type="radio" name="autoType" value="bus" id="auto-bb-bus" checked={auto === "bus"} onChange={(e) => setAuto(e.target.value)} className="auto-bb-form-input" />
                            <label htmlFor="auto-bb-bus">Autobus</label>
                        </div>
                    </div>
                    <div className="auto-bb-column-right">
                        <label htmlFor="ownerType">Zgjedh Kategorin e pronarit</label>
                        <div className="auto-bb-owner-options">
                            <input type="radio" name="ownerType" value="individual" id="auto-bb-individual" checked={ownerType === "individual"} onChange={(e) => setOwnerType(e.target.value)} className="auto-bb-form-input" />
                            <label htmlFor="auto-bb-individual">Individ</label>

                            <input type="radio" name="ownerType" value="business" id="auto-bb-business" checked={ownerType === "business"} onChange={(e) => setOwnerType(e.target.value)} className="auto-bb-form-input" />
                            <label htmlFor="auto-bb-business"> Biznes</label>

                            <input type="radio" name="ownerType" value="foreign" id="auto-bb-foreign" checked={ownerType === "foreign"} onChange={(e) => setOwnerType(e.target.value)} className="auto-bb-form-input" />
                            <label htmlFor="auto-bb-foreign">I/e Huaj</label>

                            <input type="radio" name="ownerType" value="institution" id="auto-bb-institution" checked={ownerType === "institution"} onChange={(e) => setOwnerType(e.target.value)} className="auto-bb-form-input" />
                            <label htmlFor="auto-bb-institution">Institucion/Agjenci shtetërore</label>
                        </div>

                        <label htmlFor="personalNumber">Numri personal:</label>
                        <input type="text" name="personalNumber" value={resume} onChange={(e) => setResume(e.target.value)} className="auto-bb-form-input" placeholder="Shkruaj ketu..." />

                        <label htmlFor="registrationType">Targat e automjetit:</label>
                        <select name="registrationType" id="auto-bb-registrationType" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} className="auto-bb-form-input">
                            <option value="" disabled>RKS</option>
                            <option value="KS">KS</option>
                            <option value="government">Government</option>
                            <option value="municipal">Municipal</option>
                            <option value="AME">AME</option>
                        </select>

                        <label htmlFor="municipality">Komuna:</label>
                        <select name="municipality" id="auto-bb-municipality" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} className="auto-bb-form-input">
                            <option value="" disabled>Select Municipality</option>
                            <option value="Prishtin">Prishtin</option>
                            <option value="Gjilan">Gjilan</option>
                            <option value="Gjakove">Gjakove</option>
                            <option value="Peje">Peje</option>
                            <option value="Ferizaj">Ferizaj</option>
                            <option value="Mitrovice">Mitrovice</option>
                            <option value="other">Other</option>
                        </select>

                        <div className="auto-bb-registration-options">
                            <input type="checkbox" name="registration" id="auto-bb-english" checked={subjects.english} onChange={() => handleSubjectChange("english")} className="auto-bb-form-input" />
                            <label htmlFor="auto-bb-english">Regjistrim i ri</label>

                            <input type="checkbox" name="registration" id="auto-bb-maths" checked={subjects.maths} onChange={() => handleSubjectChange("maths")} className="auto-bb-form-input" />
                            <label htmlFor="auto-bb-maths">Ndryshim pronari</label>
                        </div>

                        <label htmlFor="marka">Marka e automjetit:</label>
                        <input type="text" name="marka" value={resume} onChange={(e) => setResume(e.target.value)} className="auto-bb-form-input" placeholder="Shkruaj ketu..." />
                        <label htmlFor="engineCapacity">Kapaciteti/Fuqia Motorike (CCM): (CCM):</label>
                        <select name="engineCapacity" id="auto-bb-engineCapacity" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} className="auto-bb-form-input">
                            <option value="" disabled>Select an option</option>
                            <option value="upTo3500">Up to 3500cc</option>
                            <option value="above3500">Above 3500cc</option>
                        </select>
                    </div>
                    <div className="auto-bb-button-container">
                        <button type="submit" value="Submit" className="auto-bb-form-button">Shkarko urdherpagesen</button>
                    </div>
                </form>
            </fieldset>
        </div>
    );
};

export default AutoB;
