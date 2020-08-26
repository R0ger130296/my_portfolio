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
            className="p-4 max-w-xs mb-6 flex flex-col justify-center items-center"
            key={post.post_sec}
          >
            <img
              alt="pic"
              className="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center"
              src={post.post_pic}
            />
            <div className="bg-white shadow-lg rounded-lg overflow-hidden p-5">
              <div className="flex items-center">
                <div className="h-2 w-2 rounded-full m-1 bg-purple-500"></div>
                <div className="category-title flex-1 text-sm">
                  {post.post_dat}
                </div>
              </div>
              <div className="font-bold text-xl">{post.post_tit}</div>

              <div className="summary-post text-base text-justify">
                {post.post_sum}
                <button
                  className="bg-blue-100 text-blue-500 mt-4 block rounded p-2 text-sm"
                  onClick={() =>
                    Router.push({
                      pathname: `/knowledgebase/publicationContent`,
                      query: { id: post.post_sec },
                    })
                  }
                >
                  <span>Read More</span>
                  <i className="fas fa-chevron-right px-2"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default GetAllPosts;
