import React, { useState } from "react";
import "./ContactPage.css";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thank You ${name} for Contacting Us. We will Get Back to You Soon.\n\nYour Mail Id - ${email}.\nYour Message is - ${message}`
    );
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <div className="contactSection">
        <h2>Contact Us</h2>

        {/* Google Maps Embed with Updated Store Location */}
        <div className="contactMap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.457393465506!2d77.07331737457774!3d28.495833275739812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d227d16b964e7%3A0xf978029d06fbe56!2sBPTP%20Centra%20One!5e0!3m2!1sen!2sin!4v1708812234567!5m2!1sen!2sin"
            width="800"
            height="600"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="store-location"
          ></iframe>
        </div>

        {/* Contact Information */}
        <div className="contactInfo">
          <div className="contactAddress">
            <div className="address">
              <h3>Our Store</h3>
              <p>
                Level 3 and Level 4, BPTP Centra One,<br />
                Golf Course Ext Rd, Sector 61, <br />
                Gurugram, Haryana 122102, INDIA
              </p>
              <p>
                support@mensjewel.com
                <br />
                +91 99999 99999
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contactForm">
            <h3>Get In Touch</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={name}
                placeholder="Name *"
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                value={email}
                placeholder="Email address *"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <textarea
                rows={10}
                cols={40}
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
