import React, { Component } from "react";

export default class RenderingElements extends Component {
  username = "Khoa";
  age = 22;
  lop = "BC10";
  renderInfo = () => {
    return (
      <>
        <p>
          Hello {this.username} - Tuổi {this.age}
        </p>
        <p>Lớp: {this.lop}</p>
      </>
    );
  };
  render() {
    return (
      <div>
        <h3>Rendering Elements</h3>
        <p>Hello {this.username}</p>
        {this.renderInfo()}
      </div>
    );
  }
}
