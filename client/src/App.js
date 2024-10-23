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
Check for spam button changing color during hover
different image so it isn't creepy
Gradient on "welcome" statement
Add in cyan + teal (100-200) into the color theme

*/

export default App;