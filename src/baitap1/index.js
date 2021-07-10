import React, {Component} from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import Content from "./content";
import Footer from "./footer";

class Baitap1 extends Component{
    render(){
        return (
            <div>
                <Header/>
                <div className="contents">
                    <Content/>
                    <Sidebar/>
                </div>
               
                <Footer/>
            </div>
        
        );
    }
}
export default Baitap1;