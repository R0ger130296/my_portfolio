import React, { Component } from "react";
import Router from "next/router";

import { user_authentication } from "../../../../services/_webService";

class AgreementDoc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount = async () => {
    if (
      user_authentication(
        sessionStorage.getItem("secret_token"),
        "freetimeideas"
      ) !== false
    ) {
      console.log("ok");
    }
  };

  render() {
    return (
      <div className="w-3/5 h-screen bg-gray-300 flex flex-col lg:px-32 md:px-12 sm:px-8 px-2">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="m-3">
              Users online:
              <span>userNames</span>
            </h1>
            <h1 className="m-3">
              Last modification by:
              <span>userName</span>
            </h1>
          </div>
          <div className="m-3">
            <button
              className="bg-white text-gray-800 font-bold rounded border-b-2 border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
              onClick={() => Router.push("/freetimeideas/dashboard")}
            >
              <span className="mr-2">Back</span>
              <i className="fas fa-undo"></i>
            </button>
          </div>
        </div>

        <div className="h-full py-4">
          <textarea
            className="h-full w-full text-sm rounded-lg resize-none border border-gray-700 px-6 py-6"
            placeholder="Write your text..."
          ></textarea>
        </div>
      </div>
    );
  }
}

export default AgreementDoc;
