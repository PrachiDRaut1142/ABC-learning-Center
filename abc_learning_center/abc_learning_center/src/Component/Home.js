import React, { Component } from "react";
import Navbar from "./Navbar";
import Webimg from "./imagecomponent/Webimg";
import Footer from "./Footer";
export class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <div className="container mt-5 mb-4 p-4">
          <div className="row ">
            <div className="col-6">
              <h5 className="mt-1">A PERFECT LEARNING CENTER</h5>
              <h1>FOR YOUR KIDS</h1>
              <p className="mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <div className="row mt-2">
                <div className="col-2"></div>
                <div className="col-4">
                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{ color: "white", fontWeight: "bold" }}
                  >
                    Read more
                  </button>
                </div>
                <div className="col-4">
                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{ color: "white", fontWeight: "bold" }}
                  >
                    Contact us
                  </button>
                </div>
                <div className="col-2"></div>
              </div>
            </div>
            <div className="col-6">
              <Webimg />
            </div>
          </div>
        </div>
        <hr />
        <div className="container mt-5" style={{ border: 0 }}>
          <h2>What we offer</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.{" "}
          </p>

          <div className="row p-5">
            <div className="col-6">
              <div className="col">
                <div className="row-1">
                  <div className="row">
                    <div className="col-2">
                      <i
                        class="fas fa-user-shield"
                        style={{
                          border: "2px solid #3EB489",
                          borderRadius: "100px",
                          padding: "15px",
                          color: "#3EB489",
                        }}
                      ></i>
                    </div>
                    <div className="col-10">
                      {" "}
                      <span>
                        Service <br />
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row-2">
                  <div className="row">
                    <div className="col-2">
                      <i
                        class="fa-solid fa-microscope"
                        style={{
                          border: "2px solid #3EB489",
                          borderRadius: "100px",
                          padding: "15px",
                          color: "#3EB489",
                        }}
                      ></i>
                    </div>
                    <div className="col-10">
                      {" "}
                      <span>
                        Service <br />
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row-3">
                  <div className="row">
                    <div className="col-2">
                      <i
                        class="fa-solid fa-book-open-reader"
                        style={{
                          border: "2px solid #3EB489",
                          borderRadius: "100px",
                          padding: "15px",
                          color: "#3EB489",
                        }}
                      ></i>
                    </div>
                    <div className="col-10">
                      {" "}
                      <span>
                        Service <br />
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="col">
                <div className="row-1">
                  <div className="row">
                    <div className="col-2">
                      <i
                        class="fa-solid fa-graduation-cap"
                        style={{
                          border: "2px solid #3EB489",
                          borderRadius: "100px",
                          padding: "15px",
                          color: "#3EB489",
                        }}
                      ></i>
                    </div>
                    <div className="col-10">
                      {" "}
                      <span>
                        Service <br />
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row-2">
                  <div className="row">
                    <div className="col-2">
                      <i
                        class="fa-solid fa-school"
                        style={{
                          border: "2px solid #3EB489",
                          borderRadius: "100px",
                          padding: "15px",
                          color: "#3EB489",
                        }}
                      ></i>
                    </div>
                    <div className="col-10">
                      {" "}
                      <span>
                        Service <br />
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row-3">
                  <div className="row">
                    <div className="col-2">
                      <i
                        class="fa-solid fa-chalkboard-user"
                        style={{
                          border: "2px solid #3EB489",
                          borderRadius: "100px",
                          padding: "15px",
                          color: "#3EB489",
                        }}
                      ></i>
                    </div>
                    <div className="col-10">
                      {" "}
                      <span>
                        Service <br />
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
