import Head from "next/head";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

import Header from "./components/Header";
import { user_authentication } from "../../services/_webService";

const Home = () => {
  const [loading, SetLoading] = useState(true),
    router = useRouter();

  useEffect(() => {
    if (
      user_authentication(
        sessionStorage.getItem("secret_token"),
        "freetimeideas"
      ) !== false
    ) {
      SetLoading(false);
    }
  }, []);

  const message = () => {
    Swal.fire({
      position: "center",
      title: "Are you anxious to see what I'm prepared for? Wait for it :3",
      showConfirmButton: true,
    });
  };

  if (loading) {
    return (
      <div className="w-full h-full py-32 flex flex-col items-center justify-center">
        <img
          className="w-32 h-32"
          id="loading"
          alt="loading"
          src="/vimhash.webp"
        />
        <h1>loading...</h1>
      </div>
    );
  } else {
    return (
      <div>
        <Head>
          <title>Free Time Ideas</title>
        </Head>
        <Header />
        <div className="h-full w-full flex flex-wrap justify-center">
          <div className="w-64 border border-indigo-500 rounded flex flex-col text-center items-center mx-12 py-2 my-2">
            <div className="flex mb-2">
              <h1>Agreements</h1>
              <h1 className="text-red-500 text-sm font-bold px-3 icon-beat">
                (beta)
              </h1>
            </div>
            <button
              className="bg-gray-300 text-gray-800 font-bold rounded border-b-2 border-indigo-500 hover:border-indigo-600 hover:bg-indigo-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center mb-2"
              onClick={() => router.push("/freetimeideas/agreements")}
            >
              Click me!
            </button>
          </div>

          <div className="w-64 border border-indigo-500 rounded flex flex-col text-center items-center mx-12 py-2 my-2">
            <div className="flex mb-2">
              <h1>Daily Greeting</h1>
            </div>
            <button
              className="bg-gray-300 text-gray-800 font-bold rounded border-b-2 border-indigo-500 hover:border-indigo-600 hover:bg-indigo-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center mb-2"
              onClick={() => router.push("/freetimeideas/daily-greeting")}
            >
              Click me!
            </button>
          </div>

          <div className="w-64 border border-indigo-500 rounded flex flex-col text-center items-center mx-12 py-2 my-2">
            <div className="flex mb-2">
              <h1>Happy Birthday</h1>
            </div>
            <button
              className="bg-gray-300 text-gray-800 font-bold rounded border-b-2 border-indigo-500 hover:border-indigo-600 hover:bg-indigo-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center mb-2"
              onClick={() => router.push("/freetimeideas/happy-birthday")}
            >
              Click me!
            </button>
          </div>

          <div className="w-64 border border-indigo-500 rounded flex flex-col text-center items-center mx-12 py-2 my-2">
            <div className="flex mb-2">
              <h1>Do you like me? </h1>
            </div>
            <button
              className="bg-gray-300 text-gray-800 font-bold rounded border-b-2 border-indigo-500 hover:border-indigo-600 hover:bg-indigo-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center mb-2"
              onClick={() => router.push("/freetimeideas/do-you-like-me")}
            >
              Click me!
            </button>
          </div>

          <div className="w-64 border border-indigo-500 rounded flex flex-col text-center items-center mx-12 py-2 my-2">
            <div className="flex mb-2">
              <h1>See who is in my heart </h1>
            </div>
            <button
              className="bg-gray-300 text-gray-800 font-bold rounded border-b-2 border-indigo-500 hover:border-indigo-600 hover:bg-indigo-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center mb-2"
              onClick={() => router.push("/freetimeideas/are-you-my-heart")}
            >
              Click me!
            </button>
          </div>

          <div className="w-64 border border-indigo-500 rounded flex flex-col text-center items-center mx-12 py-2 my-2">
            <div className="flex mb-2">
              <h1>You wanna be my girlfriend?</h1>
            </div>
            <button
              className="bg-gray-300 text-gray-800 font-bold rounded border-b-2 border-indigo-500 hover:border-indigo-600 hover:bg-indigo-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center mb-2"
              onClick={() =>
                router.push("/freetimeideas/you-wanna-be-my-girlfriend")
              }
            >
              Click me!
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default Home;
