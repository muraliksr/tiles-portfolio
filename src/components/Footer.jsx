import React from "react";
import { Link } from "react-router-dom";
import WhatsAppButton from "./WhatsAppButton.jsx";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <Link className="brand brand-footer" to="/" aria-label="MK Tiles home">
          <span className="brand-mark" aria-hidden="true">MK</span>
          <span className="brand-name">Tiles</span>
        </Link>
        <p className="footer-note">Thoughtful tile work. Beautifully finished.</p>
        <div className="footer-contact">
          <a href="tel:+918248504272">82485 04272</a>
          <WhatsAppButton message="Hello MK Tiles, I'd like to discuss a project.">WhatsApp us</WhatsAppButton>
        </div>
      </div>
      <div className="footer-bottom">
        <span>MK Tiles</span>
        <Link className="back-top" to="/">Back to home <span aria-hidden="true">↑</span></Link>
      </div>
    </footer>
  );
}
