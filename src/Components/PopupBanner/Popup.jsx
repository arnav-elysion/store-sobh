import React, { useState } from "react";
import "./Popup.css";
import popupImg from "../../Assets/Products/popupImg.webp";
import toast, { Toaster } from "react-hot-toast";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [email, setEmail] = useState("");

  const handleClose = () => {
    setFadeOut(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 300);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === "") {
      toast.error("Please enter a valid email address.", {
        duration: 2000,
        position: "top-center",
        style: {
          backgroundColor: "#ff4b4b",
          color: "white",
        },
        iconTheme: {
          primary: "#fff",
          secondary: "#ff4b4b",
        },
      });
      return;
    }

    toast.success("Thank you for subscribing!", {
      duration: 2000,
      position: "top-center",
      style: {
        backgroundColor: "#07bc0c",
        color: "white",
      },
      iconTheme: {
        primary: "#fff",
        secondary: "#07bc0c",
      },
    });

    setFadeOut(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 300);
  };

  return (
    <>
      <Toaster />
      {showPopup && (
        <div className="popup-overlay">
          <div className={`popup-content ${fadeOut ? "fade-out" : ""}`}>
            <button className="close-button" onClick={handleClose}>
              ×
            </button>
            <div className="popup-left">
              <img src={popupImg} alt="Newsletter" />
            </div>
            <div className="popup-right">
              <h2>Join Our Exclusive Club</h2>
              <p>
                Get early access to new collections, exclusive discounts, and
                trend updates.
              </p>
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit">JOIN</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
