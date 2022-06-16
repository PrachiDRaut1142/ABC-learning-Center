import React, { Component } from "react";
import logopic from "../images/img4.jpg";
export class Contactimg extends Component {
  render() {
    const imgstyle = {
      width: "500px",
      height: "300px",
    };
    return (
      <div>
        <img style={imgstyle} src={logopic} alt="content2" />
      </div>
    );
  }
}

export default Contactimg;
