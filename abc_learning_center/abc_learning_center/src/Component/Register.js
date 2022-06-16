import React, { Component } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import Registerimg from "./imagecomponent/Registerimg";
import "./style/style.css";
import Footer from "./Footer";
import { Navigate } from "react-router-dom";
import swal from "sweetalert";
export class Register extends Component {
  constructor() {
    super();
    this.state = {
      fullName: "",
      userName: "",
      qualification: "",
      userPassword: "",
      state: "",
      city: "",
      redirect: false,
    };
  }
  InputHandle = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  Savedata = (event) => {
    // alert(
    //   this.state.fullName +
    //     " " +
    //     this.state.userName +
    //     " " +
    //     this.state.qualification +
    //     " " +
    //     this.state.userPassword +
    //     " " +
    //     this.state.state +
    //     " " +
    //     this.state.city
    // );
    axios
      .post("http://localhost:9090/register", this.state)
      .then((res) => {
        // this.callLog();
        this.setState({
          redirect: true,
         
        });
      })
      .catch((err) => alert("unsuccessful registration" + err));
    event.preventDefault();
    swal({
      title: 'Registered Successfully!',
      icon: "success",
      button: "Done",
    });
  };

  // callLog() {
  //   alert("Registered successfully");
  //   this.props.history.push({
  //     pathname: "/login",
  //   });
  // }

  render() {
    const redirect = this.state.redirect;
    if (redirect == true) {
      return (
        <Navigate
          to={{
            pathname: "/login",
          }}
        />
      );
    }
    return (
      <div>
        <Navbar />
        <div className="container mt-3 p-3 mb-5">
          <div className="row">
            <div className="col-7 mt-5 img3">
              <Registerimg />
            </div>
            <div className="col-5">
              <form onSubmit={this.Savedata}>
                <h2 className="text-center">Register</h2>
                <div className="form-group">
                  <label className="form-label mt-4">Full Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your full name"
                    name="fullName"
                    value={this.state.fullName}
                    onChange={this.InputHandle}
                    required
                  />
                </div>
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
                  <label className="form-label mt-4">Qualification:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your qualification"
                    name="qualification"
                    value={this.state.qualification}
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
                <div className="row">
                  <div className="form-group col-6">
                    <label className="form-label mt-4">State:</label>
                    <br />
                    <select
                      className="form-select"
                      name="state"
                      value={this.state.state}
                      onChange={this.InputHandle}
                      required
                    >
                      <option value="" disabled selected>
                        Select
                      </option>
                      <option>Maharashtra</option>
                    </select>
                  </div>
                  <div className="form-group col-6">
                    <label className="form-label mt-4">City:</label>
                    <br />
                    <select
                      className="form-select"
                      name="city"
                      value={this.state.city}
                      onChange={this.InputHandle}
                      required
                    >
                       <option value="" disabled selected>
                        Select
                      </option>
                      <option>Mumbai</option>
                      <option>Ahmadnagar </option>
                      <option>Akola </option>
                      <option>Amravati </option>
                      <option>Aurangabad </option>
                      <option>Bhandara </option>
                      <option>Bhusawal </option>
                      <option>Bid </option>
                      <option>Buldhana </option>
                      <option>Chandrapur </option>
                      <option>Daulatabad </option>
                      <option>Dhule </option>
                      <option>Jalgaon </option>
                      <option>Kalyan </option>
                      <option>Karli </option>
                      <option>Kolhapur </option>
                      <option>Mahabaleshwar </option>
                      <option>Malegaon </option>
                      <option>Matheran </option>
                      <option>Mumbai </option>
                      <option>Nagpur </option>
                      <option>Nanded </option>
                      <option>Nashik </option>
                      <option>Osmanabad </option>
                      <option>Pandharpur </option>
                      <option>Parbhani </option>
                      <option>Pune </option>
                      <option>Ratnagiri </option>
                      <option>Sangli </option>
                      <option>Satara </option>
                      <option>Sevagram </option>
                      <option>Solapur </option>
                      <option>Thane </option>
                      <option>Ulhasnagar </option>
                      <option>Vasai-Virar </option>
                      <option>Wardha </option>
                      <option>Yavatmal </option>
                    </select>
                  </div>
                </div>
                <div className="text-center mt-2">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ color: "white", fontWeight: "bold" }}
                  >
                    Register
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

export default Register;
