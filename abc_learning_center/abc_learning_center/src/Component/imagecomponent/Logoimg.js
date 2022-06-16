import React, { Component } from "react";
import logopic from "../images/logopic.png";
export class Logoimg extends Component {
  render() {
    const imgstyle = {
      width: "100px",
      height: "50px",
    };
    return (
      <div>
        <img style={imgstyle} src={logopic} alt="content2" />
      </div>
    );
  }
}

export default Logoimg;
