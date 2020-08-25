import Head from "next/head";
import React, { Component } from "react";

import { user_authentication } from "../../../services/_webService";
import AgreementsList from "./components/agreements-list";
import AgreementDoc from "./components/agreement-doc";

class Agreements extends Component {
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
      this.setState({ loading: false });
    }
  };

  render() {
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
          backgroundImage: `url("/freetimeideas/songs/the_invisible_kid.png")`,
        }}
      >
        <Head>
          <title>Agreements</title>
        </Head>
        <div className="flex">
          <AgreementsList />
          <AgreementDoc />
          <div className="w-1/5 bg-yellow-500">Chat</div>
        </div>
      </div>
    );
  }
}

export default Agreements;
