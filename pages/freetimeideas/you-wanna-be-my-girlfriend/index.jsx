import Head from "next/head";
import React, { Component } from "react";
import Swal from "sweetalert2";
import Router from "next/router";

import { user_authentication } from "../../../services/_webService";

class GfPageEn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    if (
      user_authentication(
        sessionStorage.getItem("secret_token"),
        "freetimeideas"
      ) !== false
    ) {
      this.setState({ loading: false });
    }
  }

  changePosition = (e) => {
    let element = document.getElementById(e);

    switch (element.className) {
      case "flex flex-row w-full justify-between":
        element.className = "flex flex-row-reverse w-full justify-between";
        break;
      default:
        element.className = "flex flex-row w-full justify-between";
        break;
    }
  };

  message = () => {
    Swal.fire({
      position: "center",
      title: "I knew you wanted to be my girlfriend. jajaja :3 <3",
      showConfirmButton: true,
    }).then(
      () =>
        (window.location.href = "https://www.youtube.com/watch?v=vtkBKRwSxUY")
    );
  };

  render() {
    if (this.state.loading) {
      return (
        <div className="w-full h-full py-32 flex flex-col items-center justify-center">
          <img
            className="w-32 h-32"
            id="loading"
            alt="loading"
            src="/freetimeideas/vimhash.webp"
          />
          <h1>loading...</h1>
        </div>
      );
    }

    return (
      <div
        className="h-screen w-screen flex flex-col justify-center items-center bg-cover"
        style={{ backgroundImage: `url("/freetimeideas/gf_background.webp")` }}
      >
        <Head>
          <title>You wanna be my girlfriend?</title>
        </Head>
        <div>
          <h1 className="uppercase font-bold py-1 px-2 my-2 bg-gray-300 bg-opacity-50">
            You wanna be my girlfriend?
          </h1>
          <div id="move" className="flex flex-row w-full justify-between">
            <button
              className="bg-gray-300 text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
              onClick={() => this.message()}
            >
              Yes
            </button>

            <button
              className="bg-gray-300 text-gray-800 font-bold rounded border-b-2 border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
              onMouseEnter={() => this.changePosition("move")}
              onClick={() => this.changePosition("move")}
            >
              No
            </button>
          </div>
        </div>
        <div className="flex flex-col fixed bottom-0 items-center text-white">
          <button
            className="bg-gray-300 text-gray-800 font-bold rounded border-b-2 border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center mb-2"
            onClick={() => Router.push("/freetimeideas/dashboard")}
          >
            <i className="fas fa-undo text-sm mr-2"></i>
            Back
          </button>
        </div>
      </div>
    );
  }
}

export default GfPageEn;
