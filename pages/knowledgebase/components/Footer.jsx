import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="bg-white px-6 py-4 flex justify-between items-center border-t-2 border-indigo-600">
        <div>
          <div className="text-gray-600">
            &copy; Designed with the{" "}
            <i className="fas fa-heart text-red-700 icon-beat"></i> by Johao
            Perlaza
          </div>
        </div>

        <div className="flex items-center -mx-2">
          <button
            className="flex items-center mx-2 text-gray-600 hover:text-indigo-600"
            onClick={() => window.open("https://github.com/vimhash")}
          >
            <i className="fab fa-github text-2xl"></i>
          </button>

          <button
            className="flex items-center mx-2 text-gray-600 hover:text-indigo-600"
            onClick={() =>
              window.open("https://www.linkedin.com/in/perlazajohao/")
            }
          >
            <i className="fab fa-linkedin text-2xl"></i>
          </button>
        </div>
      </footer>
    );
  }
}

export default Footer;