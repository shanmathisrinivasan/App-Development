import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faStar, faUnlock, faDollarSign } from '@fortawesome/free-solid-svg-icons';
//import '../styles/Premium.css'; // Assuming you have a CSS file for additional styling

const Premium = () => {
  // Inline styles
  const containerStyle = {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const headingStyle = {
    fontSize: '2.5em',
    marginBottom: '20px',
    color: 'white',
  };

  const offerContainerStyle = {
    marginBottom: '30px',
    color:'white'
  };

  const offerStyle = {
    fontSize: '18px',
    lineHeight: '1.6',
    color: 'white',
    marginBottom: '15px',
    textAlign: 'left',
    fontFamily:'monospace',
  };

  const iconStyle = {
    marginRight: '10px',
    color: '#3498db',
  };

  const amountStyle = {
    fontSize: '1.5em',
    color: 'yellow',
    fontWeight: 'bold',
    marginTop: '10px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Premium Offers</h1>
      <div style={offerContainerStyle}>
        <h2>Unlock Premium Benefits:</h2>
        <ul>
          <li style={offerStyle}>
            <FontAwesomeIcon icon={faBook} style={iconStyle} />
            Unlimited access to all interactive storybooks and educational materials.
          </li>
          <li style={offerStyle}>
            <FontAwesomeIcon icon={faStar} style={iconStyle} />
            Exclusive access to new and premium content, including special editions and bonus materials.
          </li>
          <li style={offerStyle}>
            <FontAwesomeIcon icon={faUnlock} style={iconStyle} />
            Ad-free experience for uninterrupted learning and enjoyment.
          </li>
          <li style={offerStyle}>
            <FontAwesomeIcon icon={faDollarSign} style={iconStyle} />
            Discounts on future purchases and early access to new features and updates.
          </li>
        </ul>
        <div style={amountStyle}>
          <p>All this for just <strong>₹499 per year</strong></p>
        </div>
      </div>
    </div>
  );
};

export default Premium;
