import React, { Component } from "react";
import Router from "next/router";

class Header extends Component {
  logout = async () => {
    await sessionStorage.clear("token");
    Router.push("/freetimeideas");
  };

  render() {
    return (
      <header className="bg-white shadow border-b-4 border-indigo-600">
        <div className="mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button
                className="flex items-center mx-2 text-gray-800 hover:text-indigo-600"
                onClick={() => window.open("https://github.com/vimhash")}
              >
                <i className="fab fa-github text-2xl"></i>
              </button>

              <button
                className="flex items-center mx-2 text-gray-800 hover:text-indigo-600"
                onClick={() =>
                  window.open("https://www.linkedin.com/in/perlazajohao/")
                }
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </button>
            </div>

            <button
              className="text-gray-800 hover:text-indigo-600 border-gray-800 hover:border-indigo-600 border-b-2"
              onClick={() => this.logout()}
            >
              <i className="fas fa-sign-out-alt mr-2"></i>
              Logout
            </button>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
