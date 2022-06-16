import React, { Component } from "react";
import logopic from "../images/img5.jpg";
export class Termimg extends Component {
  render() {
    const imgstyle = {
      width: "500px",
      height: "500px",
    };
    return (
      <div>
        <img style={imgstyle} src={logopic} alt="content2" />
      </div>
    );
  }
}

export default Termimg;
