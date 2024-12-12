import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import './assets/css/mitesh1.css'; // Ensure you have imported the CSS

const Testimonial = () => {
  const options = {
    loop: true,
    margin: 1,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 800,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
    },
    navText: [
      '<span class="button-prev-slide">&lt</span>',
      '<span class="button-next-slide">&gt;</span>',
    ],
  };

  return (
    <div className="testimonial-section">
      <div className="container">
        <div className="section-title">
          <span>Testimonial</span>
        </div>
        <div className="testimonial-inner">
          <OwlCarousel className="owl-theme" {...options}>
          <div className="item">
              <div className="testimonial-content">
                <div className="testimonial-detail">
                  <div className="testimonial-img">
                    <img src="assets1/img/tetimonial-img-1.jpg" alt="testimonial1"/>
                  </div>
                  <div className="testimonial-desc">
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <strong>John Doe -
                    <span>Customer</span>
                  </strong>
                </div>
                </div>     
              </div>
            </div>
            <div className="item">
              <div className="testimonial-content">
                <div className="testimonial-detail">
                  <div className="testimonial-img">
                    <img src="assets1/img/tetimonial-img-2.jpg" alt="testimonial1"/>
                  </div>
                  <div className="testimonial-desc">
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <strong>Mark Doe -
                    <span>Customer</span>
                  </strong>
                </div>
                </div>     
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;