import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
      <a href="/" className="navbar-logo">Logo</a>
        <button className={`navbar-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span className="navbar-toggle-icon"></span>
        </button>
        <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/Register" className="navbar-link">Farmers-Community</Link>
          </li>
          <li className="navbar-item">
            <Link to="/FootprintCalculator" className="navbar-link">Footprint-Calculator</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
