import React, { Component } from "react";
import aboutpic from "../images/img9.jpg";
export class Aboutimg extends Component {
  render() {
    const imgstyle = {
      width: "900px",
      height: "300px",
    };
    return (
      <div>
        <img style={imgstyle} src={aboutpic} alt="content2" />
      </div>
    );
  }
}

export default Aboutimg;
