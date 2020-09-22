import Head from "next/head";
import React, { Component } from "react";
import Router from "next/router";

import { user_authentication } from "../../../services/_webService";
import { db } from "../../../services/_firebase-freetimeideas";
import moment from "moment";
import jwt_decode from "jwt-decode";

class Agreements extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      allAgreements: [],
      agre_sec: null,
      agre_title: null,
      agre_content: "",
      show_content: null,
      docID_selected: null,
    };
  }

  componentDidMount = async () => {
    if (
      user_authentication(
        sessionStorage.getItem("secret_token"),
        "freetimeideas"
      ) !== false
    ) {
      await db.ref("agreements").on("value", (element) => {
        let allAgreements = [];

        element.forEach((item) => {
          allAgreements.push(item.val());
        });

        this.setState({ allAgreements, loading: false });
      });

      await db.ref("agreements").on("value", (element) => {
        let data = [];
        let agre_sec = [];
        element.forEach((item) => {
          data.push(item.val());
        });

        data.map((element) => agre_sec.push(element.agre_sec));

        agre_sec.sort(this.fromLargestToSmallest);
        let id = agre_sec;

        if (id.length === 0) {
          this.setState({ agre_sec: 1 });
        } else {
          this.setState({ agre_sec: parseInt(id) + 1 });
        }
      });
    }
  };

  fromLargestToSmallest(elem1, elem2) {
    return elem2 - elem1;
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  newAgreement = () => {
    let title = prompt("Add the agreement title");

    if (title != null) {
      db.ref("agreements/agreement" + this.state.agre_sec).set({
        agre_sec: this.state.agre_sec,
        agre_title: title,
        agre_date_created: moment().format("MMMM Do YYYY, h:mm:ss a"),
      });
    }
  };

  selectAgreement = (id) => {
    let agreementSelected;

    this.state.allAgreements.forEach((item) => {
      if (item.agre_sec === id) {
        agreementSelected = item;
      }
    });

    if (
      agreementSelected.agre_content !== "" &&
      agreementSelected.agre_content !== undefined
    ) {
      this.setState({
        docID_selected: id,
        agre_content: agreementSelected.agre_content,
        show_content: true,
      });
    } else {
      this.setState({
        docID_selected: id,
        agre_content: "",
        show_content: true,
      });
    }
  };

  editAgreement = (id) => {
    const decoded = jwt_decode(sessionStorage.getItem("secret_token"));
    console.log(decoded);

    db.ref("agreements/agreement" + id).update({
      agre_lastUserModified: "",
      agre_content: this.state.agre_content,
      agre_date_updated: moment().format("MMMM Do YYYY, h:mm:ss a"),
    });
  };

  render() {
    const { allAgreements, agre_content, show_content } = this.state;

    if (this.state.loading) {
      return (
        <div className="w-full h-full py-32 flex flex-col items-center justify-center">
          <img
            className="w-32 h-32"
            id="loading"
            alt="loading"
            src="/vimhash.webp"
          />
          <h1>loading...</h1>
        </div>
      );
    }

    return (
      <div
        className="h-screen w-screen bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url("/freetimeideas/agreements.webp")`,
        }}
      >
        <Head>
          <title>Agreements</title>
        </Head>
        <div className="flex">
          {/* AGREEMENTS-LIST START */}
          <div className="h-screen w-1/5 bg-white bg-opacity-25 flex flex-col px-4 items-center">
            <div className="flex justify-center m-3 py-6">
              <button
                className="bg-white text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
                onClick={() => this.newAgreement()}
              >
                <span className="mr-2 uppercase">Create new agreement</span>
                <i className="fas fa-file-medical"></i>
              </button>

              <button
                className="bg-white text-gray-800 font-bold rounded border-b-2 border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center mx-1"
                onClick={() => Router.push("/freetimeideas/dashboard")}
              >
                <span className="mr-2">Back</span>
                <i className="fas fa-undo"></i>
              </button>
            </div>

            <div className="flex flex-wrap justify-center w-full">
              {allAgreements.map((agre) => (
                <button
                  className="flex-shrink-0 overflow-hidden bg-white w-32 h-48 rounded-lg shadow-lg m-3 border-2 hover:bg-yellow-500"
                  key={agre.agre_sec}
                  onClick={() => this.selectAgreement(agre.agre_sec)}
                >
                  <span className="block font-semibold text-xl">
                    {agre.agre_title}
                  </span>
                </button>
              ))}
            </div>
          </div>
          {/* AGREEMENTS-LIST END */}

          {/* AGREEMENT-DOC START */}
          {show_content ? (
            <div className="w-3/5 h-screen bg-gray-300 flex flex-col lg:px-32 md:px-12 sm:px-8 px-2">
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="m-3">
                    Last modification by:
                    <span>userName</span>
                  </h1>
                </div>
                <div className="m-3">
                  <button
                    className="bg-white text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center mx-1"
                    onClick={() =>
                      this.editAgreement(this.state.docID_selected)
                    }
                  >
                    <span className="mr-2">Save</span>
                    <i className="fas fa-save"></i>
                  </button>
                </div>
              </div>
              <div className="h-full py-4">
                <textarea
                  className="h-full w-full text-sm rounded-lg resize-none border border-gray-700 px-6 py-6"
                  placeholder="Write your text..."
                  name="agre_content"
                  value={agre_content}
                  // onKeyPress={this.editAgreement(this.state.docID_selected)}
                  onChange={this.changeHandler}
                ></textarea>
              </div>
            </div>
          ) : (
            <div className="w-3/5 h-screen flex justify-center items-center">
              <p className="font-bold uppercase text-2xl text-white">
                Select your agreement to continue
              </p>
            </div>
          )}
          {/* AGREEMENT-DOC END */}

          <div className="w-1/5 bg-yellow-500">Chat</div>
        </div>
      </div>
    );
  }
}

export default Agreements;
