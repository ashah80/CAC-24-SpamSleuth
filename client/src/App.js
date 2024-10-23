import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Information from './pages/Information';
import AboutUs from './pages/AboutUs.js';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <>
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/information" element={<Information />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </>
    </div>
  );
}

// Possible future functionality: 
/* 
different image so it isn't creepy
Gradient on "welcome" statement
Add in yellow in more places (??)
Make the Spam Check section a bit bigger
Highlight some words in the info page

*/

export default App;