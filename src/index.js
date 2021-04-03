// Packages
import React from 'react';
import ReactDOM from 'react-dom';
// Components
import App from './App/App';
// Context
import { GenderContextProvider } from './context/GenderContext';
// Other
import reportWebVitals from './other/reportWebVitals';
// System Styles
import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <GenderContextProvider>
      <App />
    </GenderContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
