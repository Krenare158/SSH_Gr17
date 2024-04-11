import React, { useState } from "react";
import './Shend1.css';

function Shend1() {
    const [selectedOption1, setSelectedOption1] = useState("");
    const [selectedOption2, setSelectedOption2] = useState("");
    const [selectedOption3, setSelectedOption3] = useState("");
    const [aprovoj, setAprovoj] = useState(false); // Define aprovoj state

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(selectedOption1, selectedOption2, selectedOption3);
        // Add your form submission logic here
    };

    return (
        <div>
            <h3>Kërkesë për përzgjedhjen e mjekut familjar për persona tjerë</h3>
            <div className="Vem">
                <h3 className="vem">VËMENDJE</h3>
                <p className="para"> - Ju lutemi që të përzgjedhni QMF-në më të afërt me adresën e personit për të cilin po aplikoni. Adresa e cila do të merret për bazë është ajo që personi që po aplikoni e ka deklaruar në zyrat e Gjendjes Civile pranë komunës. 
                    Në rast se personi që po aplikoni ka ndryshuar vendbanim apo adresë, atëherë ai/ajo duhet të drejtohet 
                    në zyrën e Gjendjes Civile pranë komunës për të përditësuar të dhënat.<br/>
                    - Në rast se përzgjedhni QMF-në e cila nuk është QMF më e afërt me adresën e personit për të cilin po aplikoni, atëherë aplikimi mund të rezultojë me refuzim dhe rrjedhimisht kërkesa duhet të realizohet nga fillimi.
                   <br/> - Në rast se tek anëtarët e familjes nuk shfaqen të gjithë anëtarët, atëherë ju lutemi që të drejtoheni në zyrën e Gjendjes Civile pranë komunës tuaj për të përditësuar të dhënat apo mund të vazhdoni duke zgjedhur opsionin "Tjetër" tek lloji i kërkesës dhe të vendosni numrin personal të anëtarit të familjes.</p>
            </div>
            <div className="App-form-container">
                <fieldset className="App-form-wrapper">
                    <form onSubmit={handleSubmit}>
                        <div className="left-column">
                            <label htmlFor="select1">Lloji i Kerkeses</label>
                            <select name="select1" id="select1" value={selectedOption1} onChange={(e) => setSelectedOption1(e.target.value)} className="App-form-input">
                                <option value="" disabled>Aplikim per anetaret e familjes</option>
                                <option value="1">Prindi</option>
                                <option value="t">Te tjera</option>
                            </select>
                            <label htmlFor="select2">Institucioni shendetesor</label>
                            <select name="select2" id="select2" value={selectedOption2} onChange={(e) => setSelectedOption2(e.target.value)} className="App-form-input">
                                <option value="" disabled>Zgjedh nje opsion</option>
                                <option value="1">Prindi</option>
                                <option value="t">Te tjera</option>
                            </select>
                            <p className="para">Të dhënat mbi anëtarët tuaj të familjes nuk kanë arritur të azhurohen nga Gjendja Civile.</p>
                            <label htmlFor="select3">Mjeku Familjar</label>
                            <select name="select3" id="select3" value={selectedOption3} onChange={(e) => setSelectedOption3(e.target.value)} className="App-form-input">
                                <option value="" disabled>Zgjedh nje opsion</option>
                                <option value="1">Prindi</option>
                                <option value="t">Te tjera</option>
                            </select>

                            <p className="para">Pajtohem dhe jap leje që Ministria e Shëndetësisë t'i shfrytëzojnë të dhënat e mia për qëllime të brendshme, në përputhshmëri me ligjet dhe rregulloret e Republikës së Kosovës. Sipas Kodit Penal të Republikës së Kosovës, Neni 391 – Deklarimi i rremë nën betim "1. 
                            Kushdo që pasi të ketë dhënë betimin pranë organit kompetent për të administruar dëshmitë e dhëna nën betim ose betimet dhe pastaj nënshkruan dëshminë nën betim ose deklaron diç që nuk beson se është e vërtetë ose me dijeni fsheh ose shmang nga deklarimi ndonjë çështje relevante për procedurën, dënohet me gjobë ose me burgim deri në tre (3) vjet."</p>
                            <div className="subject-options">
                                <input type="checkbox" name="aprovoj" value="aprovoj" id="aprovoj" checked={aprovoj} onChange={(e) => setAprovoj(e.target.checked)} className="App-form-input" />
                                <label htmlFor="aprovoj">Pjatohem</label>
                            </div>

                        </div>
                        <div className="button-container">
                            <button type="submit" value="Submit" className="App-form-button">Regjistro kerkesen</button>
                        </div>
                    </form>
                </fieldset>
            </div>
        </div>
    );console.log("Rendering Shend1 component...");

}

export default Shend1;
