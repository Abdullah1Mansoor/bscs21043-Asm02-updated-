// src/components/Footer.jsx

import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <p>&copy; 2024 Your Company Name. All rights reserved.</p>
      <ul className="footer-links">
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#privacy">Privacy Policy</a></li>
      </ul>
    </div>
  );
}

export default Footer;
