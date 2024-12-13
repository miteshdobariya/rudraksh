import React from "react";

const HomeService = () => {
    return(
        <>
         <div className="home-service-block">
          <div className="container">
            <div className="row">
              <div className="service-main">
            <div className="service-inner">
            <div className="service-inner-main">
                <div className="service-img">
                  <img src="assets1/img/Free-Shipping.png" alt="" />
                </div>
                <div className="service-text">
                  <strong>Free Shipping</strong>
                  <p>
                  On all us orders above $100
                  </p>
                </div>
                </div>
              </div>
              <div className="service-inner">
              <div className="service-inner-main">
                <div className="service-img">
                  <img src="assets1/img/Secure-Payment.png" alt="" />
                </div>
                <div className="service-text">
                  <strong>Secure Payments</strong>
                  <p>
                  Secure Payment with PEV
                  </p>
                </div>
                </div>
              </div>
              <div className="service-inner">
              <div className="service-inner-main">
                <div className="service-img">
                  <img src="assets1/img/Refund-Policy.png" alt="" />
                </div>
                <div className="service-text">
                  <strong>Refund Policy</strong>
                  <p>
                  Refund within 30 days
                  </p>
                </div>
                </div>
              </div>
              <div className="service-inner">
              <div className="service-inner-main">
                <div className="service-img">
                  <img src="assets1/img/Online-Support.png" alt="" />
                </div>
                <div className="service-text">
                  <strong>Online Support</strong>
                  <p>
                  24 hours a day
                  </p>
                </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
        </>
    )
}
export default HomeService;