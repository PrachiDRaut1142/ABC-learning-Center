import React, { Component } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import Footer from "./Footer";
import Logoimg from "./imagecomponent/Logoimg";
export class Results extends Component {
  constructor() {
    super();
    this.state = {
      marksdata: [],
    };
  }
  componentDidMount() {
    let token = "Bearer " + localStorage.getItem("login");
    var my = localStorage.getItem("userName");
    console.log(token);
    axios
      .get("http://localhost:9090/marks/" + my, {
        headers: { Authorization: token },
      })
      .then((res) =>
        this.setState({
          marksdata: res.data,
        })
      )
      .catch((err) => console.log(err));
  }
  render() {
    var myarray = this.state.marksdata;
    const header = (
      <>
        {" "}
        <h3>User Name:</h3>
        <h3>Marks:</h3>
      </>
    );
    const datais = myarray.map((m, key) => (
      <>
        <h4>{m.userName}</h4>
        <h4>{m.userMarks}</h4>
      </>
    ));
    return (
      <>
        <Navbar />
        <div className="container p-3 mt-5 mb-5 ">
        <h1 className="text-center pb-3"><Logoimg/>ABC Learning Center</h1>

          <div className="row center d-flex align-items-center justify-content-center pb-4">
            <i
              class="fa-solid fa-user-tie fa-9x"
              style={{
                border: "2px solid #3EB489",
                borderRadius: "100px",
                padding: "45px",
                color: "#3EB489",
              }}
            ></i>
          </div>
          <div className="row">
            <div className="col-4"></div>
            <div className="col-6">
              <div className="row">
                <div className="col-6">{header}</div>
                <div className="col-6">{datais}</div>
              </div>
            </div>
            <div className="col-2"></div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default Results;
