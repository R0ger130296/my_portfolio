import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import axios from "axios";
import ReactHtmlParser from "react-html-parser";

import { db } from "../../../services/_firebase";

export default function GetPost({ id }) {
  const [loading, setLoading] = useState(true),
    [post, setPost] = useState([]),
    [user, setUser] = useState([]),
    router = useRouter();

  useEffect(() => {
    const { id } = router.query;

    db.ref("posts").once("value", (element) => {
      let post = [];
      element.forEach((item) => {
        post.push(item.val());
      });
      post.forEach((item) => {
        if (item.post_sec === parseInt(id)) {
          let getPost = [];
          getPost.push(item);
          setPost(getPost);
          setLoading(false);
        }
      });
    });

    axios.get(`https://api.github.com/users/vimhash`).then((response) => {
      console.log(response.data);
      setUser(response.data);
    });
  }, []);

  if (loading) {
    return (
      <div className="w-full py-32 flex flex-col items-center justify-center">
        <Head>
          <title>Johao Perlaza - Loading... </title>
          <meta name="description" content="Loading..." />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta charSet="UTF-8" />
        </Head>
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  } else {
    return (
      <div className="flex">
        {post.map((post) => (
          <main className="w-4/5 mt-1">
            <Head>
              <title>Johao Perlaza - {post.post_tit} </title>
              <meta name="description" content={post.post_con} />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
              />
              <meta charSet="UTF-8" />
            </Head>
            <div className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative">
              <img
                src={post.post_pic}
                className="left-0 top-0 w-full h-full z-0 object-cover opacity-25 max-h-80"
              />
              <div className="p-4 absolute bottom-0 left-0 z-20">
                <a className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">
                  #technology
                </a>
                <h2 className="text-4xl font-bold leading-tight">
                  {post.post_tit}
                </h2>
                <div className="flex mt-3">
                  <img
                    src="/portfolio/profile-pic.png"
                    className="h-10 w-10 rounded-full mr-2 object-cover"
                  />
                  <div>
                    <p className="font-semibold text-sm">Johao Perlaza</p>
                    <p className="font-semibold text-xs">{post.post_dat}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
              <p className="pb-6">{ReactHtmlParser(post.post_con)}</p>
            </div>
          </main>
        ))}
        <div className="w-1/5 px-4">
          {/* <div
            id="app"
            className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4 mx-auto"
          >
            <github-user-card username="vimhash"></github-user-card>
          </div> */}
          <div
            className="cursor-pointer border mt-1"
            onClick={() => window.location.assign(user.blog)}
          >
            <div className="flex items-center px-6 py-3 bg-gray-900">
              <i className="fab fa-github text-2xl text-white"></i>
              <h1 className="mx-3 text-white font-semibold text-mg">
                Github Account
              </h1>
            </div>
            <img
              className="w-full h-56 object-cover object-center"
              src={user.avatar_url}
              alt="avatar"
            />
            <div className="flex items-center px-6 py-3 bg-gray-900">
              <i className="fas fa-eye text-2xl text-white"></i>
              <h1 className="mx-3 text-white font-semibold text-mg">
                {user.public_repos} Public Proyects
              </h1>
            </div>
            <div className="py-4 px-6">
              <h1 className="text-2xl font-semibold text-gray-800">
                {user.name}
              </h1>
              <p className="py-2 text-lg text-gray-700">{user.bio}</p>
              <div className="flex items-center mt-4 text-gray-700">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 20 20">
                  <path d="M15.573,11.624c0.568-0.478,0.947-1.219,0.947-2.019c0-1.37-1.108-2.569-2.371-2.569s-2.371,1.2-2.371,2.569c0,0.8,0.379,1.542,0.946,2.019c-0.253,0.089-0.496,0.2-0.728,0.332c-0.743-0.898-1.745-1.573-2.891-1.911c0.877-0.61,1.486-1.666,1.486-2.812c0-1.79-1.479-3.359-3.162-3.359S4.269,5.443,4.269,7.233c0,1.146,0.608,2.202,1.486,2.812c-2.454,0.725-4.252,2.998-4.252,5.685c0,0.218,0.178,0.396,0.395,0.396h16.203c0.218,0,0.396-0.178,0.396-0.396C18.497,13.831,17.273,12.216,15.573,11.624 M12.568,9.605c0-0.822,0.689-1.779,1.581-1.779s1.58,0.957,1.58,1.779s-0.688,1.779-1.58,1.779S12.568,10.427,12.568,9.605 M5.06,7.233c0-1.213,1.014-2.569,2.371-2.569c1.358,0,2.371,1.355,2.371,2.569S8.789,9.802,7.431,9.802C6.073,9.802,5.06,8.447,5.06,7.233 M2.309,15.335c0.202-2.649,2.423-4.742,5.122-4.742s4.921,2.093,5.122,4.742H2.309z M13.346,15.335c-0.067-0.997-0.382-1.928-0.882-2.732c0.502-0.271,1.075-0.429,1.686-0.429c1.828,0,3.338,1.385,3.535,3.161H13.346z"></path>{" "}
                </svg>
                <h1 className="px-2 text-sm">{user.followers} Seguidores</h1>
              </div>
              <div className="flex items-center mt-4 text-gray-700">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 20 20">
                  <path d="M10,1.375c-3.17,0-5.75,2.548-5.75,5.682c0,6.685,5.259,11.276,5.483,11.469c0.152,0.132,0.382,0.132,0.534,0c0.224-0.193,5.481-4.784,5.483-11.469C15.75,3.923,13.171,1.375,10,1.375 M10,17.653c-1.064-1.024-4.929-5.127-4.929-10.596c0-2.68,2.212-4.861,4.929-4.861s4.929,2.181,4.929,4.861C14.927,12.518,11.063,16.627,10,17.653 M10,3.839c-1.815,0-3.286,1.47-3.286,3.286s1.47,3.286,3.286,3.286s3.286-1.47,3.286-3.286S11.815,3.839,10,3.839 M10,9.589c-1.359,0-2.464-1.105-2.464-2.464S8.641,4.661,10,4.661s2.464,1.105,2.464,2.464S11.359,9.589,10,9.589"></path>{" "}
                </svg>
                <h1 className="px-2 text-sm">{user.location}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
