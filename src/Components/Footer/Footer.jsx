import React from "react";
import "./Footer.css";
import paymentIcon from "../../Assets/paymentIcon.png";
import { FaFacebookF, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("Subscribed Successfully");
  };
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const getCurrentYear = () => new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Brand Column */}
        <div className="footer_brand">
          <div className="logoContainer">
            <Link to="/" onClick={scrollToTop} className="logo-text">
              <span className="logo-main">MAN JEWELS</span>
            </Link>
          </div>
          
          {/* Updated Address */}
          <p>
            BPTP Centra One,<br />
            Golf Course Ext Rd, Sector 61,<br />
            Gurugram, Haryana 122102, IN
          </p>

          <div className="footer_contact">
            <p>support@manjewels.in</p>
            <p>+91 9318407144</p>
          </div>
          
          <div className="social_links">
            <FaFacebookF />
            <FaXTwitter />
            <FaInstagram />
            <FaYoutube />
            <FaPinterest />
          </div>
        </div>

        {/* Shop Links */}
        <div className="footer_links">
          <h5>Shop</h5>
          <ul onClick={scrollToTop}>
            <li><Link to="/shop">New Arrivals</Link></li>
            <li><Link to="/shop">Bracelets</Link></li>
            <li><Link to="/shop">Necklaces</Link></li>
            <li><Link to="/shop">Rings</Link></li>
            <li><Link to="/shop">Shop All</Link></li>
          </ul>
        </div>

        {/* Company Links */}
        <div className="footer_links">
          <h5>Company</h5>
          <ul onClick={scrollToTop}>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Legal Links - Added new section */}
        <div className="footer_links">
          <h5>Legal</h5>
          <ul onClick={scrollToTop}>
            <li><Link to="/refund-policy">Refund Policy</Link></li>
            <li><Link to="/terms-of-service">Terms of Service</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer_newsletter">
          <h5>Newsletter</h5>
          <p>Join our mailing list for the latest products and promotions.</p>
          <form onSubmit={handleSubscribe}>
            <input type="email" placeholder="Your email address" required />
            <button type="submit">Join</button>
          </form>
          <div className="payment_methods">
            <p>Secure Payments</p>
            <img src={paymentIcon} alt="Payment Methods" />
          </div>
        </div>
      </div>
      
      {/* Copyright Section - Added */}
      <div className="footer_bottom">
        <p>© {getCurrentYear()} MENS JEWEL. All Rights Reserved.</p>
        <div className="footer_settings">
          <div className="setting_dropdown">
            <select>
              <option value="usd">USD ($)</option>
              <option value="eur">EUR (€)</option>
              <option value="gbp">GBP (£)</option>
              <option value="inr">INR (₹)</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;