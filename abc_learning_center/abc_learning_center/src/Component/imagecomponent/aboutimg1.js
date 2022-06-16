import React, { Component } from "react";
import aboutpic from "../images/img1.jpg";
export class Aboutimg1 extends Component {
  render() {
    const imgstyle = {
      width: "450px",
      height: "250px",
    };
    return (
      <div>
        <img style={imgstyle} src={aboutpic} alt="content2" />
      </div>
    );
  }
}

export default Aboutimg1;
