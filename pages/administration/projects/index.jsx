import React, { Component } from "react";
import Router from "next/router";

import Header from "../components/Header.jsx";
import GetAllProjects from "../components/GetAllProjects";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    if (!sessionStorage.getItem("token")) {
      console.error("You don't have enough permissions");
      Router.push("/administration");
    }
  }

  render() {
    return (
      <div className="bg-black h-screen">
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
