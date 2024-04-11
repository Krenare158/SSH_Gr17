import React, { useState } from "react";
import './FaturaPer.css';

function FaturaPer() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [nrPersonal, setNrPersonal] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(
            firstName,
            lastName,
            email,
            nrPersonal
        );
        // Add your form submission logic here
    };

    const handleReset = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setNrPersonal("");
    };

    return (
        <div className="New-form-container">
            <h1>Aplikimi per shtestat per lehonat</h1>
            <fieldset className="New-form-wrapper">
                <form onSubmit={handleSubmit}>
                    <div className="New-left-column">
                        <h4>Te dhenat e prindrit</h4>
                        <label htmlFor="firstname">First Name*</label>
                        <input type="text" name="firstname" id="firstname" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Enter First Name" required className="New-form-input" />

                        <label htmlFor="lastname">Last Name*</label>
                        <input type="text" name="lastname" id="lastname" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Enter Last Name" required className="New-form-input" />

                        <label htmlFor="nrpersonal">NrPersonal*</label>
                        <input type="text" name="nrpersonal" id="nrpersonal" value={nrPersonal} onChange={(e) => setNrPersonal(e.target.value)} placeholder="Enter NrPersonal" required className="New-form-input" />
                    </div>

                    <div className="New-button-container">
                        <button type="submit" value="Submit" className="New-form-button">Kerko</button>
                    </div>
                </form>
            </fieldset>
        </div>
    );
}

export default FaturaPer;
