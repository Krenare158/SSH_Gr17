import React from 'react';
import './Komunalite.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAddressCard} from '@fortawesome/free-solid-svg-icons';

const Komunalite = () => {
  return (
      <div className="komunalite-service-page">
        <div className="komunalite-service-section">
          <h4 className="komunalite-section-title">Komunalite</h4>
          <div className="komunalite-options">
            <input type="radio" id="komunaliteRadio1" name="komunaliteOptions" value="option1" />
            <label htmlFor="komunaliteRadio1">Option 1</label>
            <input type="radio" id="komunaliteRadio2" name="komunaliteOptions" value="option2" />
            <label htmlFor="komunaliteRadio2">Option 2</label>
            <input type="radio" id="komunaliteRadio3" name="komunaliteOptions" value="option3" />
            <label htmlFor="komunaliteRadio3">Option 3</label>
            <input type="radio" id="komunaliteRadio4" name="komunaliteOptions" value="option4" />
            <label htmlFor="komunaliteRadio4">Option 4</label>
          </div>
          <div className="komunalite-search-container">
            <input type="text" placeholder="Search..." />
            <button><FontAwesomeIcon icon={faSearch} /></button>
          </div>
        </div>

        <div className="komunalite-service-cards-container">
          <div className="komunalite-service-cards-wrapper">
            <div className="komunalite-service-card">
              <div className="komunalite-card-content">
                <FontAwesomeIcon icon={faAddressCard} className="komunalite-card-icon" />
                <h2>Gjendja Civile</h2>
                <span className="komunalite-arrow">&#62;</span>
              </div>
            </div>
            <div className="komunalite-service-card">
              <div className="komunalite-card-content">
                <FontAwesomeIcon icon={faAddressCard} className="komunalite-card-icon" />
                <h2>Gjendja Civile</h2>
                <span className="komunalite-arrow">&#62;</span>
              </div>
            </div>
            <div className="komunalite-service-card">
              <div className="komunalite-card-content">
                <FontAwesomeIcon icon={faAddressCard} className="komunalite-card-icon" />
                <h2>Gjendja Civile</h2>
                <span className="komunalite-arrow">&#62;</span>
              </div>
            </div>
            <div className="komunalite-service-card">
              <div className="komunalite-card-content">
                <FontAwesomeIcon icon={faAddressCard} className="komunalite-card-icon" />
                <h2>Gjendja Civile</h2>
                <span className="komunalite-arrow">&#62;</span>
              </div>
            </div>
            <div className="komunalite-service-card">
              <div className="komunalite-card-content">
                <FontAwesomeIcon icon={faAddressCard} className="komunalite-card-icon" />
                <h2>Gjendja Civile</h2>
                <span className="komunalite-arrow">&#62;</span>
              </div>
            </div>
            <div className="komunalite-service-card">
              <div className="komunalite-card-content">
                <FontAwesomeIcon icon={faAddressCard} className="komunalite-card-icon" />
                <h2>Gjendja Civile</h2>
                <span className="komunalite-arrow">&#62;</span>
              </div>
            </div>
            <div className="komunalite-service-card">
              <div className="komunalite-card-content">
                <FontAwesomeIcon icon={faAddressCard} className="komunalite-card-icon" />
                <h2>Gjendja Civile</h2>
                <span className="komunalite-arrow">&#62;</span>
              </div>
            </div>
            <div className="komunalite-service-card">
              <div className="komunalite-card-content">
                <FontAwesomeIcon icon={faAddressCard} className="komunalite-card-icon" />
                <h2>Gjendja Civile</h2>
                <span className="komunalite-arrow">&#62;</span>
              </div>
            </div>
            <div className="komunalite-service-card">
              <div className="komunalite-card-content">
                <FontAwesomeIcon icon={faAddressCard} className="komunalite-card-icon" />
                <h2>Gjendja Civile</h2>
                <span className="komunalite-arrow">&#62;</span>
              </div>
            </div>
            <div className="komunalite-service-card">
              <div className="komunalite-card-content">
                <FontAwesomeIcon icon={faAddressCard} className="komunalite-card-icon" />
                <h2>Gjendja Civile</h2>
                <span className="komunalite-arrow">&#62;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Komunalite;

