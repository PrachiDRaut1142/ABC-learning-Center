import React, { Component } from "react";
import aboutpic from "../images/img6.jpg";
export class Aboutimg2 extends Component {
  render() {
    const imgstyle = {
      width: "400px",
      height: "300px",
    };
    return (
      <div>
        <img style={imgstyle} src={aboutpic} alt="content2" />
      </div>
    );
  }
}

export default Aboutimg2;
