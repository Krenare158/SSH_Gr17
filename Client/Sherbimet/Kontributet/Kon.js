import React, { useState } from "react";
import './Kon.css';
import photo2 from '../../../assets/photo2.png'; 

const Kon = () => {
    const [au, setAu] = useState("");
    const [approve, setApprove] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="kon-form-container">
            <img src={photo2} alt="Shifra e konsumatorit" className="kon-image"  />
            <h2>Pasqyra e kursimeve pensionale</h2>
            <fieldset className="kon-form-wrapper">
                <p className="kon-paragraph">Përmes kësaj faqeje mund ta shkarkoni pasqyrën e kursimeve pensionale (nëse jeni kontribues në Trust).
                    Pasqyra e shkarkuar nga eKosova është njëlloj sikurse pasqyra e cila merret tek zyrat e Trustit, dhe mund të përdoret për qëllime të ndryshme (psh. aplikim për vizë).
                    Palët e treta mund ta bëjnë verifikimi e pasqyrës duke skanuar kodin digjital (QR code) i cili gjindet në këndin e epërm të djathtë të faqes.</p>
            <div className="columee-left">
                <label htmlFor="au">Periudha e raportimit:</label>
                <div className="kon-options">
                    <input type="radio" name="au" value="viti" id="viti" checked={au === "viti"} onChange={(e) => setAu(e.target.value)} className="kon-form-input" />
                    <label htmlFor="viti">Viti i fundit</label>
                    
                    <input type="radio" name="au" value="fillim" id="fillim" checked={au === "fillim"} onChange={(e) => setAu(e.target.value)} className="kon-form-input" />
                    <label htmlFor="fillim">Nga fillimi</label>
                </div>
            </div>

                <div className="kon-checkbox-app">
                    <p className="kon-checkbox-note">Autorizoj Fondin e Kursimeve Pensionale të Kosovës që të përdorë numrin personal, numrin e telefonit dhe emailin tim për ngritje të cilësisë së shërbimit për kontribuuesit.</p>
                    <input type="checkbox" name="approve" id="approve" checked={approve} onChange={() => setApprove(!approve)} className="kon-checkbox-input" />
                </div>
                <button type="submit" onClick={handleSubmit} className="kon-button">Shkarko</button>
            </fieldset>
        </div>
    );
};

export default Kon;
