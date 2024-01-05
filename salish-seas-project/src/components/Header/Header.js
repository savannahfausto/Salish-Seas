import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

//takes in currentPage and handlePageChange as props that are coming from PortfolioContainer
export default function Header({ currentPage, handlePageChange }) {
  return (
    <nav className='flex-row justify-content-between text-uppercase'>
        <div> 
            <Link
                to={`/`} className='nav-style'
                >
                Home
            </Link>
        </div>
        <div className='grow'>
            <ul className="nav flex-row justify-content-around">
                <li className="nav-item">
                    <Link
                    to={`/officiating`} className='nav-style'
                    >
                    Officiating
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                    to={`/about`} className='nav-style'
                    >
                    About
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                    to={`/reviews`} className='nav-style'
                    >
                    Reviews
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                    to={`/gallery`} className='nav-style'
                    >
                    Gallery
                    </Link>
                </li>
            </ul>
        </div>
        <div>
            <Link
                to={`/contactme`} className='nav-style contact-btn align-middle'
                >
                Contact Me
            </Link>
        </div>   
    </nav>
  );
}
