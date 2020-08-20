import React, { Component } from "react";
import Router from "next/router";
import Swal from "sweetalert2";
import { db } from "../../../services/_firebase";

import Header from "../components/Header.jsx";
import { user_authentication } from "../../../services/_webService";

class UpdateProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      proj_sec: "",
      proj_tit: "",
      proj_des: "",
      proj_pic_before: "",
      proj_pic: "",
    };
  }

  componentDidMount() {
    if (
      user_authentication(
        sessionStorage.getItem("secret_token"),
        "administration"
      ) !== false
    ) {
      this.setState({
        proj_sec: localStorage.getItem("proj_sec"),
        proj_tit: localStorage.getItem("proj_tit"),
        proj_des: localStorage.getItem("proj_des"),
        proj_pic_before: localStorage.getItem("proj_pic"),
      });
    }
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      this.setState({ newImage: true, proj_pic: reader.result });
    };
    reader.readAsDataURL(file);
  };

  update = () => {
    db.ref("projects/project" + this.state.proj_sec)
      .update({
        proj_sec: parseInt(this.state.proj_sec),
        proj_tit: this.state.proj_tit,
        proj_des: this.state.proj_des,
        proj_pic: this.state.proj_pic
          ? this.state.proj_pic
          : this.state.proj_pic_before,
      })
      .then(
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Project updated",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => Router.push("/administration/projects"))
      )
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    const {
      proj_tit,
      proj_des,
      proj_pic,
      proj_pic_before,
      newImage,
    } = this.state;

    return (
      <div className="bg-black text-white h-screen">
        <Header />
        <section className="flex flex-col p-4">
          <form className="py-2 px-16 w-full flex">
            <div className="w-1/2">
              <div className="px-1 py-1">
                <h1 className="uppercase font-bold py-2 px-2">Title *</h1>
                <div className="px-1 flex-1">
                  <input
                    className="w-full border border-gray-500 rounded py-2 px-4 text-black"
                    type="text"
                    name="proj_tit"
                    value={proj_tit}
                    onChange={this.changeHandler}
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="px-1 py-1">
                <h1 className="uppercase font-bold py-2 px-2">Description *</h1>
                <div className="px-1 flex-1">
                  <textarea
                    className="w-full border border-gray-500 rounded py-2 px-4 text-black"
                    type="text"
                    name="proj_des"
                    value={proj_des}
                    onChange={this.changeHandler}
                    autoComplete="off"
                  />
                </div>
              </div>
            </div>
            <div className="flex text-center w-1/2">
              <div>
                <h1 className="uppercase font-bold py-2 px-2">Image *</h1>
                <input
                  className="w-full border border-gray-500 rounded py-2 px-4"
                  type="file"
                  name="proj_pic"
                  defaultValue={proj_pic}
                  onChange={this.onFileChange}
                />
              </div>
              <div className="px-1">
                {newImage ? (
                  <img alt="preview" className="w-64 h-64" src={proj_pic} />
                ) : (
                  <img
                    alt="preview"
                    className="w-64 h-64"
                    src={proj_pic_before}
                  />
                )}
              </div>
            </div>
          </form>
          <div className="text-center py-4">
            <button
              className="bg-gray-300 text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
              onClick={this.update}
            >
              <i className="fas fa-save"></i>
              <span className="ml-2">Guardar</span>
            </button>
          </div>
        </section>
      </div>
    );
  }
}

export default UpdateProject;
