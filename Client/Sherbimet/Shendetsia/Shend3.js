import React, { useState } from "react";
import './Shend3.css';

function Shend3() {
    const [aprovoj, setAprovoj] = useState(false); // Assuming aprovoj is a state variable

    const handleSubmit = (e) => {
        // Add your form submission logic here
        e.preventDefault();
        console.log('Form submitted');
    };

    const handleCheckboxChange = (e) => {
        setAprovoj(e.target.checked);
    };

    const handleDownloadCertificate = () => {
        // Add logic to download certificate
        console.log('Certificate downloaded');
    };

    return (
        <div>
            <div className="electronic-passport-container">
                <fieldset className="electronic-passport-wrapper">
                    <form onSubmit={handleSubmit}>
                        <h3>Pasaporta Elektronike e Vaksinimit</h3>
                        <p className="para">
                            <b>Udhëzim:</b> <br/>Për të shkarkuar certifikatën digjitale të vaksinimit ju duhet të klikoni mbi "Shkarko certifikatën digjitale". Menjëherë pas klikimit, certifikata juaj digjitale do të shkarkohet në formatin PDF tek kompjuteri apo pajisja juaj mobile. Certifikatën e shkarkuar mund ta prezantoni në version elektronik tek autoritetet kompetente apo ta shtypni në formatin letër.
                        </p>
                        <div className="subject-options">
                            <input
                                type="checkbox"
                                name="aprovoj"
                                id="aprovoj"
                                checked={aprovoj}
                                onChange={handleCheckboxChange}
                                className="App-form-input"
                            />
                            <label htmlFor="aprovoj">Pjatohem</label>
                        </div>
                        <div className="button-container">
                            <button
                                type="button"
                                onClick={handleDownloadCertificate}
                                className="electronic-passport-button"
                            >
                                Shkarko certifikaten digjitale
                            </button>
                        </div>
                    </form>
                </fieldset>
            </div>
        </div>
    );console.log("Rendering Shend3 component...");
}

export default Shend3;
