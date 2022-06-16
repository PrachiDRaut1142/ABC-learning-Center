import React, { Component } from "react";
import logopic from "../images/img2.jpg";
export class Loginimg extends Component {
  render() {
    const imgstyle = {
      width: "600px",
      height: "500px",
    };
    return (
      <div>
        <img style={imgstyle} src={logopic} alt="content2" />
      </div>
    );
  }
}

export default Loginimg;
