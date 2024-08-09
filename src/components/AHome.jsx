import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/AHome.css';
import { Button, Typography } from '@mui/material';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

const AHome = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLoginClick = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/users');
      const users = response.data;
      const user = users.find((user) => user.username === username && user.password === password);
      if (user) {
        navigate('/dashboard'); // Change '/dashboard' to your desired route
      } else {
        setError('Invalid username or password');
      }
    } catch (err) {
      setError('Error logging in. Please try again later.');
    }
  };

  return (
    <div className="main-container">
      <Button
        variant="text"
        style={{ background: 'none', boxShadow: 'none', color: 'white' }}
        className="home-button"
        onClick={() => navigate('/')}
      >
        Home
      </Button>
      <div className="background">
        <h1>Login</h1>
        <div className="login-container">
          <form className="login-form" onSubmit={handleLoginClick}>
            <div className="input-container">
              <FontAwesomeIcon icon={faUser} className="input-icon" />
              <input
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                className="login-input"
              />
            </div>
            <div className="input-container">
              <FontAwesomeIcon icon={faLock} className="input-icon" />
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="login-input"
              />
            </div>
            {error && (
              <Typography color="error" variant="body2" className="error-message">
                {error}
              </Typography>
            )}
            <div className="button-container">
              <Button color="inherit" component={Link} to="/age" className="login-button" 
                variant="contained"
                type="submit" >
                Login
              </Button>
            </div>
            <div className="link-container">
              <Typography variant="body2" className="link">
                <Link to="/signup">Don't have an account? Sign up</Link>
              </Typography>
              <Typography variant="body2" className="link">
                <Link to="/forgot-password">Forgot password?</Link>
              </Typography>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AHome;
