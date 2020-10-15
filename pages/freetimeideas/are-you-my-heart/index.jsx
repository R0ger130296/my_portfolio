import Head from "next/head";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { db } from "../../../services/_firebase-freetimeideas";
import { useRouter } from "next/router";

import { user_authentication } from "../../../services/_webService";

const Index = () => {
  const [loading, SetLoading] = useState(true),
    [myheart_sec, SetMyHeartSec] = useState(""),
    [myheart_name, SetMyHeartName] = useState(""),
    router = useRouter();

  useEffect(() => {
    if (
      user_authentication(
        sessionStorage.getItem("secret_token"),
        "freetimeideas"
      ) !== false
    ) {
      sequence();
      SetLoading(false);
    }
  }, []);

  const sequence = () => {
    db.ref("myheart_names").on("value", (element) => {
      let myheart_names = [];
      let myheart_sec = [];

      element.forEach((item) => {
        myheart_names.push(item.val());
      });

      myheart_names.map((element) => myheart_sec.push(element.myheart_sec));

      myheart_sec.sort(fromLargestToSmallest);
      let id = myheart_sec;

      if (id.length === 0) {
        SetMyHeartSec(1);
      } else {
        SetMyHeartSec(parseInt(id) + 1);
      }
    });
  };

  const fromLargestToSmallest = (elem1, elem2) => {
    return elem2 - elem1;
  };

  const save = () => {
    if (myheart_name === "") {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Fill in the field to continue",
        showConfirmButton: false,
        timer: 1000,
      });
    } else {
      db.ref("myheart_names/name" + myheart_sec)
        .set({
          myheart_sec,
          myheart_name,
        })
        .catch((error) => {
          Swal.fire(
            "Oops... Something gone wrong!",
            "Try it again later.",
            "error"
          );
          console.error(error);
        });

      myheart(myheart_name);
      SetMyHeartName("");
      SetMyHeartSec("");

      sequence();
    }
  };

  const myheart = (name) => {
    if (
      name === "Aracely" ||
      name === "aracely" ||
      name === "ara" ||
      name === "Ara" ||
      name === "encebolladito" ||
      name === "Encebolladito" ||
      name === "Aracely Mullo" ||
      name === "Arita" ||
      name === "Aria" ||
      name === "Amorcito" ||
      name === "amorcito"
    ) {
      Swal.fire({
        title: "Yes!",
        text: "Ara, you're in my heart :D",
        icon: "success",
        showCancelButton: false,
        confirmButtonColor: "#3085d6",
        confirmButtonText: "<3",
      });
    } else if (name === "Luna" || name === "luna") {
      Swal.fire({
        title: "Yes!",
        text: "What greater gift than the love of a cat.",
        icon: "success",
        showCancelButton: false,
        confirmButtonColor: "#3085d6",
        confirmButtonText: ":3",
      });
    } else if (name === "Galleta" || name === "galleta") {
      Swal.fire({
        title: "Yes!",
        text: "Your mother's dog will give you his heart.",
        icon: "success",
        showCancelButton: false,
        confirmButtonColor: "#3085d6",
        confirmButtonText: "<3",
      });
    } else {
      //else if de patos :v mi olvide el nombre!!!!!
      //else if los amiguitos :v jeje
      Swal.fire({
        icon: "error",
        title: "No!",
        text: "She isn't in my heart",
        showConfirmButton: false,
        timer: 3000,
      });
    }
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
          backgroundImage: `url("/freetimeideas/myheart_background.webp")`,
        }}
      >
        <Head>
          <title>Are you my heart?</title>
        </Head>
        <div className="px-1 py-1">
          <h1 className="uppercase font-bold py-1 px-2 my-2 bg-gray-300 bg-opacity-50 text-center">
            Enter a name and find out
          </h1>
          <div className="px-1 flex-1">
            <input
              className="w-full border border-gray-500 rounded py-2 px-4 text-black"
              type="text"
              value={myheart_name}
              onChange={(event) => SetMyHeartName(event.target.value)}
              autoComplete="off"
            />
          </div>
        </div>
        <button
          className="bg-gray-300 text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
          onClick={() => save()}
        >
          <i className="fas fa-check"></i>
          <span className="ml-2">Check</span>
        </button>

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
