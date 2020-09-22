import React, { Component } from "react";
import Router from "next/router";
import ReactHtmlParser from "react-html-parser";

import { db } from "../../../services/_firebase";

class GetPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      post: [],
    };
  }

  componentDidMount() {
    const query = Router.query;
    this.getPost(parseInt(query.id));
  }

  getPost = (id) => {
    db.ref("posts").once("value", (element) => {
      let post = [];
      element.forEach((item) => {
        post.push(item.val());
      });
      post.forEach((item) => {
        if (item.post_sec === id) {
          let getPost = [];
          getPost.push(item);
          this.setState({ post: getPost, loading: false });
        }
      });
    });
  };

  render() {
    const { post } = this.state;
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
        <div className="m-3">
          <button
            className="bg-white text-gray-800 font-bold rounded border-b-2 border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
            onClick={() => Router.push("/knowledgebase")}
          >
            <span className="mr-2">Go back</span>
            <i className="fas fa-undo"></i>
          </button>
        </div>
        {post.map((post) => (
          <div className="my-1 mx-1 lg:my-4 lg:mx-4 w-full" key={post.post_sec}>
            <div className="flex lg:flex-row md:flex-row sm:flex-row flex-col items-center">
              <img alt="pic" className="h-64 w-64" src={post.post_pic} />
              <div>
                <div className="flex flex-col leading-tight p-2 md:p-4">
                  <h1 className="text-4xl">{post.post_tit}</h1>
                  <p className="text-gray-500 text-sm">{post.post_dat}</p>
                </div>

                <div className="flex items-center justify-between leading-tight p-2 md:p-4 text-gray-700">
                  {post.post_sum}
                </div>
              </div>
            </div>
            <div className="leading-tight p-2 md:p-4">
              {ReactHtmlParser(post.post_con)}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default GetPost;
