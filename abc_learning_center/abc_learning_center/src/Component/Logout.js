import React, { Component } from "react";
import { Navigate } from "react-router-dom";
export default class Logout extends Component {
  // componentDidMount() {
  //   this.props.history.push({
  //     pathname: '/',
  //   });
  // }

  render() {
    localStorage.removeItem("login");
    localStorage.removeItem("userName");

    return (
      <div>
        Logout
        <Navigate
          to={{
            pathname: "/login",
          }}
        />
      </div>
    );
  }
}
