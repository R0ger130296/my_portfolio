import Head from "next/head";
import React, { Component } from "react";
import Swal from "sweetalert2";
import { db } from "../../../services/_firebase";
import Router from "next/router";

class DoYouLikeMe_En extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      question: null,
      counter: 0,
      show_options: false,
      allQuestions: [],
    };
  }

  componentDidMount = async () => {
    if (!sessionStorage.getItem("token")) {
      console.error("You don't have enough permissions");
      Router.push("/freetimeideas");
    } else {
      await db.ref("questions").once("value", (element) => {
        let allQuestions = [];

        element.forEach((item) => {
          allQuestions.push(item.val());
        });

        this.setState({ allQuestions, loading: false });
      });
      this.showQuestions();
    }
  };

  showQuestions() {
    if (this.state.counter <= this.state.allQuestions.length - 1) {
      if (this.state.allQuestions[this.state.counter].show_options) {
        this.setState({
          show_options: true,
          question: this.state.allQuestions[this.state.counter].question,
          counter: this.state.counter + 1,
          // base: this.state.allQuestions[this.state.counter].base,
        });
      } else {
        this.setState({
          show_options: false,
          question: this.state.allQuestions[this.state.counter].question,
          counter: this.state.counter + 1,
          // base: this.state.allQuestions[this.state.counter].base,
        });
      }
    } else {
      this.setState({
        question:
          "You still need more reasons to like it? Let's go out more often and get to know each other",
        base: "Do you agree to go out more often? ^^",
        show_options: false,
      });
    }
  }

  message = () => {
    Swal.fire({
      position: "center",
      title: "I like you too Ara :3",
      showConfirmButton: true,
      confirmButtonText: "<3",
    }).then(() => (window.location.href = "https://youtu.be/4G0uhL6W2_k?t=15"));
  };

  render() {
    const { question, base, show_options } = this.state;

    if (this.state.loading) {
      return (
        <div className="w-full h-full py-32 flex flex-col items-center justify-center">
          <img
            className="w-32 h-32"
            id="loading"
            alt="loading"
            src="/administration/vimhash.png"
          />
          <h1>loading...</h1>
        </div>
      );
    }

    return (
      <div
        className="h-screen w-screen flex flex-col justify-center items-center bg-cover"
        style={{
          backgroundImage: `url("/freetimeideas/doyoulikeme.webp")`,
        }}
      >
        <Head>
          <title>Do you like me?</title>
        </Head>
        <div>
          <h1 className="uppercase font-bold py-1 px-2 my-2 bg-gray-300 bg-opacity-50 text-2xl w-64 text-center">
            {question}
          </h1>
          {show_options ? (
            <div className="flex w-full justify-between">
              <button
                className="bg-gray-300 text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
                onClick={() => this.message()}
              >
                Yes
              </button>

              <button
                className="bg-gray-300 text-gray-800 font-bold rounded border-b-2 border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
                onClick={() => this.showQuestions()}
              >
                No
              </button>
            </div>
          ) : (
            <div className="flex w-full justify-center">
              <button
                className="bg-gray-300 text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
                onClick={() => this.showQuestions()}
              >
                Next
              </button>
            </div>
          )}
        </div>
        <div className="flex flex-col fixed bottom-0 items-center text-white">
          {/* <div
            className="shadow-xl hover:text-blue-700 px-6"
            onClick={() => this.props.history.push("es")}
          >
            <i className="fas fa-language text-5xl"></i>
          </div> */}
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

export default DoYouLikeMe_En;
