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

export default App;