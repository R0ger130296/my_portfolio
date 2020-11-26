import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import ReactHtmlParser from "react-html-parser";

import { db } from "../../../services/_firebase";

export default function GetPost({ id }) {
  const [loading, setLoading] = useState(true),
    [post, setPost] = useState([]),
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
        <img
          className="w-32 h-32 animate-spin"
          alt="loading"
          src="/vimhash.webp"
        />
        <h1 className="animate-pulse uppercase  ">loading...</h1>
      </div>
    );
  } else {
    return (
      <div className="flex flex-wrap items-center justify-center px-4 bg-gray-300">
        {post.map((post) => (
          <div className="my-1 mx-1 lg:my-4 lg:mx-4 w-full" key={post.post_sec}>
            <Head>
              <title>Johao Perlaza - {post.post_tit} </title>
              <meta name="description" content={post.post_con} />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
              />
              <meta charSet="UTF-8" />
            </Head>
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
        <div className="m-3">
          <button
            className="bg-white text-gray-800 font-bold rounded border-b-2 border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
            onClick={() => router.push("/knowledgebase")}
          >
            <span className="mr-2">Go back</span>
            <i className="fas fa-undo"></i>
          </button>
        </div>
      </div>
    );
  }
}
