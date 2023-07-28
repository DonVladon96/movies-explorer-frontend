import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App.jsx';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
document.body.style.backgroundColor = '#202020';
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

reportWebVitals();
