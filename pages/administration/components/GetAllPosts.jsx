import React, { Component } from "react";
import Router from "next/router";
import Swal from "sweetalert2";
import { db } from "../../../services/_firebase";

import { user_authentication } from "../../../services/_webService";

class GetAllPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      allPosts: [],
    };
  }

  componentDidMount() {
    if (
      user_authentication(
        sessionStorage.getItem("secret_token"),
        "administration"
      ) !== false
    ) {
      db.ref("posts").on("value", (element) => {
        let allPosts = [];
        element.forEach((item) => {
          allPosts.push(item.val());
        });
        allPosts.reverse();
        this.setState({ loading: false, allPosts });
      });
    }
  }

  updatePost = (p_post_sec, p_post_tit, p_post_sum, p_post_con, p_post_pic) => {
    localStorage.setItem("post_sec", p_post_sec);
    localStorage.setItem("post_tit", p_post_tit);
    localStorage.setItem("post_sum", p_post_sum);
    localStorage.setItem("post_con", p_post_con);
    localStorage.setItem("post_pic", p_post_pic);
    Router.push("/administration/publications/update_publication");
  };

  deletePost = (id) => {
    db.ref("posts/post" + id)
      .remove()
      .then(
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Post deleted",
          showConfirmButton: false,
          timer: 1500,
        })
      );
  };

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
            className="my-1 mx-1 lg:my-4 lg:mx-4 w-64 border border-indigo-600 bg-white rounded-t-lg"
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

              <div className="flex items-center justify-between leading-none p-2 md:p-4">
                <i
                  className="fas fa-trash-alt text-red-500 hover:text-red-700 "
                  onClick={() => this.deletePost(post.post_sec)}
                ></i>
                <i
                  className="fas fa-edit text-blue-500 hover:text-blue-700"
                  onClick={() =>
                    this.updatePost(
                      post.post_sec,
                      post.post_tit,
                      post.post_sum,
                      post.post_con,
                      post.post_pic
                    )
                  }
                ></i>
              </div>
            </article>
          </div>
        ))}
      </div>
    );
  }
}

export default GetAllPosts;
