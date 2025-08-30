import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTiktok, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Contact Section */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>📧 poojabooking@gmail.com</p>
          <p>📞 9841800000</p>
        </div>

        {/* Visit Section */}
        <div className="footer-section">
          <h3>Visit Us</h3>
          <p>🌐 www.poojabooking.com</p>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3>Follow Us:</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTiktok} size="2x" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
          </div>
        </div>
      </div>

      <hr />
      <p className="footer-bottom">© 2025 poojabooking.com. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
