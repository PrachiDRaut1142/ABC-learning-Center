import React, { Component } from "react";
import regpic from "../images/img3.jpg";
export class Registerimg extends Component {
  render() {
    const imgstyle = {
      width: "600px",
      height: "400px",
    };
    return (
      <div>
        <img style={imgstyle} src={regpic} alt="content3" />
      </div>
    );
  }
}

export default Registerimg;
