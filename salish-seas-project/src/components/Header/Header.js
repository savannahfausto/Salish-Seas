import React from 'react';
import { Link } from 'react-router-dom';

//takes in currentPage and handlePageChange as props that are coming from PortfolioContainer
export default function Header({ currentPage, handlePageChange }) {
  return (
    <nav>
        <div>logo here</div>
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link
                to={`/`}
                >
                Home
                </Link>
            </li>
            <li className="nav-item">
                <Link
                to={`/officiating`}
                >
                Officiating
                </Link>
            </li>
            <li className="nav-item">
                <Link
                to={`/about`}
                >
                About
                </Link>
            </li>
            <li className="nav-item">
                <Link
                to={`/reviews`}
                >
                Reviews
                </Link>
            </li>
            <li className="nav-item">
                <Link
                to={`/gallery`}
                >
                Gallery
                </Link>
            </li>
        </ul>
        <div className="contact-btn">
            <Link
                to={`/contactme`}
                >
                Contact Me
            </Link>
        </div>   
    </nav>
  );
}
