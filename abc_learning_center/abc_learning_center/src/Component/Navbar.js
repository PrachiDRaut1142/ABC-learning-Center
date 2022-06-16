import React, { Component } from "react";
import Logoimg from "./imagecomponent/Logoimg";
export class Navbar extends Component {
  render() {
    const loggedin = localStorage.getItem("userName");
    console.log(loggedin);
    var login = "";
    if (loggedin == null) {
      login = (
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <a className="nav-link" href="/register">
              Register
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/login">
              Login
            </a>
          </li>
        </ul>
      );
    } else {
      login = (
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <a className="nav-link" href="/logout">
              Logout
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/results">
              Result
            </a>
          </li>
        </ul>
      );
    }

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <Logoimg />
            <a className="navbar-brand" href="/">
              ABC Learning Center
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <a className="nav-link active" href="/">
                    Home
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/terms">
                    Terms and Conditions
                  </a>
                </li>

                {login}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
