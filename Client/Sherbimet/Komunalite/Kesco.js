import React, { useState } from "react";
import './Kesco.css';
import './Modal.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Modal from './Modal';
import photo from '../../../assets/photo.png'; 
import photo1 from '../../../assets/photo1.png'; 

const Kesco = () => {
    const [selectedOption, setSelectedOption] = useState("");
    const [ref, setRef] = useState("");
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(selectedOption, ref);
    };

    const handleReset = () => {
        setSelectedOption("");
        setRef("");
    };

    const handleLinkClick = (e) => {
        e.preventDefault();
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
            <div className="kesco-form-container">
            <img src={photo1} alt="Shifra e konsumatorit" id="imgg"  />
                <h2>KESCO - Shiko dhe paguaj faturat e energjisë elektrike</h2>
                <fieldset className="kesco-form-wrapper">
                    <label htmlFor="reference">Kërkoni sipas shifrës të konsumatorit që gjendet brenda faturës</label>
                    <div className="form-elements">
                        <select name="region" id="region" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} className="input">
                            <option value="">Zgjidhni një opsion</option>
                            <option value="Region1">Region1</option>
                            <option value="Region2">Region2</option>
                            <option value="Region3">Region3</option>
                        </select>

                        <input type="text" name="reference" value={ref} onChange={(e) => setRef(e.target.value)} className="kesco-input" placeholder="Shkruaj këtu" />
                        
                        <button type="submit" onClick={handleSubmit} className="form-button">Kërko</button>
                    </div>
                    <div className="vem">
                        <h4>Vëmendje</h4>
                        <div className="komunali-card-content">
                            <FontAwesomeIcon icon={faArrowRight} className="komunali-card-icon" />
                            <p style={{ color: '#333' }} className='linkla'>Përditësimi i shënimeve mund të merr kohë deri në 24 orë.</p>
                        </div>
                        <div className="komunali-card-content">
                            <FontAwesomeIcon icon={faArrowRight} className="komunali-card-icon" />
                            <Link to="#" onClick={handleLinkClick} style={{ color: 'rgb(138, 13, 13)' }} className='linkla'>Ku mund ta gjej shifrën e konsumatorit?</Link>
                        </div>
                    </div>
                </fieldset>
                <Modal show={showModal} onClose={handleCloseModal}>
                    <img src={photo} alt="Shifra e konsumatorit" style={{ width: '100%' }} />
                </Modal>
            </div>
    );
};

export default Kesco;
