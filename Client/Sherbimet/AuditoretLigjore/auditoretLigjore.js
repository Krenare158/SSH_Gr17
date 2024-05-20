import React from 'react';
import './Adresa.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAddressCard} from '@fortawesome/free-solid-svg-icons';

const adresa = () => {
  return (
      <div className="adresa-service-page">
        <div className="adresa-service-section">
          <h4 className="adresa-section-title">Fondi i Sigurise</h4>
          <div className="adresa-options">
            <input type="radio" id="adresaRadio1" name="adresaOptions" value="option1" />
            <label htmlFor="adresaRadio1">Option 1</label>
            <input type="radio" id="adresaRadio2" name="adresaOptions" value="option2" />
            <label htmlFor="adresaRadio2">Option 2</label>
            <input type="radio" id="adresaRadio3" name="adresaOptions" value="option3" />
            <label htmlFor="adresaRadio3">Option 3</label>
            <input type="radio" id="adresaRadio4" name="adresaOptions" value="option4" />
            <label htmlFor="adresaRadio4">Option 4</label>
          </div>
          <div className="adresa-search-container">
            <input type="text" placeholder="Search..." />
            <button><FontAwesomeIcon icon={faSearch} /></button>
          </div>
        </div>

        <div className="adresa-service-cards-container">
          <div className="adresa-service-cards-wrapper">
            <div className="adresa-service-card">
              <div className="adresa-card-content">
                <FontAwesomeIcon icon={faAddressCard} className="adresa-card-icon" />
                <h2>Aplikimi per firme te auditimeve ligjor per here te pare</h2>
                <span className="adresa-arrow">&#62;</span>
              </div>
            </div>
            <div className="adresa-service-card">
              <div className="adresa-card-content">
                <FontAwesomeIcon icon={faAddressCard} className="adresa-card-icon" />
                <h2>Aplikimi per firme te auditimeve ligjor per pertrirje te licenses</h2>
                <span className="adresa-arrow">&#62;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default adresa;