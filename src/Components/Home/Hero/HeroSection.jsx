import React from "react";
import "./HeroSection.css";
import { Link } from "react-router-dom";
import Product_7 from "../../../Assets/Products/product_7.jpg";

const HeroSection = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="heroMain">
      <div className="sectionleft">
        <p>Refined Elegance</p>
        <h1>Bold Statements For Modern Men</h1>
        <span>
          Discover our exclusive collection of premium men's jewelry, 
          crafted to enhance your style and command attention.
          Timeless designs meet contemporary sophistication.
        </span>
        <div className="heroLink">
          <Link to="/shop" onClick={scrollToTop} className="shop-now-btn">
            <h5>Shop Collection</h5>
          </Link>
        </div>
      </div>
      <div className="sectionright">
        <div className="image-container">
          <img src={Product_7} alt="Men's Jewelry" className="heroImage" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;