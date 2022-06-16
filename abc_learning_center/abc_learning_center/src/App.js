import React, { Component } from "react";
import Home from "./Component/Home";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Login from "./Component/Login";
import Register from "./Component/Register";
import Results from "./Component/Results";
import Contact from "./Component/Contact";
import About from "./Component/About";
import Terms from "./Component/Terms";
import Logout from "./Component/Logout";
export class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/results" element={<Results />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
