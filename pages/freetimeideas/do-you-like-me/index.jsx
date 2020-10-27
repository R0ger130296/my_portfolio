import Head from "next/head";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

import { db } from "../../../services/_firebase-freetimeideas";
import { user_authentication } from "../../../services/_webService";

const Index = () => {
  const [loading, SetLoading] = useState(true),
    [question, SetQuestion] = useState(""),
    [counter, SetCounter] = useState(0),
    [show_options, SetShowOptions] = useState(false),
    [all_questions, SetAllQuestions] = useState([]),
    router = useRouter();

  useEffect(() => {
    if (
      user_authentication(
        sessionStorage.getItem("secret_token"),
        "freetimeideas"
      ) !== false
    ) {
      db.ref("questions").once("value", (element) => {
        let allQuestions = [];

        element.forEach((item) => {
          allQuestions.push(item.val());
        });

        SetAllQuestions(allQuestions);
        SetLoading(false);
      });
      showQuestions();
    }
  }, []);

  const showQuestions = () => {
    if (counter <= all_questions.length - 1) {
      if (all_questions[counter].show_options) {
        SetShowOptions(true);
        SetQuestion(all_questions[counter].question);
        SetCounter(counter + 1);
      } else {
        SetShowOptions(false);
        SetQuestion(all_questions[counter].question);
        SetCounter(counter + 1);
      }
    } else {
      SetQuestion(
        "You still need more reasons to like it? Let's go out more often and get to know each other"
      );
      SetShowOptions(false);
    }
  };

  const message = () => {
    Swal.fire({
      position: "center",
      title: "I like you too Ara :3",
      showConfirmButton: true,
      confirmButtonText: "<3",
    }).then(() => (window.location.href = "https://youtu.be/4G0uhL6W2_k?t=15"));
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
      <div
        className="h-screen w-screen flex flex-col justify-center items-center bg-cover"
        style={{
          backgroundImage: `url("/freetimeideas/doyoulikeme.webp")`,
        }}
      >
        <Head>
          <title>Do you like me?</title>
        </Head>
        <div>
          <h1 className="uppercase font-bold py-1 px-2 my-2 bg-gray-300 bg-opacity-50 text-2xl w-64 text-center">
            {question}
          </h1>
          {show_options ? (
            <div className="flex w-full justify-between">
              <button
                className="bg-gray-300 text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
                onClick={() => message()}
              >
                Yes
              </button>

              <button
                className="bg-gray-300 text-gray-800 font-bold rounded border-b-2 border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
                onClick={() => showQuestions()}
              >
                No
              </button>
            </div>
          ) : (
            <div className="flex w-full justify-center">
              <button
                className="bg-gray-300 text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
                onClick={() => showQuestions()}
              >
                Next
              </button>
            </div>
          )}
        </div>
        <div className="flex flex-col fixed bottom-0 items-center text-white">
          <button
            className="bg-gray-300 text-gray-800 font-bold rounded border-b-2 border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center mb-2"
            onClick={() => router.push("/freetimeideas/dashboard")}
          >
            <i className="fas fa-undo text-sm mr-2"></i>
            Back
          </button>
        </div>
      </div>
    );
  }
};

export default Index;
