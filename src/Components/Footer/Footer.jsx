import React from "react";
import "./Footer.css";
import paymentIcon from "../../Assets/paymentIcon.png";
import { FaFacebookF, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
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
              <span className="logo-main">MENS JEWEL</span>
            </Link>
          </div>
          
          {/* Updated Address */}
          <p>
            Level 3 and Level 4, BPTP Centra One,<br />
            Golf Course Ext Rd, Sector 61,<br />
            Gurugram, Haryana 122102, IN
          </p>

          <div className="footer_contact">
            <p>support@mensjewel.com</p>
            <p>+1 555-123-4567</p>
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
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/terms">Terms & Privacy</Link></li>
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
    </footer>
  );
};

export default Footer;
