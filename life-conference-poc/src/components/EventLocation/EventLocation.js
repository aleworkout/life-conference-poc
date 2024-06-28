import React from 'react';
import { FaInstagram, FaCopy } from 'react-icons/fa';
import './EventLocation.css';

const EventLocation = ({ address, instagram, benefits }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    alert('Endereço copiado para o clipboard!');
  };

  return (
    <div className="event-location">
      <h2>Localização do Evento</h2>
      <div className="event-address">
        <span>{address}</span>
        <button className="copy-button" onClick={handleCopy}>
          Copiar <FaCopy />
        </button>
      </div>
      <a href={instagram} target="_blank" rel="noopener noreferrer" className="instagram-link">
        Visite o Instagram do Local <FaInstagram />
      </a>
      <div className="navigation-buttons">
        <button className="google-maps" onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`, '_blank')}>
          Google Maps
        </button>
        <button className="waze" onClick={() => window.open(`https://waze.com/ul?ll=${encodeURIComponent(address)}&navigate=yes`, '_blank')}>
          Waze
        </button>
        <button className="uber" onClick={() => window.open(`https://m.uber.com/ul/?action=setPickup&client_id=<CLIENT_ID>&pickup=my_location&dropoff[formatted_address]=${encodeURIComponent(address)}`, '_blank')}>
          Uber
        </button>
      </div>
      <div className="benefits">
        {benefits.map((benefit, index) => (
          <div className="benefit" key={index}>
            {benefit.icon}
            <span className="benefit-text">{benefit.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventLocation;
