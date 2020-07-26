import React, { Component } from "react";
import Router from "next/router";
import { signin } from "../../services/_auth";
import Swal from "sweetalert2";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: "",
      user_pass: "",
      allUsers: [],
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  loginAccess = (e) => {
    e.preventDefault();
    if (this.state.user_name === "" || this.state.user_pass === "") {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Fill in all fields to continue",
        showConfirmButton: false,
        timer: 1000,
      });
    } else {
      Router.push("/administration/dashboard");
      // signin(this.state.user_name, this.state.user_pass)
      //   .then(() => Router.push("/administration/dashboard"))
      //   .catch((error) => {
      //     Swal.fire("Oops... Wrong data!", "Try it again.", "error");
      //     console.error(error);
      //   });
    }
  };

  render() {
    const { user_name, user_pass } = this.state;
    return (
      <div className="w-full h-screen bg-cover flex items-center justify-center bg-gray-600">
        <div className="py-2 rounded p-8 bg-white flex flex-col">
          <div className="flex justify-center">
            <img
              src="/administration/vimhash.png"
              alt="logo"
              className="w-24 h-24"
            />
          </div>
          <form className="mt-8">
            <div className="py-2 flex flex-col">
              <span className="px-1 text-sm font-bold">Email</span>
              <input
                className="text-md px-3 py-2 rounded-lg bg-transparent border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-transparent focus:border-gray-600 focus:outline-none"
                type="text"
                placeholder="email@gmail.com"
                autoComplete="off"
                name="user_name"
                value={user_name}
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
