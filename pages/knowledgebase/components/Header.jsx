import React, { Component } from "react";
import Router from "next/router";

class Header extends Component {
  render() {
    return (
      <header className="bg-white shadow border-t-4 border-indigo-600">
        <div className="mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <button
              className="flex items-center text-gray-800 hover:text-indigo-600"
              onClick={() => Router.push("/portfolio")}
            >
              <i className="fas fa-info"></i>
              <span className="mx-3 font-medium text-sm md:text-base">
                My Portfolio
              </span>
            </button>
            <button
              className="text-gray-800 hover:text-indigo-600 border-gray-800 hover:border-indigo-600 border-b-2"
              onClick={() => Router.push("/knowledgebase")}
            >
              Knowledge Base
            </button>
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
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
