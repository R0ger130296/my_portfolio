import React, { Component } from "react";
import Router from "next/router";

import { db } from "../../../services/_firebase";

class GetAllPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      allPosts: [],
    };
  }

  componentDidMount() {
    db.ref("posts").once("value", (element) => {
      let allPosts = [];
      element.forEach((item) => {
        allPosts.push(item.val());
      });
      allPosts.reverse();
      this.setState({ allPosts, loading: false });
    });
  }

  render() {
    const { allPosts } = this.state;
    if (this.state.loading) {
      return (
        <div className="w-full py-32 flex flex-col items-center justify-center">
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
      <div className="flex flex-wrap items-center justify-center px-4">
        {allPosts.map((post) => (
          <div
            className="my-1 mx-1 lg:my-4 lg:mx-4 w-64 border border-indigo-600 rounded-t-lg"
            key={post.post_sec}
          >
            <article className="overflow-hidden rounded-lg shadow-lg">
              <img alt="pic" className="h-64 w-full" src={post.post_pic} />

              <div className="flex flex-col leading-tight p-2 md:p-4">
                <h1 className="text-lg">{post.post_tit}</h1>
                <p className="text-gray-500 text-sm">{post.post_dat}</p>
              </div>

              <div className="flex items-center justify-between leading-tight p-2 md:p-4">
                <p className="text-gray-700">{post.post_sum}</p>
              </div>

              <div className="flex items-center justify-end leading-none p-2 md:p-4 cursor-pointer hover:text-indigo-600 text-gray-800">
                <button
                  className="font-bold"
                  onClick={() =>
                    Router.push({
                      pathname: `/knowledgebase/publicationContent`,
                      // id: post.post_sec,
                      query: { id: post.post_sec },
                    })
                  }
                >
                  Read More
                </button>
                <i className="fas fa-chevron-right px-2"></i>
              </div>
            </article>
          </div>
        ))}
      </div>
    );
  }
}

export default GetAllPosts;
