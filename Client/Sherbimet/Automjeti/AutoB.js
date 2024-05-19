import React, { useState } from "react";
import './AutoB.css';

const AutoB = () => {
    const [auto, setAuto] = useState("veture");
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
    };

    const handleSubjectChange = (sub) => {
        setSubjects((prev) => ({
            ...prev,
            [sub]: !prev[sub],
        }));
    };

    const handleReset = () => {
        setAuto("veture");
        setOwnerType("individual"); 
        setSubjects({
            english: true,
            maths: false,
        });
        setSelectedOption("");
        setResume("");
    };

    return (
        <div className="auto-b-form-container">
            <h1>Taksa komunale për regjistrim të automjetit për persona të tjerë</h1>
            <fieldset className="auto-b-form-wrapper">
                <form onSubmit={handleSubmit}>
                    <div className="auto-b-column-left">
                        <label htmlFor="auto">Zgjedh tipin e automjetit</label>
                        <div className="auto-b-auto-options">
                            <input type="radio" name="autoType" value="veture" id="auto-b-veture" checked={auto === "veture"} onChange={(e) => setAuto(e.target.value)} className="auto-b-form-input" />
                            <label htmlFor="auto-b-veture">Veture</label>

                            <input type="radio" name="autoType" value="mot" id="auto-b-mot" checked={auto === "mot"} onChange={(e) => setAuto(e.target.value)} className="auto-b-form-input" />
                            <label htmlFor="auto-b-mot">Motiçiklete</label>

                            <input type="radio" name="autoType" value="bus" id="auto-b-bus" checked={auto === "bus"} onChange={(e) => setAuto(e.target.value)} className="auto-b-form-input" />
                            <label htmlFor="auto-b-bus">Autobus</label>
                        </div>
                    </div>
                    <div className="auto-b-column-right">
                        <label htmlFor="ownerType">Zgjedh Kategorin e pronarit</label>
                        <div className="auto-b-owner-options">
                            <input type="radio" name="ownerType" value="individual" id="auto-b-individual" checked={ownerType === "individual"} onChange={(e) => setOwnerType(e.target.value)} className="auto-b-form-input" />
                            <label htmlFor="auto-b-individual">Individ</label>

                            <input type="radio" name="ownerType" value="business" id="auto-b-business" checked={ownerType === "business"} onChange={(e) => setOwnerType(e.target.value)} className="auto-b-form-input" />
                            <label htmlFor="auto-b-business">Biznes</label>

                            <input type="radio" name="ownerType" value="foreign" id="auto-b-foreign" checked={ownerType === "foreign"} onChange={(e) => setOwnerType(e.target.value)} className="auto-b-form-input" />
                            <label htmlFor="auto-b-foreign">I/E huaj</label>

                            <input type="radio" name="ownerType" value="institution" id="auto-b-institution" checked={ownerType === "institution"} onChange={(e) => setOwnerType(e.target.value)} className="auto-b-form-input" />
                            <label htmlFor="auto-b-institution">Institucion/Agjenci shteteror</label>
                        </div>

                        <label htmlFor="personalNumber">Numri personal:</label>
                        <input type="text" name="personalNumber" value={resume} onChange={(e) => setResume(e.target.value)} className="auto-b-form-input" />

                        <label htmlFor="registrationType">Targat e Automjetit</label>
                        <select name="registrationType" id="auto-b-registrationType" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} className="auto-b-form-input">
                            <option value="" disabled>RKS</option>
                            <option value="KS">KS</option>
                            <option value="government">Qeveritare</option>
                            <option value="municipal">Komunale</option>
                            <option value="AME">AME</option>
                        </select>

                        <label htmlFor="municipality">Komuna</label>
                        <select name="municipality" id="auto-b-municipality" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} className="auto-b-form-input">
                            <option value="" disabled>Zgjedh Komunen</option>
                            <option value="Prishtin">Prishtin</option>
                            <option value="Gjilan">Gjilan</option>
                            <option value="Gjakove">Gjakove</option>
                            <option value="Peje">Peje</option>
                            <option value="Ferizaj">Ferizaj</option>
                            <option value="Mitrovice">Mitrovice</option>
                            <option value="other">Te tjera</option>
                        </select>

                        <div className="auto-b-registration-options">
                            <input type="checkbox" name="registration" id="auto-b-english" checked={subjects.english} onChange={() => handleSubjectChange("english")} className="auto-b-form-input" />
                            <label htmlFor="auto-b-english">Regjistrim i ri</label>

                            <input type="checkbox" name="registration" id="auto-b-maths" checked={subjects.maths} onChange={() => handleSubjectChange("maths")} className="auto-b-form-input" />
                            <label htmlFor="auto-b-maths">Ndryshim pronari</label>
                        </div>

                        <label htmlFor="engineCapacity">Kapaciteti/Fuqia Motorike(CCM):</label>
                        <select name="engineCapacity" id="auto-b-engineCapacity" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} className="auto-b-form-input">
                            <option value="" disabled>Zgjedh nje opsion</option>
                            <option value="upTo3500">Deri 3500cc (kubik)</option>
                            <option value="above3500">Mbi 3500cc (kubik)</option>
                        </select>
                    </div>
                    <div className="auto-b-button-container">
                        <button type="submit" value="Submit" className="auto-b-form-button">Shakrko urdherpagesen</button>
                    </div>
                </form>
            </fieldset>
        </div>
    );
};

export default AutoB;
