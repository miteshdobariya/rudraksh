import React from "react";
import { Link } from "react-router-dom";
const Products=()=>{
    return(
        <>
            <div className="product-main">
                <div className="container">
                    <div className="title">
                        <p>Featured Collection</p>
                    </div>
                    <div className="body">
                        <div className="body-inner">
                            
                            <div className="cln">
                                <div className="cln-img">
                                    <div className="img">
                                        <img src="assets1/img/p1.jpg" alt="products" />
                                    </div>
                                    <div className="new">
                                        <p>new</p>
                                    </div>
                                    <div className="sale">
                                        <p>on sale!</p>
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
                                    <Link to={"/productinner"}>omnis iste</Link></h3>
                                    <div className="price">$199.00</div>
                                    <div className="action-btn">
                                        <a href="#">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="cln">
                                <div className="cln-img">
                                    <div className="img">
                                        <img src="assets1/img/p1.jpg" alt="products" />
                                    </div>
                                    <div className="new">
                                        <p>new</p>
                                    </div>
                                    <div className="sale">
                                        <p>on sale!</p>
                                    </div>
                                </div>
                                <div className="cln-detail">
                                    <h3><Link to={"/productinner"}>omnis iste</Link></h3>
                                    <div className="price">$299.00</div>
                                    <div className="action-btn">
                                        <a href="#">Add to cart</a>
                                    </div>
                                </div>
                            </div>
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
                                    <h3><Link to={"/productinner"}>omnis iste</Link></h3>
                                    <div className="price">$249.00</div>
                                    <div className="action-btn">
                                        <a href="#">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="cln">
                                <div className="cln-img">
                                    <div className="img">
                                        <img src="assets1/img/p1.jpg" alt="products" />
                                    </div>
                                    <div className="new">
                                        <p>new</p>
                                    </div>
                                    <div className="sale">
                                        <p>on sale!</p>
                                    </div>
                                </div>
                                <div className="cln-detail">
                                    <h3><Link to={"/productinner"}>omnis iste</Link></h3>
                                    <div className="price">$289.00</div>
                                    <div className="action-btn">
                                        <a href="#">Add to cart</a>
                                    </div>
                                </div>
                            </div>
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
                                    <h3><Link to={"/productinner"}>omnis iste</Link></h3>
                                    <div className="price">$279.00</div>
                                    <div className="action-btn">
                                        <a href="#">Add to cart</a>
                                    </div>
                                </div>
                            </div>
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
                                    <h3><Link to={"/productinner"}>omnis iste</Link></h3>
                                    <div className="price">$349.00</div>
                                    <div className="action-btn">
                                        <a href="#">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="cln">
                                <div className="cln-img">
                                    <div className="img">
                                        <img src="assets1/img/p1.jpg" alt="products" />
                                    </div>
                                    <div className="new">
                                        <p>new</p>
                                    </div>
                                    <div className="sale">
                                        <p>on sale!</p>
                                    </div>
                                </div>
                                <div className="cln-detail">
                                    <h3><Link to={"/productinner"}>omnis iste</Link></h3>
                                    <div className="price">$399.00</div>
                                    <div className="action-btn">
                                        <a href="#">Add to cart</a>
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
export default Products;