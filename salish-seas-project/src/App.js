import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Officiating from './components/Officiating/Officiating';
import About from './components/About/About';
import Reviews from './components/Reviews/Reviews';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <Router>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <div className="container">
          {/* Wrap Route elements in a Routes component */}
          <Routes>
            {/* Define routes using the Route component to render different page components at different paths */}
            {/* Define a default route that will render the Home component */}
            <Route 
              path="/" 
              element={<Home />} 
            />
            {/* Define a route that will take in variable data */}
            <Route 
              path="/officiating" 
              element={<Officiating />} 
            />
             <Route 
              path="/about" 
              element={<About />} 
            />
             <Route 
              path="/reviews" 
              element={<Reviews />} 
            />
             <Route 
              path="/gallery" 
              element={<Gallery />} 
            />
             <Route 
              path="/contactme" 
              element={<Contact />} 
            />
          </Routes>
        </div>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;

