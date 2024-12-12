import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="block-content">
              <div>
                <h3 className="footer-title">Contact Us</h3>
              </div>
              <ul className="footer-block-content">
                <li className="contact-info">
                  <span className="contact-label">Address:</span>
                  <p className="contact-label-p">
                    Etrend Gymspa <br />
                    180 Street, Arizona <br />
                    85002 <br />
                    United States
                  </p>
                </li>
                <li className="contact-info">
                  <span className="contact-label">Mail us:</span>
                  <a href="#">snehitaliya001@mdsrudraksh.in</a>
                  <a href="#">miteshdobariya2206@mdsrudraksh.in</a>
                </li>
                <li className="contact-info">
                  <span className="contact-label">Phone:</span>
                  <a href="#">+91 9099727340</a>
                  <a href="#">+91 9723068999</a>
                </li>
              </ul>
            </div>
            <div className="block-content">
              <div>
                <h3 className="footer-title">Products</h3>
              </div>
              <ul className="footer-block-content footer-links">
                <li>
                  <a href="#">Prices drop</a>
                </li>
                <li>
                  <a href="#">New products</a>
                </li>
                <li>
                  <a href="#">Best sales</a>
                </li>
                <li>
                  <a href="#">Sitemap</a>
                </li>
                <li>
                  <a href="#">Stores</a>
                </li>
              </ul>
            </div>
            <div className="block-content">
              <div>
                <h3 className="footer-title">Our Company</h3>
              </div>
              <ul className="footer-block-content footer-links">
                <li>
                  <a href="#">Delivery</a>
                </li>
                <li className="contact-info">
                  <a href="#">Legal Notice</a>
                </li>
                <li>
                  <a href="#">Terms and conditions of use</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Secure payment</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
              </ul>
            </div>
            <div className="block-content">
              <div>
                <h3 className="footer-title">
                  <span className="contact-label">Your Account</span>
                </h3>
              </div>
              <ul className="footer-block-content footer-links">
                <li>
                  <a href="#">Personal info</a>
                </li>
                <li>
                  <a href="#">Orders</a>
                </li>
                <li>
                  <a href="#">Credit slips</a>
                </li>
                <li>
                  <a href="#">Addresses</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-bottom-inner">
              <div className="inner-left">
                <p className="copyright">
                  <a href="#"> Sneh Italiya </a>
                </p>
              </div>
              <div className="inner-right">
                <p className="copyright">
                  <a href="#"> mdsrudraksh.in</a>
                </p>
              </div>
              <div className="right">
                <p className="copyright">
                  <a href="#"> Mitesh Dobariya</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
