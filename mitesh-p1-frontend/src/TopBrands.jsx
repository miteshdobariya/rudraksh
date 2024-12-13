import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const TopBrands = () => {
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
      '<span class="button-prev-slide">Prev</span>',
      '<span class="button-next-slide">Next</span>',
    ],
  };
  return (
    <>
      <div className="brand-section">
        <div className="container">
          <div className="section-title">
            <h2 className="title">Top Brands</h2>
          </div>
          <div className="brand-content">
            <div className="brand-row">
              <ul className="brands-slider">
                <div className="owl-wrapper-outer">
                  <OwlCarousel className="owl-theme" {...options}>
                    <li className="item">
                      <a href="#" title="Brand1">
                        <img
                          src="assets1/img/TopBrands1.jpg"
                          title="Brand1"
                          alt="Brand1"
                        />
                      </a>
                    </li>
                    <li className="item">
                      <a href="#" title="Brand2">
                        <img
                          src="assets1/img/TopBrands2.jpg"
                          title="Brand2"
                          alt="Brand2"
                        />
                      </a>
                    </li>
                    <li className="item">
                      <a href="#" title="Brand3">
                        <img
                          src="assets1/img/TopBrands3.jpg"
                          title="Brand3"
                          alt="Brand3"
                        />
                      </a>
                    </li>
                    <li className="item">
                      <a href="#" title="Brand4">
                        <img
                          src="assets1/img/TopBrands4.jpg"
                          title="Brand4"
                          alt="Brand4"
                        />
                      </a>
                    </li>
                    <li className="item">
                      <a href="#" title="Brand5">
                        <img
                          src="assets1/img/TopBrands5.jpg"
                          title="Brand5"
                          alt="Brand5"
                        />
                      </a>
                    </li>
                  </OwlCarousel>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TopBrands;
