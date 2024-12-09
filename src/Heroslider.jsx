import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const Heroslider = () => {
    const options = {
        loop: true,
        margin: 1,
        items: 1,
        nav: true, // Enables navigation arrows
        autoplay: true,
        autoplayTimeout: 3000,
        autoplaySpeed: 800,
        navText: [
            '<span class="button-prev-slide">Prev</span>',
            '<span class="button-next-slide">Next</span>'
        ],
    };

    return (
        <>
            <OwlCarousel className="owl-theme" {...options}>
                <div className="item">
                    <div className="home-page">
                        <div className="home-main">
                            <div className="home-inner">
                                <div className="home-img">
                                    <img src="assets/img/home1.jpg" alt="home1" />
                                </div>
                                <div className="container">
                                    <div className="home-txt">
                                        <p>nail it with the<span> perfect set of colors</span></p>
                                        <strong>buy any 2 products and get 1 free</strong>
                                        <a className="action-button" href="#">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="item">
                    <div className="home-page">
                        <div className="home-main">
                            <div className="home-inner">
                                <div className="home-img">
                                    <img src="assets/img/home22.jpg" alt="home2" />
                                </div>
                                <div className="container">
                                    <div className="home-txt">
                                        <p>nail it with the<span> perfect set of colors</span></p>
                                        <strong>buy any 2 products and get 1 free</strong>
                                        <a className="action-button" href="#">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="item">
                    <div className="home-page">
                        <div className="home-main">
                            <div className="home-inner">
                                <div className="home-img">
                                    <img src="assets/img/home3.jpg" alt="home3" />
                                </div>
                                <div className="container">
                                    <div className="home-txt">
                                        <p>nail it with the<span> perfect set of colors</span></p>
                                        <strong>buy any 2 products and get 1 free</strong>
                                        <a className="action-button" href="#">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </OwlCarousel>
        </>
    );
};

export default Heroslider;
