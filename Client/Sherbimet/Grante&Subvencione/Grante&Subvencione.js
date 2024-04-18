import React from 'react';
import './Grante&Subvencione.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAddressCard} from '@fortawesome/free-solid-svg-icons';

const granteSubvencione = () => {
  return (
      <div className="granteSubvencione-service-page">
        <div className="granteSubvencione-service-section">
          <h4 className="granteSubvencione-section-title">Grante dhe Subvencione</h4>
          <div className="granteSubvencione-options">
            <input type="radio" id="granteSubvencioneRadio1" name="granteSubvencioneOptions" value="option1" />
            <label htmlFor="granteSubvencioneRadio1">Option 1</label>
            <input type="radio" id="granteSubvencioneRadio2" name="granteSubvencioneOptions" value="option2" />
            <label htmlFor="granteSubvencioneRadio2">Option 2</label>
            <input type="radio" id="granteSubvencioneRadio3" name="granteSubvencioneOptions" value="option3" />
            <label htmlFor="granteSubvencioneRadio3">Option 3</label>
            <input type="radio" id="granteSubvencioneRadio4" name="granteSubvencioneOptions" value="option4" />
            <label htmlFor="granteSubvencioneRadio4">Option 4</label>
          </div>
          <div className="granteSubvencione-search-container">
            <input type="text" placeholder="Search..." />
            <button><FontAwesomeIcon icon={faSearch} /></button>
          </div>
        </div>

        <div className="granteSubvencione-service-cards-container">
          <div className="granteSubvencione-service-cards-wrapper">
            <div className="granteSubvencione-service-card">
            <div className="granteSubvencione-card-content">
                <FontAwesomeIcon icon={faFileInvoiceDollar} className="granteSubvencione-card-icon" />
                <Link to="" style={{ color: '#333' }} className='linkcla'>Thirrje publike per subvencionim te NVM-ve per blerjen e makinerive prodhuese</Link>
                <span className="new-arrow">&#62;</span>
             </div>
            </div>
            <div className="granteSubvencione-service-card">
            <div className="granteSubvencione-card-content">
                <FontAwesomeIcon icon={faFileInvoiceDollar} className="granteSubvencione-card-icon" />
                <Link to="" style={{ color: '#333' }} className='linkcla'>Thirrje publike per perkrahjen financiare te NVM-ve per certifikim te produkteve</Link>
                <span className="new-arrow">&#62;</span>
             </div>
            </div>
            <div className="granteSubvencione-service-card">
            <div className="granteSubvencione-card-content">
                <FontAwesomeIcon icon={faFileInvoiceDollar} className="granteSubvencione-card-icon" />
                <Link to="" style={{ color: '#333' }} className='linkcla'>Thirrje publike per perkrahjen e NVM-ve per mbulimin e shpenzimeve te transformimit digjital</Link>
                <span className="new-arrow">&#62;</span>
             </div>
            </div>
            <div className="granteSubvencione-service-card">
            <div className="granteSubvencione-card-content">
                <FontAwesomeIcon icon={faFileInvoiceDollar} className="granteSubvencione-card-icon" />
                <Link to="" style={{ color: '#333' }} className='linkcla'>Formulari per ankese</Link>
                <span className="new-arrow">&#62;</span>
             </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default granteSubvencione;