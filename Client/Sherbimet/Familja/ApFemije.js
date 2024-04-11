import React, { useState } from "react";
import './ApFemije.css';

function ApFemije() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [nrpersonal, setNrPersonal] = useState("");
    const [contact, setContact] = useState("");
    const [adresa, setAdresa] = useState("");
    const [nrxhiro, setNrXhiro] = useState("");
    const [gender, setGender] = useState("male");
    const [aprovoj, setAprovoj] = useState("");
    const [che, setChe] = useState("");
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
            aprovoj,
            che,
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
        setAprovoj("");
        setChe("");
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
        <div className="FormContainer">
            <h1>Aplikimi per shtestat per femije</h1>
            <fieldset className="FormWrapper">
                <form onSubmit={handleSubmit}>
                    <div className="LeftColumn">
                        <h4>Te dhenat e prindrit</h4>
                        <label htmlFor="firstname">First Name*</label>
                        <input type="text" name="firstname" id="firstname" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Enter First Name" required className="FormInput" />

                        <label htmlFor="lastname">Last Name*</label>
                        <input type="text" name="lastname" id="lastname" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Enter Last Name" required className="FormInput" />

                        <label htmlFor="nrpersonal">NrPersonal*</label>
                        <input type="text" name="nrpersonal" id="nrpersonal" value={nrpersonal} onChange={(e) => setNrPersonal(e.target.value)} placeholder="Enter NrPersonal" required className="FormInput" />

                        <label htmlFor="email">Enter Email*</label>
                        <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" required className="FormInput" />

                        <label htmlFor="tel">Contact*</label>
                        <input type="tel" name="contact" id="contact" value={contact} onChange={(e) => setContact(e.target.value)} placeholder="Enter Mobile number" required className="FormInput" />

                        <label htmlFor="adresa">Addresa*</label>
                        <input type="text" name="adresa" id="adresa" value={adresa} onChange={(e) => setAdresa(e.target.value)} placeholder="Enter Address" required className="FormInput" />

                        <label htmlFor="nrxhiro">NrXhirollogaris*</label>
                        <input type="text" name="nrxhiro" id="nrxhiro" value={nrxhiro} onChange={(e) => setNrXhiro(e.target.value)} placeholder="Enter NrXhirollogaris" required className="FormInput" />
                        <p className="FormPara">Vemendje. Xhirollogaria banakare duhet te jete ne emer te aplikuesit.Te gjitha aplikimet 
                            qe behen me ndonje xhirollogari tjeter, do te refuzohen.
                        </p>

                        <label htmlFor="gender">Gender*</label>
                        <div className="FormGenderOptions">
                            <input type="radio" name="gender" value="male" id="male" checked={gender === "male"} onChange={(e) => setGender(e.target.value)} className="FormInput" />
                            <label htmlFor="male">Male</label>

                            <input type="radio" name="gender" value="female" id="female" checked={gender === "female"} onChange={(e) => setGender(e.target.value)} className="FormInput" />
                            <label htmlFor="female">Female</label>

                            <input type="radio" name="gender" value="other" id="other" checked={gender === "other"} onChange={(e) => setGender(e.target.value)} className="FormInput" />
                            <label htmlFor="other">Other</label>
                        </div>
                        
                    </div>

                    <div className="RightColumn">
                        {/* Right column inputs */}
                        <label htmlFor="file">NrPersonal i femijes*</label>
                        <input type="text" name="file" id="file" value={resume} onChange={(e) => setResume(e.target.value)} placeholder="Enter the data" required className="FormInput" />
                        <div className="FormCheckboxContainer">
                            <input type="checkbox" name="che" value="che" id="che" checked={che === "che"} onChange={(e) => setChe(e.target.value)} className="FormCheckbox" />
                            <label htmlFor="che" className="che">Kujdestar/e ligjor/e?</label>
                        </div>
                        <p className="FormPara">Vëmendje: Opcioni Kujdestar Ligjor zgjidhet në rastet kur sipas legjislacionit në fuqi personi caktohet Kujdestari Ligjor, si p.sh. me rastin e vdekjes së prindit, humbja e zotësisë së veprimit të prindit etj.</p>
                        <label htmlFor="select">Select your choice</label>
                        <select name="select" id="select" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} className="FormInput">
                            <option value="" disabled>Select your Nationality</option>
                            <option value="1">Shqiptar</option>
                            <option value="2">Serb</option>
                            <option value="3">Turk</option>
                            <option value="4">Boshnjak</option>
                            <option value="5">Rom</option>
                            <option value="6">Ashkali</option>
                            <option value="t">Te tjera</option>
                        </select>
                    </div>
                    <p className="FormPara">Deklaroj se jam lehone dhe se plotesoj kritert per perfitim nga masa 3.5 e Pakos se Ringjallje Ekonomike
                        sipas vendimit te Ministrise se Finacave, Punes dhe Transfereve 54/2021 te dates 0.8.09.2021</p>
                    <div className="FormCheckboxContainer">
                        <input type="checkbox" name="aprovoj" value="aprovoj" id="aprovoj" checked={aprovoj === "aprovoj"} onChange={(e) => setAprovoj(e.target.value)} className="FormCheckbox" />
                        <label htmlFor="aprovoj" className="ap">Aprovoj</label>
                    </div>

                    <div className="ButtonContainer">
                        <button type="reset" value="reset" onClick={handleReset} className="FormButton">Reset</button>
                        <button type="submit" value="Submit" className="FormButton">Submit</button>
                    </div>
                </form>
            </fieldset>
        </div>
    );
}

export default ApFemije;
