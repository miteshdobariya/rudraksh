import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import { CiCreditCard1 } from "react-icons/ci";
import { MdFreeCancellation } from "react-icons/md";
import { AiOutlineZoomIn } from "react-icons/ai";
import { Link } from "react-router-dom";
const Productinner = () => {
    const options = {
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplaySpeed: 1000,
        // responsive: {
        //     0: {
        //         items: 1,
        //     },
        //     600: {
        //         items: 2,
        //     },
        //     1000: {
        //         items: 3,
        //     },
    }
    const options2 = {
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplaySpeed: 1000,
        responsive: {
            0: { items: 1 },      // 1 item for small screens
            600: { items: 2 },    // 2 items for medium screens
            1000: { items: 4 },   // 4 items for large screens
        },
    };



    return (
        <>

            
            <div className="inner-page">
                <div className="inner-page-main">
                    <div className="container">
                        <div className="inner-page-in">
                            <div className="cln">
                                <div className="main-img">

                                    <img src="assets1/img/p1.jpg" />


                                    <div className="img-txt">
                                        new
                                    </div>
                                    <div className="zoom">
                                        <AiOutlineZoomIn className="z1"/>
                                    </div>
                                </div>
                                {/* OwlCarousel for sliding room images */}
                                <OwlCarousel className="owl-theme" {...options}>
                                    <div className="item">
                                        <img src="assets1/img/p1.jpg" />
                                    </div>
                                    <div className="item">
                                        <img src="assets1/img/p1.jpg" />
                                    </div>
                                    <div className="item">
                                        <img src="assets1/img/p1.jpg" />
                                    </div>

                                </OwlCarousel>



                            </div>

                            <div className="cln cln2">
                                <div className="title">
                                    <h2>accusantium dolore</h2>
                                    <strong>$150.00 per night</strong>
                                </div>

                                <div className="product-detail">
                                    <div className="product-description">
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                        <ul>
                                            <li>Room Size: 35m²</li>
                                            <li>King-size Bed</li>
                                            <li>Private Balcony with City View</li>
                                            <li>Complimentary Breakfast</li>
                                            <li>Free Wi-Fi and Flat-screen TV</li>
                                            <li>Ensuite Bathroom with Rain Shower</li>
                                        </ul>
                                    </div>

                                    <div className="product-action">
                                        <div className="product-addto-cart">
                                            <form method="post">
                                                <a className="action-button" href="#" >Book Now</a>
                                            </form>
                                        </div>

                                        <div className="product-additional-info">
                                            <div className="product-qty">
                                                <div className="txt">
                                                    Limited availability! Only <span>3</span> rooms left.
                                                </div>
                                                <div className="bar-block">
                                                    <div className="bar">
                                                        <span className="inner-bar"></span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="shipping">
                                                <div className="icon">
                                                    <i className="fa-sharp fa-regular fa-truck-fast"></i>
                                                </div>
                                                <div className="i-txt">
                                                    <span>Free cancellation within 24 hours</span>
                                                    <span>Check-in Date: March 5, 2024</span>
                                                </div>
                                            </div>

                                            <div className="social">
                                                <span>share</span>
                                                <ul>
                                                    <li><a href="https://www.facebook.com/"><FaFacebookF /></a></li>
                                                    <li><a href="https://twitter.com/intent/tweet?text=Check+out+this+Deluxe+Room+at+our+hotel https://hotelwebsite.com"><FaTwitter /></a></li>
                                                    <li><a href="https://www.pinterest.com/pin/create/button/?media=https://hotelwebsite.com/room.jpg&url=https://hotelwebsite.com">

                                                        <FaPinterestP /></a></li>
                                                </ul>
                                            </div>


                                            <div className="all-product">
                                                <div className="block">
                                                    <span className="item">
                                                        <div className="icon"><FaLock /></div>
                                                    </span>
                                                    <div className="block-title">
                                                        <span>Security Policy</span>
                                                        <p>Your booking is secure and protected.</p>
                                                    </div>
                                                </div>

                                                <div className="block">
                                                    <span className="item">
                                                        <div className="icon"><CiCreditCard1 /></div>
                                                    </span>
                                                    <div className="block-title">
                                                        <span>Payment Policy</span>
                                                        <p>We accept all major credit cards.</p>
                                                    </div>
                                                </div>

                                                <div className="block">
                                                    <span className="item">
                                                        <div className="icon"><MdFreeCancellation /></div>
                                                    </span>
                                                    <div className="block-title">
                                                        <span>Cancellation Policy</span>
                                                        <p>Free cancellation up to 24 hours before check-in.</p>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="samecat-main">
                            <div className="title">
                                <p>
                                    15 other products in the same category
                                </p>
                            </div>
                            <div className="data">

                                <OwlCarousel className="owl-theme" {...options2}>
                                    <div className="item">
                                        <div className="cln">
                                            <div className="cln-img">
                                                <div className="img">
                                                    <img src="assets1/img/p1.jpg" alt="products" />
                                                </div>
                                                <div className="new">
                                                    <p>new</p>
                                                </div>

                                            </div>
                                            <div className="cln-detail">
                                                <h3>
                                                    <Link to={"/productinner"}>perspiciatis unde</Link></h3>
                                                <div className="price">$99.00</div>
                                                <div className="action-btn">
                                                    <a href="#">Add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="cln">
                                            <div className="cln-img">
                                                <div className="img">
                                                    <img src="assets1/img/p1.jpg" alt="products" />
                                                </div>
                                                <div className="new">
                                                    <p>new</p>
                                                </div>

                                            </div>
                                            <div className="cln-detail">
                                                <h3>
                                                    <Link to={"/productinner"}>perspiciatis unde</Link></h3>
                                                <div className="price">$99.00</div>
                                                <div className="action-btn">
                                                    <a href="#">Add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="cln">
                                            <div className="cln-img">
                                                <div className="img">
                                                    <img src="assets1/img/p1.jpg" alt="products" />
                                                </div>
                                                <div className="new">
                                                    <p>new</p>
                                                </div>

                                            </div>
                                            <div className="cln-detail">
                                                <h3>
                                                    <Link to={"/productinner"}>perspiciatis unde</Link></h3>
                                                <div className="price">$99.00</div>
                                                <div className="action-btn">
                                                    <a href="#">Add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </OwlCarousel>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Productinner