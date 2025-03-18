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
          <h1>About Our Astrology Store</h1>
          <p>Connecting you with cosmic energies through carefully crafted spiritual jewelry</p>
        </div>
      </div>

      <section className="about-section container">
        <div className="about-intro">
          <div className="about-image-container">
            <img src={about1} alt="Astrology Shop" className="about-image" />
          </div>
          <div className="about-intro-content">
            <h2>Our Journey</h2>
            <p className="lead-text">
              We believe in the power of astrology to transform lives. Our store
              offers carefully curated spiritual jewelry and bracelets, designed
              to bring balance, healing, and positivity.
            </p>
            <p>
              Our journey began with a deep understanding of the cosmic energies
              that influence our daily lives. Each product in our collection is
              selected with intention, ensuring it aligns with the needs of our
              customers. Whether you seek prosperity, love, or protection, our
              collection is here to support your spiritual path.
            </p>
          </div>
        </div>

        <div className="about-values">
          <div className="value-card">
            <h3>Our Mission</h3>
            <p>
              To provide high-quality astrology-based products that promote
              spiritual well-being and inner harmony.
            </p>
          </div>
          <div className="value-card">
            <h3>Our Vision</h3>
            <p>
              To be the go-to destination for individuals seeking powerful
              astrology jewelry and healing accessories.
            </p>
          </div>
        </div>

        <div className="about-who-we-are">
          <div className="who-we-are-content">
            <h2>Who We Are</h2>
            <p>
              Our store is a blend of tradition and modernity, offering
              premium-quality astrology products crafted to channel positive
              energies. Each bracelet, necklace, and ring is infused with
              cosmic significance to help you manifest your desires.
            </p>
          </div>
          <div className="who-we-are-image">
            <img src={about2} alt="Astrology Collection" className="about-image" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services />
    </div>
  );
};

export default AboutPage;