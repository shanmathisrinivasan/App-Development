import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  // Inline styles
  const containerStyle = {
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  };

  const headingStyle = {
    fontSize: '2em',
    marginBottom: '20px',
    color: 'white',
  };

  const paragraphStyle = {
    fontSize: '30px',
    lineHeight: '1.6',
    color: 'white',
    marginBottom: '15px',
    fontFamily:'monospace'
  };

  const contactInfoStyle = {
    marginBottom: '20px',
  };

  const iconStyle = {
    margin: '0 10px',
    fontSize: '1.5em',
    color: 'white',
    textDecoration: 'none',
    fontFamily:'monospace',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Contact Us</h1>
      <div style={contactInfoStyle}>
        <p style={paragraphStyle}>
          <FaEnvelope style={iconStyle} /> Email: <a href="e&b@gmail.com">your-email@example.com</a>
        </p>
        <p style={paragraphStyle}>
          <FaPhone style={iconStyle} /> Phone: <a href="tel:+1234567890">+1 (234) 567-890</a>
        </p>
        <p style={paragraphStyle}>
          Follow us on social media:
          <br />
          <a href="https://facebook.com/yourprofile" style={iconStyle}><FaFacebook /></a>
          <a href="https://twitter.com/yourprofile" style={iconStyle}><FaTwitter /></a>
          <a href="https://instagram.com/yourprofile" style={iconStyle}><FaInstagram /></a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
