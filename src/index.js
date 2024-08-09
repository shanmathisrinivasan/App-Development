import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import { BrowserRouter, Router, Route } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);