import React from "react";
import Header from "./Header";
import Heroslider from "./Heroslider";
import Ad from "./assets/Ad";
import Products from "./Products";
import Home from "./Home"
const Main = () => {
    return (
        <>
            <Header />
            <Heroslider/>
            <Ad/>
            <Products/>
            <Home/>
        </>
    )
}
export default Main;