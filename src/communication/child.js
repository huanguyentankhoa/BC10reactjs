import React, { Component } from 'react'

export default class Child extends Component {
    hanldeResetInfo=()=>{
        const infoReset = {
            username: "Cybersoft",
            age: 15
        }
        this.props.getInfoReset(infoReset);
        
    }
    render() {
        return (
            <div>
                <h4>Child</h4>
                <p>Username: {this.props.username} - Age: {this.props.age}</p>
                <button className="btn btn-danger" onClick={this.hanldeResetInfo}>Reset Info</button>
            </div>
        )
    }
}
