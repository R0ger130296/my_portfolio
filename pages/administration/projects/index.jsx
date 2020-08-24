import React, { Component } from "react";
import Router from "next/router";

import Header from "../components/Header.jsx";
import GetAllProjects from "../components/GetAllProjects";
import { user_authentication } from "../../../services/_webService";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    if (
      user_authentication(
        sessionStorage.getItem("secret_token"),
        "administration"
      ) !== false
    ) {
      console.log("ok");
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div className="flex justify-between leading-none p-2 md:p-4">
          <div></div>
          <button
            onClick={() => Router.push("/administration/projects/add_project")}
          >
            <i className="fas fa-plus-square text-4xl text-blue-500 hover:text-blue-700"></i>
          </button>
        </div>
        <GetAllProjects />
      </div>
    );
  }
}

export default Projects;
