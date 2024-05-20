import React from 'react';
import './auditoretLigjore.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAddressCard} from '@fortawesome/free-solid-svg-icons';

const auditoretLigjore = () => {
  return (
      <div className="auditoretLigjore-service-page">
        <div className="auditoretLigjore-service-section">
          <h4 className="auditoretLigjore-section-title">Fondi i Sigurise</h4>
          <div className="auditoretLigjore-options">
            <input type="radio" id="auditoretLigjoreRadio1" name="auditoretLigjoreOptions" value="option1" />
            <label htmlFor="auditoretLigjoreRadio1">Option 1</label>
            <input type="radio" id="auditoretLigjoreRadio2" name="auditoretLigjoreOptions" value="option2" />
            <label htmlFor="auditoretLigjoreRadio2">Option 2</label>
            <input type="radio" id="auditoretLigjoreRadio3" name="auditoretLigjoreOptions" value="option3" />
            <label htmlFor="auditoretLigjoreRadio3">Option 3</label>
            <input type="radio" id="auditoretLigjoreRadio4" name="auditoretLigjoreOptions" value="option4" />
            <label htmlFor="auditoretLigjoreRadio4">Option 4</label>
          </div>
          <div className="auditoretLigjore-search-container">
            <input type="text" placeholder="Search..." />
            <button><FontAwesomeIcon icon={faSearch} /></button>
          </div>
        </div>

        <div className="auditoretLigjore-service-cards-container">
          <div className="auditoretLigjore-service-cards-wrapper">
            <div className="auditoretLigjore-service-card">
              <div className="auditoretLigjore-card-content">
                <FontAwesomeIcon icon={faAddressCard} className="auditoretLigjore-card-icon" />
                <h2>Aplikimi per firme te auditimeve ligjor per here te pare</h2>
                <span className="auditoretLigjore-arrow">&#62;</span>
              </div>
            </div>
            <div className="auditoretLigjore-service-card">
              <div className="auditoretLigjore-card-content">
                <FontAwesomeIcon icon={faAddressCard} className="auditoretLigjore-card-icon" />
                <h2>Aplikimi per firme te auditimeve ligjor per pertrirje te licenses</h2>
                <span className="auditoretLigjore-arrow">&#62;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default auditoretLigjore;