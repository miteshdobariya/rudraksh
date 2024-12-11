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
            '<span class="button-prev-slide">&lt</span>',
            '<span class="button-next-slide">&gt;</span>'
            
        ],
        
    };

    return (
        <>
            <OwlCarousel className="owl-theme" {...options}>
                <div className="item">
                    <div className="home-main">

                        <div className="home-inner">
                            <div className="home-img">
                                <img src="assets1/img/hero1.jpg" alt="home1" />
                            </div>
                           
                            <div className="container">
                                <div className="home-txt">
                                    <p>nail it with the<div> perfect set of colors</div></p>
                                    <strong>buy any 2 products and get 1 free</strong>
                                    <div className="action-button">
                                        <a href="#">shopnow</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="home-main">

                        <div className="home-inner">
                            <div className="home-img">
                                <img src="assets1/img/hero2.jpg" alt="home1" />
                            </div>
                            <div className="container">
                                <div className="home-txt">
                                    <p>nail it with the<div> perfect set of colors</div></p>
                                    <strong>buy any 2 products and get 1 free</strong>
                                    <div className="action-button">
                                        <a href="#">shopnow</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="home-main">

                        <div className="home-inner">
                            <div className="home-img">
                                <img src="assets1/img/hero3.jpg" alt="home1" />
                            </div>
                            <div className="container">
                                <div className="home-txt">
                                    <p>nail it with the<div> perfect set of colors</div></p>
                                    <strong>buy any 2 products and get 1 free</strong>
                                    <div className="action-button">
                                        <a href="#">shopnow</a>
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
