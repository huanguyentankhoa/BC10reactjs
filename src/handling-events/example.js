import React, { Component } from "react";

export default class ExampleHandlingEvent extends Component {
  isLoggin = false;
    handleLogin=()=>{
        this.isLoggin=true;
        console.log(this.isLoggin);
        this.renderHTML();
    }
  renderHTML = () => {
    // if (!this.isLoggin) {
    //   this.isLoggin = true;
    //   return (
    //     <>
    //       <button className="btn btn-success" >
    //         Login
    //       </button>
    //     </>
    //   );
    // } else {
    //   this.isLoggin = false;
    //   return (
    //     <>
    //       <h2>Hello Cybersoft</h2>
    //     </>
    //   );
    // }
    return this.isLoggin ? (
      <h2>Hello Cybersoft</h2>
    ) : (
      <button className="btn btn-success" onClick={this.handleLogin}>Login</button>
    );
  };
  render() {
    return (
      <div>
        <h3>Example Handling Event</h3>
        {this.renderHTML()}
      </div>
    );
  }
}
