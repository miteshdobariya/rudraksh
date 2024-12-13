import React from "react";
import Header from "./Header";
import Heroslider from "./Heroslider";
import HomeService from "./HomeService"
import ShopByCategory from "./ShopByCategory"
import Ad from "./assets/Ad";
import Products from "./Products";
import Banner from "./Banner";
import Testinomial from "./Testinomial"
import TopBrands from "./TopBrands";
import Footer from "./Footer"
const Main = () => {
    return (


        <>
            

            <Heroslider />
            <HomeService/>
            <ShopByCategory/>
            <Products />
            <Ad />
            <Testinomial/>
            <TopBrands/>
            <Banner/>
            <Footer/>
        </>
    )
}
export default Main;