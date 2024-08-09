// src/formSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {
    username: '',
    password: '',
    email: '',
    phoneNumber: '',
    age: 3,  // Add the initial age here
  },
  errors: {
    username: '',
    password: '',
    email: '',
    phoneNumber: '',
    age: '',
  },
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      state.formData[action.payload.name] = action.payload.value;
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
    clearError: (state, action) => {
      state.errors[action.payload] = '';
    },
    setAge: (state, action) => {
      state.formData.age = action.payload;
    }
  },
});

export const { updateFormData, setErrors, clearError, setAge } = formSlice.actions;
export default formSlice.reducer;
