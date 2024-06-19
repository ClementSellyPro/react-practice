import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import themeContext from './context/theme.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <themeContext.Provider>
      <App />
    </themeContext.Provider>
  </React.StrictMode>
);

