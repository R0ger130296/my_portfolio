import React, { Component } from "react";
import Router from "next/router";

class Home extends Component {
  componentDidMount() {
    Router.push("/portfolio");
  }

  render() {
    return <div></div>;
  }
}

export default Home;
