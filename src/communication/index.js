import React, { Component } from "react";
import Child from "./child";
import ChildFunction from "./child-function";
import Children from "./children";
export default class Comunication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Hứa Nguyễn Tân Khoa",
      age: 22,
    };
  }
  changeInfo = () => {
    this.setState({
      username: "Khoa",
      age: 18,
    });
  };
  handleReceiveFromChild=(infoReset)=>{
    this.setState({
        username: infoReset.name,
        age: infoReset.age
    })
  }
  render() {
    return (
      <div>
        <h3>Communication</h3>
        <p>
          Username:{this.state.username} - Age: {this.state.age}
        </p>
        <button
          className="btn btn-success"
          onClick={() => {
            this.setState({
              username: "Khoa",
              age: 18,
            });
          }}
        >
          Change Info
        </button>
        <Child username={this.state.username} age={this.state.age}
        getInfoReset={this.handleReceiveFromChild}
        />
        <ChildFunction username={this.state.username} age={this.state.age} />
        <Children>
          <p>
            Username: {this.state.username}- Age: {this.state.age}
          </p>
        </Children>
      </div>
    );
  }
}
