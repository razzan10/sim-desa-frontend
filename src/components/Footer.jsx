import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>Email: lorem@example.com</p>
          <p>Phone: +123456</p>
          <p>Address: Jl. lorem 123</p>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul className="list">
            <li>
              <a href="#">PPID</a>
            </li>
            <li>
              <a href="#">Lembaga</a>
            </li>
            <li>
              <a href="#">Informasi</a>
            </li>
            <li>
              <a href="#">Publikasi</a>
            </li>
            <li>
              <a href="#">Administrasi</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#">
              <i className="bi bi-twitter-x"></i>
            </a>
            <a href="#">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#">
              <i className="bi bi-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="bottom-bar">
        &copy; 2025 Razzan v1. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
