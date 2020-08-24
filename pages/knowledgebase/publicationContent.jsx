import React, { Component } from "react";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import GetPost from "./components/GetPost.jsx";
import RightSidebar from "./components/RightSidebar.jsx";

class PostContent extends Component {
  render() {
    return (
      <div>
        <Header />
        <section className="w-full flex lg:px-12 px-4 lg:flex-row md:flex-row flex-col">
          <div className="lg:w-5/6 md:w-1/2 w-full">
            <GetPost />
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

export default PostContent;
