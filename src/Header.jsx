import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaGooglePlusG } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Header = () => {

    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.clear();
        navigate("/login")
    }


    return (
        <>
            <div className="header-main">
                <div className="container">
                    <div className="header-inner">
                        <div className="cln">
                            <div className="logo">
                                <img src="assets1/img/logo.jpg" alt="jkbnjj" />
                            </div>

                        </div>
                        <div className="cln c2">
                            <div className="login-btn">
                                {
                                    localStorage.getItem("loginnn") &&

                                    <Link className="btn-login" onClick={handleLogout}>Logout</Link>

                                }
                                {
                                    !localStorage.getItem("loginnn") &&

                                    <Link className="btn-login" to={"/login"}>Login</Link>

                                }
                            </div>
                            <div className="cart">
                                <p><FaShoppingCart /></p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="header-bottom-main">
                    <div className="container">
                        <div className="header-bottom-inner">
                            <ul className="list-data cln">
                                <li className="item">
                                    <Link to={"/"}>Home</Link>
                                </li>
                                <li className="item">
                                    <Link to={"/about"}> shop</Link>
                                </li>
                                <li className="item">
                                    <Link to={"/Roominner"}>products</Link>
                                    <ul className="sub-list">
                                        <li>
                                            <a href="#">All</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="item">
                                    <Link to={"/Classic"}>catagory</Link>
                                    <ul className="sub-list s1">
                                        <li>
                                            <a href="#">top</a>
                                        </li>
                                        <li>
                                            <a href="#">jeans</a>
                                        </li>
                                        <li>
                                            <a href="#">t-shirts</a>
                                        </li>

                                    </ul>
                                </li>
                                <li className="item">
                                    <a href="#">contact us</a>
                                </li>
                                <li className="item">
                                    <Link to={"/roominsert"}>page</Link>
                                </li>
                            </ul>
                            <ul className="list-data cln">
                                <li className="item">
                                    <a href="#" icon1>
                                        <FaSquareFacebook />

                                    </a>
                                </li>
                                <li className="item">
                                    <a href="#" icon1>
                                        <FaInstagram />

                                    </a>
                                </li>
                                <li className="item">
                                    <a href="#" icon1>
                                        <FaGooglePlusG />

                                    </a>
                                </li>
                                <li className="item i1">
                                    <a href="#" icon1>
                                        <FaTwitter />

                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
export default Header;