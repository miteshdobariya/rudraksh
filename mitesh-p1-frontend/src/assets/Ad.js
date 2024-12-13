import React from "react";
const Ad = () => {
    return (
        <>
            <div className="ad-main">
                <div className="container">
                    <div className="ad-inner">
                        <div className="ad-left">
                            <img src="assets1/img/ad11.jpg" alt="" />
                            <div className="txt">
                                <p>
                                    discount
                                    <br />
                                    <strong>50% off</strong>
                                    <br />
                                    women
                                    <br />
                                    collection
                                </p>
                                <a className="action-button" href="#">shop new</a>
                            </div>
                        </div>
                        <div className="ad-right">
                            <div className="ad-above">
                                <img src="assets1/img/ad2.jpg" alt="" />
                                <div className="txt">
                                    <p className="t1">
                                    Facewash & Shampoo
                                    <div>
                                        Up To 20% Off
                                    </div>
                                    </p>
                                   
                                    <a className="action-button" href="#">shop now</a>
                                </div>
                            </div>
                            <div className="ad-above">
                                <img src="assets1/img/ad3.jpg" alt="" />
                                <div className="txt">
                                    <p className="t1">
                                    Cosmetic Ever
                                    <div>
                                    Discount 20% Off
                                    </div>
                                    </p>
                                   
                                    <a className="action-button" href="#">shop now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Ad;