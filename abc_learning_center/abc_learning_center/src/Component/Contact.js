import React, { Component } from "react";
import Navbar from "./Navbar";
import Contactimg from "./imagecomponent/Contactimg";
import Footer from "./Footer";
export class Contact extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container mt-5 p-4 mb-5">
          <div className="row">
            <div className="col-6">
              <div className="col">
                <div className="row-1">
                  <Contactimg />
                </div>
                <div className="row-2">
                  <div className="col">
                    <div className="row-1 mt-2">
                      <i
                        class="fa-solid fa-location-dot"
                        style={{
                          border: "2px solid #3EB489",
                          borderRadius: "100px",
                          padding: "16px",
                          color: "#3EB489",
                        }}
                      ></i>
                      <span className="m-3">911, Mumbai, India</span>
                    </div>
                    <div className="row-1 mt-2">
                      <i
                        class="fas fa-phone-alt"
                        style={{
                          border: "2px solid #3EB489",
                          borderRadius: "100px",
                          padding: "15px",
                          color: "#3EB489",
                        }}
                      ></i>
                      <span className="m-3">+91 0987654321</span>
                    </div>
                    <div className="row-1 mt-2">
                      <i
                        class="fas fa-envelope"
                        style={{
                          border: "2px solid #3EB489",
                          borderRadius: "100px",
                          padding: "15px",
                          color: "#3EB489",
                        }}
                      ></i>{" "}
                      <span className="m-3">abclearning@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div class="form-group">
                <label class="form-label mt-4">Full Name:</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter your full name"
                />
              </div>
              <div class="form-group">
                <label class="form-label mt-4">Phone number:</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter phone number"
                />
              </div>
              <div class="form-group">
                <label class="form-label mt-4">Email address:</label>
                <input
                  type="email"
                  class="form-control"
                  placeholder="Enter your email"
                />
              </div>
              <div class="form-group">
                <label class="form-label mt-4">Message:</label>
                <textarea
                  class="form-control"
                  rows="3"
                  placeholder="Enter your message here"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  className="btn btn-primary"
                  style={{ color: "white", fontWeight: "bold" }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Contact;
