import React, { Component } from "react";
import Footer from "./Footer";
import Aboutimg from "./imagecomponent/aboutimg";
import Aboutimg1 from "./imagecomponent/aboutimg1";
import Aboutimg2 from "./imagecomponent/aboutimg2";
import Navbar from "./Navbar";
export class About extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container" style={{ border: 0 }}>
          <div class="row ml-5">
            <Aboutimg />
            <div className="text-center"></div>
          </div>
          <h1 className="mt-3">About us</h1>

          <hr />
        </div>
        <div className="container mt-4">
          <div className="row">
            <div className="col-6">
              <Aboutimg1 />
            </div>
            <div className="col-6 mt-5">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
          </div>
        </div>
        <div className="container mt-4 mb-5">
          <div className="row">
            <div className="col-6 mt-5">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
            <div className="col-6">
              <Aboutimg2 />
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default About;
