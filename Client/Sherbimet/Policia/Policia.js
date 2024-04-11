import React from 'react';
import './Policia.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAddressCard} from '@fortawesome/free-solid-svg-icons';

const Policia = () => {
  return (
      <div className="policia-service-page">
        <div className="policia-service-section">
          <h4 className="policia-section-title">Policia</h4>
          <div className="policia-options">
            <input type="radio" id="policiaRadio1" name="policiaOptions" value="option1" />
            <label htmlFor="policiaRadio1">Option 1</label>
            <input type="radio" id="policiaRadio2" name="policiaOptions" value="option2" />
            <label htmlFor="policiaRadio2">Option 2</label>
            <input type="radio" id="policiaRadio3" name="policiaOptions" value="option3" />
            <label htmlFor="policiaRadio3">Option 3</label>
            <input type="radio" id="policiaRadio4" name="policiaOptions" value="option4" />
            <label htmlFor="policiaRadio4">Option 4</label>
          </div>
          <div className="policia-search-container">
            <input type="text" placeholder="Search..." />
            <button><FontAwesomeIcon icon={faSearch} /></button>
          </div>
        </div>

        <div className="policia-service-cards-container">
          <div className="policia-service-cards-wrapper">
            <div className="policia-service-card">
              <div className="policia-card-content">
                <FontAwesomeIcon icon={faAddressCard} className="policia-card-icon" />
                <h2>Gjendja Civile</h2>
                <span className="policia-arrow">&#62;</span>
              </div>
            </div>
            <div className="policia-service-card">
              <div className="policia-card-content">
                <FontAwesomeIcon icon={faAddressCard} className="policia-card-icon" />
                <h2>Gjendja Civile</h2>
                <span className="policia-arrow">&#62;</span>
              </div>
            </div>
            <div className="policia-service-card">
              <div className="policia-card-content">
                <FontAwesomeIcon icon={faAddressCard} className="policia-card-icon" />
                <h2>Gjendja Civile</h2>
                <span className="policia-arrow">&#62;</span>
              </div>
            </div>
            <div className="policia-service-card">
              <div className="policia-card-content">
                <FontAwesomeIcon icon={faAddressCard} className="policia-card-icon" />
                <h2>Gjendja Civile</h2>
                <span className="policia-arrow">&#62;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Policia;

