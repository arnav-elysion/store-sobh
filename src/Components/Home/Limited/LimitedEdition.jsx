import React, { useState } from "react";
import "./LimitedEdition.css";

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../Features/Cart/cartSlice";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";

import { Link } from "react-router-dom";

import StoreData from "../../../Data/StoreData";

import { FiHeart } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa";

import toast from "react-hot-toast";

const LimitedEdition = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [wishList, setWishList] = useState({});

  const handleWishlistClick = (productID) => {
    setWishList((prevWishlist) => ({
      ...prevWishlist,
      [productID]: !prevWishlist[productID],
    }));
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleAddToCart = (product) => {
    const productInCart = cartItems.find(
      (item) => item.productID === product.productID
    );

    if (productInCart && productInCart.quantity >= 20) {
      toast.error("Product limit reached", {
        duration: 2000,
        style: {
          backgroundColor: "#ff4b4b",
          color: "white",
        },
        iconTheme: {
          primary: "#fff",
          secondary: "#ff4b4b",
        },
      });
    } else {
      dispatch(addToCart(product));
      toast.success(`${product.productName} added to cart!`, {
        duration: 2000,
        style: {
          backgroundColor: "#07bc0c",
          color: "white",
        },
        iconTheme: {
          primary: "#fff",
          secondary: "#07bc0c",
        },
      });
    }
  };

  const renderStars = (rating = 5) => {
    return Array(5)
      .fill()
      .map((_, index) => (
        <FaStar key={index} color="#FEC78A" size={10} />
      ));
  };

  return (
    <section className="limitedProductSection">
      <h2>
        Limited <span>Edition</span>
      </h2>
      <div className="limitedProductSlider">
        <div className="swiper-button image-swiper-button-next">
          <IoIosArrowForward />
        </div>
        <div className="swiper-button image-swiper-button-prev">
          <IoIosArrowBack />
        </div>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          loop={true}
          navigation={{
            nextEl: ".image-swiper-button-next",
            prevEl: ".image-swiper-button-prev",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[Navigation, Autoplay]}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 14,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          {StoreData.slice(2, 9).map((product) => (
            <SwiperSlide key={product.productID}>
              <div className="lpContainer">
                <div className="lpImageContainer">
                  <Link to={`/Product/${product.productID}`} onClick={scrollToTop}>
                    <img
                      src={product.frontImg}
                      alt={product.productName}
                      className="lpImage"
                    />
                  </Link>
                  <button 
                    className="lpAddToCartBtn" 
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
                <div
                  className="lpProductImagesCart"
                  onClick={() => handleAddToCart(product)}
                  aria-label="Add to cart"
                >
                  <FaCartPlus />
                </div>
                <div className="limitedProductInfo">
                  <div className="lpCategoryWishlist">
                    <p>{product.category || "Dresses"}</p>
                    <FiHeart
                      onClick={() => handleWishlistClick(product.productID)}
                      className={`wishlist-icon ${wishList[product.productID] ? "active" : ""}`}
                      aria-label={wishList[product.productID] ? "Remove from wishlist" : "Add to wishlist"}
                    />
                  </div>
                  <div className="productNameInfo">
                    <Link to={`/Product/${product.productID}`} onClick={scrollToTop}>
                      <h5>{product.productName}</h5>
                    </Link>
                    <p className="product-price">${product.productPrice}</p>
                    <div className="productRatingReviews">
                      <div className="productRatingStar">
                        {renderStars(product.rating)}
                      </div>
                      <span>{product.productReviews}</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default LimitedEdition;