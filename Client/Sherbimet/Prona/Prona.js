import React from 'react';
import './Prona.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAddressCard } from '@fortawesome/free-solid-svg-icons';

const Prona = () => {
  return (
    <div className="prona-service-page">
      <div className="prona-service-section">
        <h4 className="prona-section-title">Prona</h4>
        <div className="prona-options">
          <input type="radio" id="customRadio1" name="customOptions" value="option1" />
          <label htmlFor="customRadio1">Option 1</label>
          <input type="radio" id="customRadio2" name="customOptions" value="option2" />
          <label htmlFor="customRadio2">Option 2</label>
          <input type="radio" id="customRadio3" name="customOptions" value="option3" />
          <label htmlFor="customRadio3">Option 3</label>
          <input type="radio" id="customRadio4" name="customOptions" value="option4" />
          <label htmlFor="customRadio4">Option 4</label>
        </div>
        <div className="prona-search-container">
          <input type="text" placeholder="Search..." />
          <button><FontAwesomeIcon icon={faSearch} /></button>
        </div>
      </div>

      <div className="prona-service-cards-container">
        <div className="prona-service-cards-wrapper">
          <div className="prona-service-card">
            <div className="prona-card-content">
              <FontAwesomeIcon icon={faAddressCard} className="prona-card-icon" />
              <h2>Gjendja Civile</h2>
              <span className="prona-arrow">&#62;</span>
            </div>
          </div>
          <div className="prona-service-card">
            <div className="prona-card-content">
              <FontAwesomeIcon icon={faAddressCard} className="prona-card-icon" />
              <h2>Gjendja Civile</h2>
              <span className="prona-arrow">&#62;</span>
            </div>
          </div>
          <div className="prona-service-card">
            <div className="prona-card-content">
              <FontAwesomeIcon icon={faAddressCard} className="prona-card-icon" />
              <h2>Gjendja Civile</h2>
              <span className="prona-arrow">&#62;</span>
            </div>
          </div>
          <div className="prona-service-card">
            <div className="prona-card-content">
              <FontAwesomeIcon icon={faAddressCard} className="prona-card-icon" />
              <h2>Gjendja Civile</h2>
              <span className="prona-arrow">&#62;</span>
            </div>
          </div>
          <div className="prona-service-card">
            <div className="prona-card-content">
              <FontAwesomeIcon icon={faAddressCard} className="prona-card-icon" />
              <h2>Gjendja Civile</h2>
              <span className="prona-arrow">&#62;</span>
            </div>
          </div>
          <div className="prona-service-card">
            <div className="prona-card-content">
              <FontAwesomeIcon icon={faAddressCard} className="prona-card-icon" />
              <h2>Gjendja Civile</h2>
              <span className="prona-arrow">&#62;</span>
            </div>
          </div>
          <div className="prona-service-card">
            <div className="prona-card-content">
              <FontAwesomeIcon icon={faAddressCard} className="prona-card-icon" />
              <h2>Gjendja Civile</h2>
              <span className="prona-arrow">&#62;</span>
            </div>
          </div>
          <div className="prona-service-card">
            <div className="prona-card-content">
              <FontAwesomeIcon icon={faAddressCard} className="prona-card-icon" />
              <h2>Gjendja Civile</h2>
              <span className="prona-arrow">&#62;</span>
            </div>
          </div>
          <div className="prona-service-card">
            <div className="prona-card-content">
              <FontAwesomeIcon icon={faAddressCard} className="prona-card-icon" />
              <h2>Gjendja Civile</h2>
              <span className="prona-arrow">&#62;</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prona;

