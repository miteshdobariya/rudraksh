import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const ShopByCategory = () => {
  const options = {
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 800,
    responsive: {
      0: { items: 1 },
      600: { items: 3 },
      1000: { items: 5 },
    },
    navText: [
      '<span class="button-prev-slide1">&lt;</span>',
      '<span class="button-next-slide1">&gt;</span>',
    ],
    
  };

  return (
    <div className="category">
      <div className="container">
        <div className="section-title">
          <span class="pad-right">Dive In</span>
        </div>
        <div className="item-row">
          <div className="owl-wrapper-outer">
            <OwlCarousel className="owl-theme" {...options}>
              <div className="item">
                <div className="catcontent">
                  <a href="#" class="hover-btn">
                    <img src="assets1/img/DiveIn1.jpg" alt="DiveIn1" />
                  </a>
                </div>
                <a href="#">
                  <p class="caption">Fashion</p>
                </a>
              </div>
              <div className="item">
                <div className="catcontent">
                  <a href="#" class="hover-btn">
                    <img src="assets1/img/DiveIn2.jpg" alt="DiveIn2" />
                  </a>
                </div>
                <a href="#">
                  <p class="caption">Mobiles</p>
                </a>
              </div>
              <div className="item">
                <div className="catcontent">
                  <a href="#" class="hover-btn btn btn-primary">
                    <img src="assets1/img/DiveIn3.jpg" alt="DiveIn3" />
                  </a>
                </div>
                <a href="#">
                  <p class="caption">Sports</p>
                </a>
              </div>
              <div className="item">
                <div className="catcontent">
                  <a href="#" class="hover-btn btn btn-primary">
                    <img src="assets1/img/DiveIn4.jpg" alt="DiveIn4" />
                  </a>
                </div>
                <a href="#">
                  <p class="caption">Jwellery</p>
                </a>
              </div>
              <div className="item">
                <div className="catcontent">
                  <a href="#" class="hover-btn btn btn-primary">
                    <img src="assets1/img/DiveIn5.jpg" alt="DiveIn5" />
                  </a>
                </div>
                <a href="#">
                  <p class="caption">Cameras</p>
                </a>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;



