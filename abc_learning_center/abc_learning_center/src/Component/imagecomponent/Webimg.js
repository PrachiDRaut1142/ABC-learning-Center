import React, { Component } from "react";
import pic from "../images/img7.jpg";
export class Webimg extends Component {
  render() {
    const imgstyle = {
      width: "500px",
      height: "350px",
    };
    return (
      <div>
        <img style={imgstyle} src={pic} alt="content1" />
      </div>
    );
  }
}

export default Webimg;
