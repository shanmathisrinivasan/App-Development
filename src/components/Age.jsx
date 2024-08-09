import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setAge } from '../formSlice';

const Age = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const age = useSelector((state) => state.form.formData.age);
  const formData = useSelector((state) => state.form.formData);

  const handleAgeChange = (event) => {
    dispatch(setAge(event.target.value));
  };

  const handleDoneClick = async () => {
    try {
      const updatedData = { ...formData, age }; // Update formData with the selected age
      await axios.post('http://localhost:3001/users', updatedData); // Update the user's age
      navigate('/some-new-page'); // Replace '/some-new-page' with your desired route
    } catch (error) {
      console.error('Error updating age:', error);
    }
  };

  const handleLibraryClick = () => {
    navigate('/library');
  };

  return (
    <div style={{
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundImage: `url('https://i.pinimg.com/originals/48/9a/b2/489ab2ec409fc24722b4364a106cc3fd.gif)`
    }}>
      <button 
        onClick={handleLibraryClick} 
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor:'transparent'
        }}
      >
        BOOKS
      </button>
      <div style={{ textAlign: 'center' }}>
        <label style={{ fontFamily: 'monospace', fontSize: '25px', color: 'white' }}>
          Select Age: {age}
        </label>
        <div style={{ position: 'relative', width: '200px', height: '50px', margin: '20px 0' }}>
          <input
            type="range"
            min="3"
            max="13"
            value={age}
            onChange={handleAgeChange}
            style={{
              width: '100%',
              height: '10px',
              background: '#ddd',
              borderRadius: '5px',
              outline: 'none',
              appearance: 'none',
              cursor: 'pointer',
              WebkitAppearance: 'none', // for Chrome and Safari
            }}
          />
          <style>
            {`
              input[type="range"]::-webkit-slider-thumb {
                -webkit-appearance: none;
                appearance: none;
                width: 20px;
                height: 20px;
                background: #f00;
                border-radius: 50%;
                cursor: pointer;
              }
              
              input[type="range"]::-moz-range-thumb {
                width: 20px;
                height: 20px;
                background: #f00;
                border-radius: 50%;
                cursor: pointer;
              }

              input[type="range"]::-ms-thumb {
                width: 20px;
                height: 20px;
                background: #f00;
                border-radius: 50%;
                cursor: pointer;
              }
            `}
          </style>
        </div>
        <button onClick={handleDoneClick} style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}>
          Done
        </button>
      </div>
    </div>
  );
};

export default Age;
