import React, { useState } from "react";
import './Vula.css';

const Vula = () => {
    const [personalNumber, setPersonalNumber] = useState("");
    const [fullName, setFullName] = useState("");
    const [city, setCity] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    const [station, setStation] = useState("");
    const [reason, setReason] = useState("");
    const [dek, setDek] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(personalNumber, fullName, city, phone, email, selectedOption, station, reason,dek);
    };

    return (
        <div className="form-container">
            <h1>Vula apostile dhe legalizuese ne MPJD</h1>
            <fieldset className="form-wrapper">
                <form onSubmit={handleSubmit}>
                    <div className="column-left">
                        <h3>Te dhenat tuaja</h3>
                        <label htmlFor="fullName">Emri</label>
                        <input type="text" name="fullName"  value={fullName} onChange={(e) => setFullName(e.target.value)}  className="input"  />

                        <label htmlFor="city">Mbiemri</label>
                        <input type="text" name="city"  value={city} onChange={(e) => setCity(e.target.value)} className="input"  />

                        <label htmlFor="email">Email adresa</label>
                        <input type="email"  name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input"  />

                        <label htmlFor="personalNumber">Numri personal</label>
                        <input type="text" name="personalNumber" value={personalNumber} onChange={(e) => setPersonalNumber(e.target.value)} className="input"  />
                    </div>


                    <div className="button-container">
                    <button type="reset" value="reset" onClick={handleReset} className="Form-button">Anulo</button>
                        <button type="submit" value="Submit" className="button">Rezervo</button>
                    </div>
                </form>
            </fieldset>
        </div>
    );
};

export default Vula;
