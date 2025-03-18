import React from "react";
import "./AboutPage.css";
import about2 from "../../Assets/About/about-2.jpg";
import about1 from "../../Assets/About/about-1.jpeg";
import Services from "../../Components/Home/Services/Services";

const AboutPage = () => {
  return (
    <div className="about-page-wrapper">
      <div className="about-hero">
        <div className="about-hero-content">
          <h1>About Mens Jewel</h1>
          <p>Refined Elegance, Unmatched Craftsmanship – Elevate Your Style</p>
        </div>
      </div>

      <section className="about-section container">
        <div className="about-intro">
          <div className="about-image-container">
            <img src={about1} alt="Mens Jewelry Collection" className="about-image" />
          </div>
          <div className="about-intro-content">
            <h2>Our Story</h2>
            <p className="lead-text">
              At **Mens Jewel**, we believe that jewelry is more than just an accessory—it's an expression of confidence, power, and individuality.  
            </p>
            <p>
              Our journey began with a passion for timeless design and expert craftsmanship. Inspired by the modern gentleman, we curate premium-quality rings, bracelets, necklaces, and accessories that redefine men's fashion. Each piece is designed to make a statement—bold, sophisticated, and effortlessly stylish.
            </p>
          </div>
        </div>

        <div className="about-values">
          <div className="value-card">
            <h3>Our Mission</h3>
            <p>
              To empower men with premium jewelry that exudes confidence, class, and individuality.
            </p>
          </div>
          <div className="value-card">
            <h3>Our Vision</h3>
            <p>
              To be the leading destination for men's jewelry, offering unparalleled craftsmanship and timeless designs.
            </p>
          </div>
        </div>

        <div className="about-who-we-are">
          <div className="who-we-are-content">
            <h2>Craftsmanship & Quality</h2>
            <p>
              Every piece in our collection is handcrafted using the finest materials—sterling silver, stainless steel, and premium leather. Designed for the modern man, our jewelry combines contemporary aesthetics with lasting durability. Whether it’s a sleek minimalist ring or a bold statement necklace, each design is crafted to elevate your look.
            </p>
          </div>
          <div className="who-we-are-image">
            <img src={about2} alt="Mens Jewelry Crafting" className="about-image" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services />
    </div>
  );
};

export default AboutPage;
