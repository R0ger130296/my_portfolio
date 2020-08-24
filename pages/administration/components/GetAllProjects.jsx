import React, { Component } from "react";
import Router from "next/router";
import Swal from "sweetalert2";
import { db } from "../../../services/_firebase";

import { user_authentication } from "../../../services/_webService";

class GetAllProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      allProjects: [],
    };
  }

  componentDidMount() {
    if (
      user_authentication(
        sessionStorage.getItem("secret_token"),
        "administration"
      ) !== false
    ) {
      db.ref("projects").on("value", (element) => {
        let allProjects = [];
        element.forEach((item) => {
          allProjects.push(item.val());
        });
        allProjects.reverse();
        this.setState({ loading: false, allProjects });
      });
    }
  }

  update = (p_proj_sec, p_proj_tit, p_proj_des, p_proj_pic, p_proj_link) => {
    localStorage.setItem("proj_sec", p_proj_sec);
    localStorage.setItem("proj_tit", p_proj_tit);
    localStorage.setItem("proj_des", p_proj_des);
    localStorage.setItem("proj_pic", p_proj_pic);
    localStorage.setItem("proj_link", p_proj_link);
    Router.push("/administration/projects/update_project");
  };

  delete = (id) => {
    db.ref("projects/project" + id)
      .remove()
      .then(
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Project deleted",
          showConfirmButton: false,
          timer: 1500,
        })
      );
  };

  render() {
    const { allProjects } = this.state;

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
      <section className="max-w-5xl px-6 mx-auto text-center">
        <div className="flex items-center justify-center mt-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {allProjects.map((proj) => (
              <div
                className="w-full bg-white border-2 border-black"
                key={proj.proj_sec}
              >
                <div className="flex items-center justify-center h-56 bg-white border-b-8 border-teal-400 rounded-md overflow-hidden">
                  <img alt="pic" src={proj.proj_pic} />
                </div>
                <div className="bg-gray-700 mt-5 rounded-md overflow-hidden">
                  <div className="flex flex-col justify-center py-2 px-3 text-center text-sm">
                    <span className="text-gray-300">{proj.proj_tit}</span>
                    <p className="block text-gray-500 mt-2">{proj.proj_des}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between leading-none p-2 md:p-4">
                  <i
                    className="fas fa-trash-alt text-red-500 hover:text-red-700 cursor-pointer"
                    onClick={() => this.delete(proj.proj_sec)}
                  ></i>
                  <i
                    className="fas fa-edit text-blue-500 hover:text-blue-700 cursor-pointer"
                    onClick={() =>
                      this.update(
                        proj.proj_sec,
                        proj.proj_tit,
                        proj.proj_des,
                        proj.proj_pic,
                        proj.proj_link
                      )
                    }
                  ></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default GetAllProjects;
