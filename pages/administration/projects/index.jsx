import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { auth } from "../../services/firebase";

import Header from "../components/Header.jsx";
import GetAllProjects from "../components/GetAllProjects";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: auth().currentUser,
    };
  }

  render() {
    return (
      <div className="bg-black h-screen">
        <Header />
        <div className="flex justify-between leading-none p-2 md:p-4">
          <div></div>
          <button onClick={() => this.props.history.push("addproject")}>
            <i className="fas fa-plus-square text-4xl text-blue-500 hover:text-blue-700"></i>
          </button>
        </div>
        <GetAllProjects />
      </div>
    );
  }
}

export default withRouter(Projects);
