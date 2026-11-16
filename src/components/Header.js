import React from 'react';
import { Link } from 'react-router-dom'; // For navigation

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#enquiry">Enquiry</a></li>
        </ul>
      </nav>
      <div className="logo-container">
        <img src="logo.png" alt="INSC" className="logo" />
        <h1 className="company-name">INSC Enterprises</h1>
      </div>
    </header>
  );
}

export default Header;

/// <li><a href="#team">Team</a></li>