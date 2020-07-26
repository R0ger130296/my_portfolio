import React, { Component } from "react";
import Router from "next/router";

import Header from "../components/Header.jsx";
import GetAllPosts from "../components/GetAllPosts";

class Publications extends Component {
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
      <div className="bg-black h-full">
        <Header />
        <div className="flex justify-between leading-none p-2 md:p-4">
          <div></div>
          <button
            onClick={() =>
              Router.push("/administration/publications/add_publication")
            }
          >
            <i className="fas fa-plus-square text-4xl text-blue-500 hover:text-blue-700"></i>
          </button>
        </div>
        <GetAllPosts />
      </div>
    );
  }
}

export default Publications;
