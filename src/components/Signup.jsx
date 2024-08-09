import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Signup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { updateFormData, setErrors, clearError } from '../formSlice';

const Signup = () => {
  const formData = useSelector((state) => state.form.formData);
  const errors = useSelector((state) => state.form.errors);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [submissionStatus, setSubmissionStatus] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormData({ name, value }));
    dispatch(clearError(name));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation conditions
    const usernameError = formData.username.length < 8 ? '8 characters req.' : '';
    const passwordError = !/\d/.test(formData.password) ? 'Password must contain a number' : '';
    const emailError = !formData.email.includes('@') ? 'Email must contain @' : '';
    const phoneNumberError = !/^\d{10}$/.test(formData.phoneNumber) ? 'Phone number must have 10 digits' : '';

    const validationErrors = {
      username: usernameError,
      password: passwordError,
      email: emailError,
      phoneNumber: phoneNumberError,
    };

    dispatch(setErrors(validationErrors));

    // If any errors exist, prevent form submission
    if (usernameError || passwordError || emailError || phoneNumberError) {
      console.log('Form has errors:', validationErrors);
    } else {
      try {
        const response = await axios.post('http://localhost:3001/users', formData);
        console.log('Signup form submitted:', response.data);
        setSubmissionStatus(true);
        navigate('/age'); // Navigate to the Age page
      } catch (error) {
        console.error('Error submitting the signup form:', error);
        setSubmissionStatus(true); // Set status to true even if there's an error
        navigate('/age'); // Navigate to the Age page
      }
    }
  };

  return (
    <div className="signup-page">
      <h1 className="signup-title">Sign Up</h1>
      <div className="signup-container">
        <form onSubmit={handleSubmit}>
          <label>
            <FontAwesomeIcon icon={faUser} />
            &nbsp; &nbsp; &nbsp;
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
            />
            {errors.username && <span className="error">{errors.username}</span>}
          </label>
          <label>
            <FontAwesomeIcon icon={faLock} />
            &nbsp; &nbsp; &nbsp;
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </label>
          <label>
            <FontAwesomeIcon icon={faEnvelope} />
            &nbsp; &nbsp; &nbsp;
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your e-mail"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </label>
          <label>
            <FontAwesomeIcon icon={faPhone} />
            &nbsp; &nbsp; &nbsp;
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
            {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
          </label>
          <button style={{ marginLeft: 'auto', marginRight: 'auto' }} type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
