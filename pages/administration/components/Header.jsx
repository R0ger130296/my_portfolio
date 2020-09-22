import React, { Component } from "react";
import Router from "next/router";
import { user_authentication } from "../../../services/_webService";

class Header extends Component {
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
      <header>
        <nav>
          <div className="py-2 px-12 bg-blue-900 flex justify-between">
            <div>
              <h1 className="font-bold text-gray-100">Admin Control Panel</h1>
            </div>
            <div className="flex">
              <img
                alt="pic"
                className="border border-black rounded-full w-6 h-6"
                src="/vimhash.webp"
              />
              <button className="font-bold text-gray-100 px-4 dropdown">
                Hi, Johao
                <i className="fas fa-angle-down ml-2"></i>
                <div
                  className="font-bold text-gray-100 dropdown-menu hidden absolute bg-blue-900 hover:bg-blue-800 -ml-2 py-2 px-2"
                  // onClick={() => logout()}
                >
                  <i className="fas fa-sign-out-alt mr-2"></i>
                  Logout
                </div>
              </button>
            </div>
          </div>
          <div className="py-2 px-12 bg-blue-900 flex justify-between">
            <div className="flex">
              <button
                className="font-bold text-gray-100 px-2 hover:bg-blue-800"
                onClick={() => Router.push("/administration/dashboard")}
              >
                <i className="fas fa-chart-line mr-2"></i>
                Dashboard
              </button>
              <button
                className="font-bold text-gray-100 px-2 hover:bg-blue-800"
                onClick={() => Router.push("/administration/publications")}
              >
                <i className="fas fa-file-import mr-2"></i>
                Publications
              </button>
              <button
                className="font-bold text-gray-100 px-2 hover:bg-blue-800"
                onClick={() => Router.push("/administration/projects")}
              >
                <i className="fas fa-project-diagram mr-2"></i>
                Projects
              </button>
            </div>
            <div>
              <input placeholder="Search..." />
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
