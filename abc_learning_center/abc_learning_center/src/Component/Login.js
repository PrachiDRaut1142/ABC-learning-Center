import React, { Component } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import Loginimg from "./imagecomponent/Loginimg";
import "./style/style.css";
import Footer from "./Footer";
import { Navigate } from "react-router-dom";
import swal from "sweetalert";
import Swal from "sweetalert2";
export class Login extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      userPassword: "",
      redirect: false,
    };
  }
  InputHandle = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  Savedata = (event) => {
    //alert(this.state.userName + " " + this.state.userPassword);
    axios
      .post("http://localhost:9090/authenticate", this.state)
      .then((res) => {
        localStorage.setItem("login", res.data);
        localStorage.setItem("userName", this.state.userName);
        this.setState({
          redirect: true,
          
        });
        swal({
          title: 'Logged in Successfully!',
          icon: "success",
          button: "Done",
          
        });
        //this.callMarks();
        //alert("successfully logged in " + res.data);
      })
      .catch(
        (err) => Swal.fire({
  icon: 'error',
  title: 'Wrong Login Credentials',
  text: 'Login Failed, Try again',
})
        //alert("unsuccessful Login " + err);
      );
    event.preventDefault();
   
  };
  // callMarks() {
  //   this.props.history.push({
  //     pathname: "/results",
  //     state: { detail: this.state.userName},
  //   });
  // }

  render() {
    const redirect = this.state.redirect;
    if (redirect == true) {
      return (
        <Navigate
          to={{
            pathname: "/results",
          }}
        />
      );
    }
    return (
      <div>
        <Navbar />
        <div className="container mt-5 mb-5">
          <div className="row one pr-2">
            <div className="col-7 ">
              <Loginimg />
            </div>
            <div className="col-5 mt-5">
              <form onSubmit={this.Savedata}>
                <h1 className="text-center">Login</h1>
                <div className="form-group">
                  <label className="form-label mt-4">Username:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your username"
                    name="userName"
                    value={this.state.userName}
                    onChange={this.InputHandle}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label mt-4">Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your password"
                    name="userPassword"
                    value={this.state.userPassword}
                    onChange={this.InputHandle}
                    required
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ color: "white", fontWeight: "bold" }}
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Login;
