import React, { Component } from "react";
import Router from "next/router";

class Home extends Component {
  componentDidMount() {
    Router.push("/knowledgebase");
  }

  render() {
    return <></>;
  }
}

export default Home;
