// Packages
import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

// components
import Header from '../components/sections/Header';
import Main from '../components/sections/Main';
import Footer from '../components/sections/Footer';

// Styles
import './App.css';


function App() {

  return (
    <div className="App">
      <Router >
        <Header />
        <Main />
        <Footer />
      </Router>
    </div>
  );

}

export default App;
