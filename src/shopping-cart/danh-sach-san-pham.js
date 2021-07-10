import React, { Component } from "react";
import SanPham from "./san-pham";

export default class DanhSachSanPham extends Component {
  rederListProduct=()=>{
    console.log(this.props.listProduct);
    this.props.listProduct.map((product)=>{
      return <SanPham key={product.maSP} product={product}/>

    })
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <SanPham />
          <SanPham />
          <SanPham />
        </div>
        {this.renderListProduct()}
      </div>
    );
  }
}
