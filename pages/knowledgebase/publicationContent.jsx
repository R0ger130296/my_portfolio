import React from "react";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import GetPost from "./components/GetPost.jsx";

const PostContent = () => {
  return (
    <div>
      <Header />
      <section className="w-full">
        <GetPost />
      </section>
      <Footer />
    </div>
  );
};

export default PostContent;
