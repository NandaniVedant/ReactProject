import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Import social media icons
import { QRCodeCanvas } from 'qrcode.react'; // Correct import for QRCodeCanvas
import './Footer.css'; // Ensure to link this CSS file

const Footer = () => {
  const [scannerVisible, setScannerVisible] = useState(false);  // State to control the visibility of the QR code popup
  const [scanResult, setScanResult] = useState(null); // State to store the scan result (not used here, since it's for QR code display)

  // Function to toggle the QR code popup visibility
  const toggleScanner = () => {
    setScannerVisible(!scannerVisible); // Toggle the QR code visibility
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Contact Information */}
        <div className="footer-section">
          <h3>Contact Information</h3>
          <p>Email: <a href="mailto:contact@vedantbhramansamaj.org">contact@vedantbhramansamaj.org</a></p>
          <p>Phone: +91-XXXXXXXXXX</p>
          <p>Address: Vedant Bhraman Samaj Building, XYZ Street, City, Country</p>
        </div>

        {/* Social Media Links */}
        {/* <div className="footer-section">
          <h3>Follow Us</h3>
          <ul className="social-links">
            <li><a href="https://www.facebook.com/VedantBhramanSamaj" target="_blank" rel="noopener noreferrer" className="social-icon"><FaFacebook size={30} /></a></li>
            <li><a href="https://www.instagram.com/VedantBhramanSamaj" target="_blank" rel="noopener noreferrer" className="social-icon"><FaInstagram size={30} /></a></li>
            <li><a href="https://www.twitter.com/VedantBhraman" target="_blank" rel="noopener noreferrer" className="social-icon"><FaTwitter size={30} /></a></li>
            <li><a href="https://www.linkedin.com/company/VedantBhramanSamaj" target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedin size={30} /></a></li>
          </ul>
        </div> */}

        {/* Donate */}
        <div className="footer-section">
          <h3>Donate</h3>
          <p>
            Support the cause by contributing. 
            <span className="donate-link" onClick={toggleScanner}> Donate Now</span>
          </p>
        </div>
      </div>

      {/* QR Code Popup */}
      {scannerVisible && (
        <div className="scanner-popup">
          <div className="scanner-container">
            <button className="close-btn" onClick={toggleScanner}>X</button>
            {/* Generate and show the QR code */}
            <QRCodeCanvas value="https://www.vedantbhramansamaj.org/donate" size={256} />
            <div className="scan-confirmation">
              <p>Scan this QR code to donate:</p>
  
            </div>
          </div>
        </div>
      )}

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© 2024 Vedant Bhraman Samaj. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
