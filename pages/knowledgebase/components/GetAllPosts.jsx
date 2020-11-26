import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { db } from "../../../services/_firebase";

export default function GetAllPosts() {
  const [loading, setLoading] = useState(true),
    [allPosts, setAllPost] = useState([]),
    router = useRouter();

  useEffect(() => {
    db.ref("posts").once("value", (element) => {
      let allPosts = [];
      element.forEach((item) => {
        allPosts.push(item.val());
      });
      allPosts.reverse();
      setAllPost(allPosts);
      setLoading(false);
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
      <section className="flex flex-row flex-wrap mx-auto">
        {allPosts.map((post) => (
          <div
            className="transition-all duration-150 flex w-full px-4 py-6 md:w-1/2 lg:w-1/3"
            key={post.post_sec}
          >
            <div className="flex flex-col items-stretch min-h-full pb-4 mb-6 transition-all duration-150 bg-white rounded-lg shadow-lg hover:shadow-2xl border">
              <div className="md:flex-shrink-0">
                <img
                  src={post.post_pic}
                  alt={"pic" + post.post_sec}
                  className="object-fill w-full rounded-lg rounded-b-none md:h-56"
                />
              </div>
              <div className="flex items-center justify-between px-4 py-2 overflow-hidden">
                <span className="text-xs font-medium text-blue-600 uppercase">
                  #technology {/* Grupo. Ej: Programación, Cocina */}
                </span>
              </div>
              <hr className="border-gray-300" />
              <div className="flex flex-wrap items-center flex-1 px-4 py-1 text-center mx-auto">
                <button
                  className="hover:underline"
                  onClick={() =>
                    router.push({
                      pathname: "/knowledgebase/publicationContent",
                      query: { id: post.post_sec },
                    })
                  }
                >
                  <h2 className="text-2xl font-bold tracking-normal text-gray-800">
                    {post.post_tit} {/* Titulo del Tema */}
                  </h2>
                </button>
              </div>
              <hr className="border-gray-300" />
              <p className="flex flex-row flex-wrap w-full px-4 py-2 overflow-hidden text-sm text-justify text-gray-700">
                {post.post_sum} {/* Presentación del Tema */}
              </p>
              <hr className="border-gray-300" />
              <section className="px-4 py-2 mt-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center flex-1">
                    <img
                      className="object-cover h-10 rounded-full"
                      src="/portfolio/profile-pic.png"
                      alt="Avatar"
                    />
                    <div className="flex flex-col mx-2">
                      <a
                        href=""
                        className="font-semibold text-gray-700 hover:underline"
                      >
                        Johao Perlaza {/* Autor */}
                      </a>
                      <span className="mx-1 text-xs text-gray-600">
                        Last update: {post.post_dat} {/* Fecha */}
                      </span>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        ))}
      </section>
    );
  }
}
