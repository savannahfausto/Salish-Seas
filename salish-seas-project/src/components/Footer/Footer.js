import React from 'react';
// Import Link component for all internal application hyperlinks
import { Link } from 'react-router-dom';

import "./Footer.css"

function Footer() {
    
    return (
      <div className="fixed-bottom footer-style d-flex flex-wrap text-uppercase">
        <Link to="/about" className='footer-text right-border title-line'><span>Washington Wedding Officiant</span></Link>
        <div className="break break-1">|</div>
        <Link to="/officiating" className='footer-text right-border title-line'><span>Personalized, Sacred Ceremonies</span></Link>
        <div className="break break-2">|</div>
        <Link to="/contactme" className='footer-text title-line'><span>ben@naturelopements.com</span></Link>
      </div>
    );
  }
  
  export default Footer;