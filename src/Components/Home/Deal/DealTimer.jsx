import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import Product_2 from "../../../Assets/Products/product_2.webp";
import StoreData from "../../../Data/StoreData";
import "./DealTimer.css";

const DealTimer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const Product_2=(StoreData[1].frontImg);

  const [timeLeft, setTimeLeft] = useState({
    days: 6,
    hours: 21,
    minutes: 57,
    seconds: 17,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const { days, hours, minutes, seconds } = prev;
        if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(timer);
          return prev;
        }
        let newSeconds = seconds - 1;
        let newMinutes = minutes;
        let newHours = hours;
        let newDays = days;

        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }
        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }
        if (newHours < 0) {
          newHours = 23;
          newDays -= 1;
        }

        return {
          days: newDays,
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (value) => {
    return value.toString().padStart(2, "0");
  };

  return (
    <div className="deal-timer-container">
      <div className="deal-timer-content">
        <div className="deal-left-section">
          <h3 className="deal-subtitle">REFINED ELEGANCE</h3>
          <h2 className="deal-title">DEAL OF THE WEEK</h2>
          <p className="deal-description">
            Discover our exclusive Selenite Crystal Pendant from our premium men's jewelry collection.
            Timeless design meets contemporary sophistication.
          </p>
          
          <div className="timer-container">
            <div className="timer-block">
              <span className="timer-value">{timeLeft.days}</span>
              <span className="timer-label">Days</span>
            </div>
            <span className="timer-separator">:</span>
            <div className="timer-block">
              <span className="timer-value">{formatTime(timeLeft.hours)}</span>
              <span className="timer-label">Hours</span>
            </div>
            <span className="timer-separator">:</span>
            <div className="timer-block">
              <span className="timer-value">{formatTime(timeLeft.minutes)}</span>
              <span className="timer-label">Minutes</span>
            </div>
            <span className="timer-separator">:</span>
            <div className="timer-block">
              <span className="timer-value">{formatTime(timeLeft.seconds)}</span>
              <span className="timer-label">Seconds</span>
            </div>
          </div>
          
          <Link to="/shop" onClick={scrollToTop} className="shop-button">
            SHOP COLLECTION
          </Link>
        </div>
        
        <div className="deal-right-section">
          <div className="deal-image-container">
            <span className="discount-badge">20% OFF</span>
            <img src={Product_2} alt="Selenite Crystal Pendant" className="deal-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealTimer;