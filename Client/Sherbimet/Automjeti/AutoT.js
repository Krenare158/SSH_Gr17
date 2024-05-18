import React, { useState } from "react";
import './AutoT.css';

const AutoT = () => {
    const [auto, setAuto] = useState("veture");
    const [subjects, setSubjects] = useState({
        english: true,
        maths: false,
    });
    const [selectedOption, setSelectedOption] = useState("");
    const [resume, setResume] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(auto, subjects, selectedOption, resume);
        // Add your form submission logic here
    };

    const handleSubjectChange = (sub) => {
        setSubjects((prev) => ({
            ...prev,
            [sub]: !prev[sub],
        }));
    };

    const handleReset = () => {
        setAuto("veture");
        setSubjects({
            english: true,
            maths: false,
        });
        setSelectedOption("");
        setResume("");
    };

    return (
        <div className="form-container">
            <h1>Taksa komunale për regjistrim të automjetit personal</h1>
            <fieldset className="form-wrapper">
                <form onSubmit={handleSubmit}>
                    <div className="column-left">
                        <label htmlFor="auto">Zgjedh tipin e automjetit</label>
                        <div className="auto-options">
                            <input type="radio" name="auto" value="veture" id="veture" checked={auto === "veture"} onChange={(e) => setAuto(e.target.value)} className="form-input" />
                            <label htmlFor="veture">Veture</label>

                            <input type="radio" name="auto" value="mot" id="mot" checked={auto === "mot"} onChange={(e) => setAuto(e.target.value)} className="form-input" />
                            <label htmlFor="mot">Motiçiklete</label>

                            <input type="radio" name="auto" value="bus" id="bus" checked={auto === "bus"} onChange={(e) => setAuto(e.target.value)} className="form-input" />
                            <label htmlFor="bus">Autobus</label>
                        </div>
                    </div>

                    <div className="column-right">
                        <div className="registration-options">
                            <input type="checkbox" name="registration" id="english" checked={subjects.english} onChange={() => handleSubjectChange("english")} className="form-input" />
                            <label htmlFor="english">Regjistrim i ri</label>

                            <input type="checkbox" name="registration" id="maths" checked={subjects.maths} onChange={() => handleSubjectChange("maths")} className="form-input" />
                            <label htmlFor="maths">Ndryshim pronari</label>
                        </div>

                        <label htmlFor="select">Komuna</label>
                        <select name="select" id="select" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} className="form-input">
                            <option value="" disabled>Zgjedh Komunen</option>
                            <option value="1">Prishtin</option>
                            <option value="2">Gjilan</option>
                            <option value="3">Gjakove</option>
                            <option value="4">Peje</option>
                            <option value="5">Ferizaj</option>
                            <option value="6">Mitrovice</option>
                            <option value="t">Te tjera</option>
                        </select>

                        <label htmlFor="file">Marka e automjetit:</label>
                        <input type="text" name="file" value={resume} onChange={(e) => setResume(e.target.value)} className="form-input" />

                        <label htmlFor="select">Kapaciteti/Fuqia Motorike(CCM):</label>
                        <select name="select" id="select" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} className="form-input">
                            <option value="" disabled>Zgjedh nje opsion</option>
                            <option value="1">Deri 3500cc (kubik)</option>
                            <option value="2">Mbi 3500cc (kubik)</option>
                        </select>
                    </div>
                    <div className="Button-container">
                        <button type="submit" value="Submit" className="Form-button">Shakrko urdherpagesen</button>
                    </div>
                </form>
            </fieldset>
        </div>
    );
};

export default AutoT;
