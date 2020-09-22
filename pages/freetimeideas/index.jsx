import Head from "next/head";
import React, { Component } from "react";
import Router from "next/router";
import Swal from "sweetalert2";

import { db } from "../../services/_firebase-freetimeideas";
import moment from "moment";
import jwt from "jsonwebtoken";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_email: "",
      user_pass: "",
      allUsers: [],
      hist_sec: null,
    };
  }

  componentDidMount() {
    db.ref("users").once("value", (element) => {
      let allUsers = [];
      element.forEach((item) => {
        allUsers.push(item.val());
      });
      this.setState({ allUsers });
    });

    db.ref("login-history").once("value", (element) => {
      let data = [];
      let hist_sec = [];
      element.forEach((item) => {
        data.push(item.val());
      });

      data.map((element) => hist_sec.push(element.hist_sec));

      hist_sec.sort(this.fromLargestToSmallest);
      let id = hist_sec;

      if (id.length === 0) {
        this.setState({ hist_sec: 1 });
      } else {
        this.setState({ hist_sec: parseInt(id) + 1 });
      }
    });
  }

  fromLargestToSmallest(elem1, elem2) {
    return elem2 - elem1;
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  loginAccess = (e) => {
    e.preventDefault();
    if (this.state.user_email === "" || this.state.user_pass === "") {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Fill in all fields to continue",
        showConfirmButton: false,
        timer: 1000,
      });
    } else {
      let token;

      this.state.allUsers.forEach((element) => {
        if (element.rol === "freetimeideas") {
          if (element.email === this.state.user_email) {
            if (element.password === this.state.user_pass) {
              db.ref("login-history/history" + this.state.hist_sec)
                .set({
                  hist_sec: this.state.hist_sec,
                  hist_user: this.state.user_email,
                  hist_date: moment().format("MMMM Do YYYY, h:mm:ss a"),
                })
                .then(
                  (token = jwt.sign(
                    {
                      data: {
                        email: element.email,
                        name: element.name,
                      },
                    },
                    process.env.NEXT_PUBLIC_keyjwt,
                    {
                      algorithm: "HS256",
                      expiresIn: 3600,
                    }
                  )),
                  sessionStorage.setItem("secret_token", token),
                  Router.push("/freetimeideas/dashboard")
                )
                .catch((error) => {
                  console.error(error);
                  Swal.fire(
                    "Oops... Something gone wrong!",
                    "Try it again.",
                    "error"
                  );
                });
            } else {
              console.error("Invalid password");
              // Swal.fire("Oops... Invalid password!", "Try again.", "error");
            }
          } else {
            console.error("Email not-found");
            // Swal.fire("Oops... Email not found!", "Try again.", "error");
          }
        } else {
          console.error("You don't have permission to access");
          // Swal.fire(
          //   "Oops... You don't have permission to access!",
          //   "Contact with the administration.",
          //   "warning"
          // );
        }
      });
    }
  };

  render() {
    const { user_email, user_pass } = this.state;
    return (
      <div
        className="w-full h-screen bg-cover flex items-center justify-center bg-gray-600"
        style={{
          backgroundImage: `url("/freetimeideas/login-background.webp")`,
        }}
      >
        <Head>
          <title>Free Time Ideas</title>
        </Head>
        <div className="py-2 rounded p-8 bg-white flex flex-col">
          <div className="flex justify-center">
            <img src="/vimhash.webp" alt="logo" className="w-24 h-24" />
          </div>
          <form className="mt-8">
            <div className="py-2 flex flex-col">
              <span className="px-1 text-sm font-bold">Email</span>
              <input
                className="text-md px-3 py-2 rounded-lg bg-transparent border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-transparent focus:border-gray-600 focus:outline-none"
                type="text"
                placeholder="email@gmail.com"
                autoComplete="off"
                name="user_email"
                value={user_email}
                onChange={this.changeHandler}
              />
            </div>
            <div className="py-2 flex flex-col">
              <span className="px-1 text-sm font-bold">Password</span>
              <input
                className="text-md px-3 py-2 rounded-lg bg-transparent border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-transparent focus:border-gray-600 focus:outline-none"
                type="password"
                placeholder="********"
                name="user_pass"
                value={user_pass}
                onChange={this.changeHandler}
              />
            </div>
            <div className="flex justify-center">
              <button
                className="mt-3 text-lg font-semibold bg-blue-700 text-white rounded-lg px-6 py-3 shadow-xl hover:bg-blue-500 block"
                onClick={this.loginAccess}
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
