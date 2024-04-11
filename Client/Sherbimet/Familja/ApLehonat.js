import React, { useState } from "react";
import './ApLegonat.css';

function ApLehonat() {
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

    const handleSubjectChange = (sub) => {
        setSubjects((prev) => ({
            ...prev,
            [sub]: !prev[sub],
        }));
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
            <h1>Application for Lehonat Benefits</h1>
            <fieldset className="Form-wrapper">
                <form onSubmit={handleSubmit}>
                    <div className="Left-column">
                        <h4>Parent's Information</h4>
                        <label htmlFor="firstname">First Name*</label>
                        <input type="text" name="firstname" id="firstname" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Enter First Name" required className="Form-input" />

                        <label htmlFor="lastname">Last Name*</label>
                        <input type="text" name="lastname" id="lastname" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Enter Last Name" required className="Form-input" />

                        <label htmlFor="nrpersonal">NrPersonal*</label>
                        <input type="text" name="nrpersonal" id="nrpersonal" value={nrpersonal} onChange={(e) => setNrPersonal(e.target.value)} placeholder="Enter NrPersonal" required className="Form-input" />

                        <label htmlFor="email">Enter Email*</label>
                        <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" required className="Form-input" />

                        <label htmlFor="tel">Contact*</label>
                        <input type="tel" name="contact" id="contact" value={contact} onChange={(e) => setContact(e.target.value)} placeholder="Enter Mobile number" required className="Form-input" />

                        <label htmlFor="addresa">Addresa*</label>
                        <input type="text" name="adresa" id="adresa" value={adresa} onChange={(e) => setAdresa(e.target.value)} placeholder="Enter Address" required className="Form-input" />

                        <label htmlFor="nrxhiro">NrXhirollogaris*</label>
                        <input type="text" name="nrxhiro" id="nrxhiro" value={contact} onChange={(e) => setNrXhiro(e.target.value)} placeholder="Enter NrXhirollogaris" required className="Form-input" />
                        <p className="Note">Attention. The bank account must be in the applicant's name. All applications made with another bank account will be rejected.</p>

                        <label htmlFor="gender">Gender*</label>
                        <div className="Gender-options">
                            <input type="radio" name="gender" value="male" id="male" checked={gender === "male"} onChange={(e) => setGender(e.target.value)} className="Form-input" />
                            <label htmlFor="male">Male</label>

                            <input type="radio" name="gender" value="female" id="female" checked={gender === "female"} onChange={(e) => setGender(e.target.value)} className="Form-input" />
                            <label htmlFor="female">Female</label>

                            <input type="radio" name="gender" value="other" id="other" checked={gender === "other"} onChange={(e) => setGender(e.target.value)} className="Form-input" />
                            <label htmlFor="other">Other</label>
                        </div>

                        <label htmlFor="True" className="True">Have you been employed in the last 12 months?</label>
                        <div className="True-options">
                            <input type="radio" name="True" value="Yes" id="Yes" checked={True === "Yes"} onChange={(e) => setTrue(e.target.value)} className="Form-input" />
                            <label htmlFor="Yes">Yes</label>

                            <input type="radio" name="True" value="No" id="No" checked={True === "No"} onChange={(e) => setTrue(e.target.value)} className="Form-input" />
                            <label htmlFor="No">No</label>
                        </div>
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

                        <h4>Të dhënat e foshnjës</h4>

                        <label htmlFor="file">NrPersonal i foshnjes*</label>
                        <input type="tex" name="file" id="file" onChange={(e) => setResume(e.target.files[0])} placeholder="Enter the data" required className="Form-input" />

                        <label htmlFor="select">Select your choice</label>
                        <select name="select" id="select" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} className="Form-input">
                            <option value="" disabled>Select your Nacinality</option>
                                <option value="1">Shqiptar</option>
                                <option value="2">Serb</option>
                                <option value="3">Turk</option>
                                <option value="4">Boshnjak</option>
                                <option value="5">Rom</option>
                                <option value="6">Ashkali</option>
                                <option value="t">Te tjera</option>
                        </select>

                      {/* <label htmlFor="about">About</label>
                        <textarea name="about" id="about" cols="30" rows="10" onChange={(e) => setAbout(e.target.value)} placeholder="About yourself" required className="Form-textarea"></textarea>
                    */} 
                    </div> 
                    
                    <p className="Note">I declare that I am a bride and meet the criteria for benefits from Package 3.5 of the Economic Revival Package according to the decision of the Ministry of Finance, Labor and Transfers 54/2021 dated 0.8.09.2021</p>
                    <div className="Subject-options">
                    <input type="checkbox" name="aprovoj" value="aprovoj" id="aprovoj" checked={aprovoj === "aprovoj"} onChange={(e) => setAprovoj(e.target.value)} className="Form-input" />
                        <label htmlFor="aprovoj">Aprovoj</label>
                        </div>

                    <div className="Button-container">
                        <button type="reset" value="reset" onClick={handleReset} className="Form-button">Reset</button>
                        <button type="submit" value="Submit" className="Form-button">Submit</button>
                    </div>
                </form>
            </fieldset>
        </div>
    );
    };
export default ApLehonat;
