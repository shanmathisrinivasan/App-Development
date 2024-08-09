import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import '../styles/Profile.css'; // Assuming you have a CSS file for additional styling

const Profile = () => {
  // Get user data from Redux state
  const user = useSelector((state) => state.user); // Adjust based on where user data is stored

  // Inline styles
  const containerStyle = {
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const headingStyle = {
    fontSize: '2em',
    marginBottom: '20px',
    color: '#2c3e50',
  };

  const infoStyle = {
    fontSize: '1.2em',
    lineHeight: '1.6',
    color: '#34495e',
    marginBottom: '15px',
  };

  const iconStyle = {
    marginRight: '10px',
    color: '#3498db',
  };

  if (!user) {
    return <p>Loading user information...</p>;
  }

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Profile</h1>
      <div>
        <div style={infoStyle}>
          <FontAwesomeIcon icon={faUser} style={iconStyle} />
          <span><strong>Username:</strong> {user.username}</span>
        </div>
        <div style={infoStyle}>
          <FontAwesomeIcon icon={faEnvelope} style={iconStyle} />
          <span><strong>Email:</strong> {user.email}</span>
        </div>
        <div style={infoStyle}>
          <FontAwesomeIcon icon={faPhone} style={iconStyle} />
          <span><strong>Phone Number:</strong> {user.phoneNumber}</span>
        </div>
        <div style={infoStyle}>
          <span><strong>Joined:</strong> {new Date(user.joined).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
