import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'react-quill/dist/quill.snow.css';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import UserReducer from './components/UserReducer';

const store = configureStore({
  reducer: {
    blogs: UserReducer

  }
})



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
  
);
