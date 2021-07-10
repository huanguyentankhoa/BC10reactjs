import React, { Component } from 'react'
import ExampleHandlingEvent from './example';
export default class HandlingEvent extends Component {
    handleEvent(){
        console.log(123);
    }
    handleEventParams(username,age){
        console.log(username,age);
    }
    render() {
        return (
            <div>
                <h3>Handling Events</h3>
                <button className="btn btn-success" onClick={this.handleEvent}>HandlingEvent</button>
                <button className="btn btn-danger" onClick={()=>{this.handleEventParams("Cybersoft",18)}}>HandlingEvent</button>
                <ExampleHandlingEvent/>
            </div>
        )
    }
}
