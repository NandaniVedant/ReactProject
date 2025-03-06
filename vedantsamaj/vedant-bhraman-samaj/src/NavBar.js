import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'; // Use NavLink instead of Link
import './NavBar.css';
import { FaDonate } from 'react-icons/fa'; // Import the Donate icon
import { QRCodeCanvas } from 'qrcode.react'; // Import QRCodeCanvas for QR code generation
import logo from './image/imag2.jpg'; // Assuming you have a logo image file in the assets folder

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isQrCodeVisible, setIsQrCodeVisible] = useState(false); // State to control QR code popup visibility

  // Toggle the menu open/close for mobile devices
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Toggle the visibility of the QR code popup
  const toggleQrCode = () => {
    setIsQrCodeVisible(!isQrCodeVisible);
  };

  useEffect(() => {
    // This effect is used to handle menu toggle using the menu icon.
    const handleOutsideClick = (event) => {
      // Close the menu if clicked outside of the navbar
      if (!event.target.closest('.navbar')) {
        setIsMenuOpen(false);
      }
    };

    // Adding the event listener for click outside to close the menu
    document.addEventListener('click', handleOutsideClick);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo" activeClassName="active-link">
          <img src={logo} alt="Vedant Bhraman Samaj Logo" className="logo" />
          Vedant Bhraman Samaj
        </NavLink>

        {/* Menu Icon for Mobile */}
        <div className={`menu-icon ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Navbar Links */}
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <NavLink 
              to="/" 
              className="nav-links" 
              onClick={() => setIsMenuOpen(false)} 
              activeClassName="active-link"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/about" 
              className="nav-links" 
              onClick={() => setIsMenuOpen(false)} 
              activeClassName="active-link"
            >
              About Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/gallery" 
              className="nav-links" 
              onClick={() => setIsMenuOpen(false)} 
              activeClassName="active-link"
            >
              Gallery 
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/events" 
              className="nav-links" 
              onClick={() => setIsMenuOpen(false)} 
              activeClassName="active-link"
            >
              Events
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/contact" 
              className="nav-links" 
              onClick={() => setIsMenuOpen(false)} 
              activeClassName="active-link"
            >
              Contact
            </NavLink>
          </li>
          <li className="nav-item donate-icon">
            <FaDonate size={30} onClick={toggleQrCode} className="donate-icon" />
          </li>
        </ul>
      </div>

      {/* QR Code Popup */}
      {isQrCodeVisible && (
        <div className="qr-code-popup">
          <div className="qr-code-container">
            <button className="close-btn" onClick={toggleQrCode}>X</button>
            <h3>Scan to Donate</h3>
            {/* QR Code generated with donation link */}
            <QRCodeCanvas value="https://www.vedantbhramansamaj.org/donate" size={256} />
            <div className="scan-confirmation">
              <p>Scan this QR code to donate</p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
