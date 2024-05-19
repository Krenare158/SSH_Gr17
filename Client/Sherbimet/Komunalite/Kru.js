import React, { useState } from "react";
import './Kru.css';
import './Modal.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Modal from './Modal';
import photo3 from '../../../assets/photo3.png'; 

const Kru = () => {
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
        <div className="kru-form-container">
            <h2>KRU Hidrodrini - Shiko dhe paguaj faturat e ujit</h2>
            <fieldset className="kru-form-wrapper">
                <label htmlFor="reference">Numri i konsumatorit</label>
                <div className="form-elements">
                    <input type="text" name="reference" value={ref} onChange={(e) => setRef(e.target.value)} className="kru-input" placeholder="Shkruaj këtu" />
                    <button type="submit" onClick={handleSubmit} className="form-button">Kërko</button>
                </div>
                <div className="attention-section">
                    <h4>Vëmendje</h4>
                    <div className="attention-item">
                        <FontAwesomeIcon icon={faArrowRight} className="attention-icon" />
                        <p style={{ color: 'red' }} className='attention-text'>Parametri kërkues duhet të jetë identik siç gjendet në faturë.</p>
                    </div>
                    <div className="attention-item">
                        <FontAwesomeIcon icon={faArrowRight} className="attention-icon" />
                        <p style={{ color: '#333' }} className='attention-text'>Përditësimi i shënimeve mund të merr kohë deri në 24 orë.</p>
                    </div>
                    <div className="attention-item">
                        <FontAwesomeIcon icon={faArrowRight} className="attention-icon" />
                        <Link to="#" onClick={handleLinkClick} style={{ color: 'blue' }} className='attention-text'>Ku mund ta gjej shifrën e konsumatorit?</Link>
                    </div>
                </div>
            </fieldset>
            <Modal show={showModal} onClose={handleCloseModal}>
                <img src={photo3} alt="Shifra e konsumatorit" className="modal-img" />
            </Modal>
        </div>
    );
};

export default Kru;
