import React from "react";
import Header from "./Header";
import Heroslider from "./Heroslider";
import Ad from "./assets/Ad";
import Products from "./Products";
import Banner from "./Banner";
import Home from "./Home"
const Main = () => {
    return (


        <>
            

            <Heroslider />
            <Ad />
            <Products />
            <Banner/>
            <Header />
            <Heroslider/>
            <Ad/>
            <Products/>
            <Home/>
        </>
    )
}
export default Main;