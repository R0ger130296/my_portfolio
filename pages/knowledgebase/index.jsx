import Head from "next/head";

import React, { Component } from "react";

import Header from "./components/Header.jsx";
import GetAllPosts from "./components/GetAllPosts.jsx";
import RightSidebar from "./components/RightSidebar.jsx";
import Footer from "./components/Footer.jsx";

class Home extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Knowledgebase</title>
        </Head>
        <Header />
        <section className="w-full flex lg:px-12 px-4 lg:flex-row md:flex-row flex-col">
          <div className="lg:w-5/6 md:w-1/2 w-full">
            <GetAllPosts />
          </div>

          <div className="lg:w-1/6 md:w-1/2 w-full py-6 flex justify-center">
            <RightSidebar />
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Home;
