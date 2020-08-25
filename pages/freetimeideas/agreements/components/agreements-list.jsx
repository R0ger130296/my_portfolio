import React, { Component } from "react";

import { user_authentication } from "../../../../services/_webService";

class AgreementsList extends Component {
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
      <div className="h-screen w-1/5 bg-white bg-opacity-25 flex flex-col px-4 items-center">
        <div className="flex justify-center m-3 py-6">
          <button className="bg-white text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
            <span className="mr-2 uppercase">Create new agreement</span>
            <i className="fas fa-file-medical"></i>
          </button>
        </div>

        <div className="flex flex-wrap justify-center w-full">
          <button className="flex-shrink-0 overflow-hidden bg-white w-32 h-48 rounded-lg shadow-lg m-3 border-2 hover:bg-yellow-500">
            <span className="block font-semibold text-xl">agreement 1</span>
          </button>
        </div>
      </div>
    );
  }
}

export default AgreementsList;
