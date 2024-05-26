import React, { useState } from "react";
import './Deklarimi.css';

const Deklarimi = () => {
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

    return (
        <div className="form-container">
            <h1>Deklarimi per anetaresim ne sindikate</h1>
            <fieldset className="form-wrapper">
                <form onSubmit={handleSubmit}>

                    <label htmlFor="select">Sindikata:</label>
                        <select name="select" id="select" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} className="form-input">
                            <option value="" disabled>Zgjedhni nje opsion</option>
                            <option value="1">FSSHK</option>
                            <option value="2">SBASHK</option>
                            <option value="3">SHSKPMM</option>
                            <option value="4">SHSPATK</option>
                            <option value="5">SHSPKA</option>
                        </select>

                    <label htmlFor="auto">Deklarimi:</label>
                    <div className="column-right">
                        <div className="registration-options">
                            <input type="checkbox" name="registration" id="english" checked={subjects.english} onChange={() => handleSubjectChange("english")} className="form-input" />
                            <label htmlFor="english">Konfirmoj anetaresimin ne sindikate</label>

                            <input type="checkbox" name="registration" id="maths" checked={subjects.maths} onChange={() => handleSubjectChange("maths")} className="form-input" />
                            <label htmlFor="maths">Konfirmoj c'anetaresimin nga sindikata</label>
                        </div>
                    </div>
                    <div className="Button-container">
                        <button type="submit" value="Submit" className="Form-button">Konfirmo</button>
                    </div>
                </form>
            </fieldset>
        </div>
    );
};

export default Deklarimi;
