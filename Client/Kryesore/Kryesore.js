import React, { useState } from "react";
import './Kryesore.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faUserLock } from '@fortawesome/free-solid-svg-icons';
import aa from '../../assets/aa.jpg'; // Import the images
import bb from '../../assets/bb.jpg';
import e from '../../assets/e.jpg';
import er from '../../assets/er.jpg';

const Kryesore = () => {

    const handleLinkClick = (e) => {
        e.preventDefault();
    };

    return (
        <div className="kryesore-form-container">
            <h1>Platforma e shërbimeve online</h1>
            <p>eService është platformë shtetërore ku shërbimet publike që gjenden në zyrat dhe sportelet fizike të institucioneve ofrohen në mënyrë elektronike.</p>
            <fieldset className="kryesore-form-wrapper">
                <FontAwesomeIcon icon={faUserLock} className="iccon" />
                <div className="kryesore-section">
                    <h4>A e dini se eService mundëson autentikim të sigurt përmes kodi verifikues?</h4>
                    <div className="kryesore-card-content">
                        <p style={{ color: '#333' }} className='kryesore-link'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique qui quaerat nihil sapiente sed autem tenetur cupiditate maiores, voluptates sint recusandae a sequi incidunt, vitae nesciunt quasi iure quos deserunt.<br />
                            <a href="#" onClick={handleLinkClick}>Për të kaluar tek profili, klikoni këtu.</a>
                        </p>
                    </div>
                </div>
            </fieldset>

            <fieldset className="kryesore-form-wrapper">
                <FontAwesomeIcon icon={faExclamationTriangle} className="icconn" />
                <div className="kryesore-section">
                    <h4>Vemendje</h4>
                    <div className="kryesore-card-content">
                        <p style={{ color: '#333' }} className='kryesore-link'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique qui quaerat nihil sapiente sed autem tenetur cupiditate maiores, voluptates sint recusandae a sequi incidunt, vitae nesciunt quasi iure quos deserunt.<br />
                        </p>
                    </div>
                </div>
            </fieldset>

            <div className="image-section">
                <h3 className="h33"> Lorem ipsum</h3>
                <div className="image-container">
                    <img src={aa} alt="e" />
                    <img src={bb} alt="e" />
                    <img src={e} alt="e" />
                    <img src={er} alt="es" />
                </div>
            </div>
        </div>
    );
};

export default Kryesore;

