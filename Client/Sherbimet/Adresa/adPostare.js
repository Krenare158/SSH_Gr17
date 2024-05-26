import React, { useState } from "react";
import './adPostare.css';

const adPostare = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [nrpersonal, setNrPersonal] = useState("");
    const [contact, setContact] = useState("");
    const [adresa, setAdresa] = useState("");
    const [nrxhiro, setNrXhiro] = useState ("");
    const [gender, setGender] = useState("male");
    const [True,setTrue] = useState("");
    const [aprovoj, setAprovoj] = useState("");
    const [subjects, setSubjects] = useState({
        english: true,
        maths: false,
        physics: false,
    });
    const [resume, setResume] = useState("");
    const [url, setUrl] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    const [about, setAbout] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(
            firstName,
            lastName,
            email,
            nrpersonal,
            contact,
            adresa,
            nrxhiro,
            gender,
            True,
            aprovoj,
            selectedOption,
            subjects,
            resume,
            url,
            about
        );
        // Add your form submission logic here
    };

    const handleReset = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setNrPersonal("");
        setContact("");
        setAdresa("");
        setNrXhiro("");
        setGender("male");
        setTrue("");
        setAprovoj("");
        setSubjects({
            english: true,
            maths: false,
            physics: false,
        });
        setResume("");
        setUrl("");
        setSelectedOption("");
        setAbout("");
    };

    return (
        <div className="Form-container">
            <h1>Deklarimi i adreses postare</h1>
            <fieldset className="Form-wrapper">
                <form onSubmit={handleSubmit}>
                    <div className="Left-column">
                        <h4>Adresa postare e banimit</h4>
                        <label htmlFor="firstname">Komuna</label>
                        <input type="text" name="firstname" id="firstname" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Enter First Name" required className="Form-input" />

                        <label htmlFor="lastname">Vendbanimi:</label>
                        <input type="text" name="lastname" id="lastname" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Enter Last Name" required className="Form-input" />

                        <label htmlFor="nrpersonal">Rruga:</label>
                        <input type="text" name="nrpersonal" id="nrpersonal" value={nrpersonal} onChange={(e) => setNrPersonal(e.target.value)} placeholder="Enter NrPersonal" required className="Form-input" />

                        <label htmlFor="email">Numri i hyrjes:</label>
                        <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" required className="Form-input" />

                        <label htmlFor="tel">Kodi postar:</label>
                        <input type="tel" name="contact" id="contact" value={contact} onChange={(e) => setContact(e.target.value)} placeholder="Enter Mobile number" required className="Form-input" />
                    </div>

                  <div className="Right-column">
                       {/*   <label>Your best Subject</label>
                        <div className="subject-options">
                            <input type="checkbox" name="lang" id="english" checked={subjects.english} onChange={() => handleSubjectChange("english")} className="Form-input" />
                            <label htmlFor="english">English</label>

                            <input type="checkbox" name="lang" id="maths" checked={subjects.maths} onChange={() => handleSubjectChange("maths")} className="Form-input" />
                            <label htmlFor="maths">Maths</label>

                            <input type="checkbox" name="lang" id="physics" checked={subjects.physics} onChange={() => handleSubjectChange("physics")} className="Form-input" />
                            <label htmlFor="physics">Physics</label>
                        </div>*/} 

                        <label htmlFor="select">Lloji i objektit:</label>
                        <select name="select" id="select" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} className="Form-input">
                                <option value="1">Hyrje e vecante</option>
                                <option value="2">Objekt shumekatesh</option>
                        </select>

                      {/* <label htmlFor="about">About</label>
                        <textarea name="about" id="about" cols="30" rows="10" onChange={(e) => setAbout(e.target.value)} placeholder="About yourself" required className="Form-textarea"></textarea>
                    */} 
                    </div> 
                    

                    <div className="Button-container">
                        <button type="submit" value="Submit" className="Form-button">Ruaj</button>
                    </div>
                </form>
            </fieldset>
        </div>
    );
    };
export default adPostare;
