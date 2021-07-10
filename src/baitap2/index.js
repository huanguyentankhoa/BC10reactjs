import React from "react";
import Header from "./header";
import Carousel from "./carousel";
import Listcard from "./listcard";
import Wwd from "./what-we-do";
import Contact from "./contact";
import Footer from "./footer";
function Baitap2(){
    return (
    <>
        <Header/>
        <Carousel/>
        <div class="container">
            <div class="row">
                <Wwd/>
                <Contact/>
            </div>
        </div>
       
        <Listcard/>
        <Footer/>
    </>
    );
}
export default Baitap2;