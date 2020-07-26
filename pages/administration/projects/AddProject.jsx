import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { db, auth } from "../../services/firebase";
import Swal from "sweetalert2";

import Header from "../components/Header.jsx";

class AddProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: auth().currentUser,
      proj_sec: "",
      proj_tit: "",
      proj_des: "",
      proj_pic: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    db.ref("projects").once("value", (element) => {
      let projects = [];
      let proj_sec = [];
      element.forEach((item) => {
        projects.push(item.val());
      });
      projects.map((element) => proj_sec.push(element.proj_sec));
      let id = proj_sec.reverse();
      if (id.length === 0) {
        this.setState({ proj_sec: 1 });
      } else {
        this.setState({ proj_sec: parseInt(id) + 1 });
      }
    });
  }

  save = (e) => {
    e.preventDefault();
    if (
      this.state.proj_tit === "" ||
      this.state.proj_des === "" ||
      this.state.post_pic === ""
    ) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Fill in all fields to continue",
        showConfirmButton: false,
        timer: 1000,
      });
    } else {
      db.ref("projects/project" + this.state.proj_sec)
        .set({
          proj_sec: this.state.proj_sec,
          proj_tit: this.state.proj_tit,
          proj_des: this.state.proj_des,
          proj_pic: this.state.proj_pic,
        })
        .then(
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Saved project",
            showConfirmButton: false,
            timer: 1500,
          }),
          this.props.history.push("projects")
        )
        .catch((error) => {
          Swal.fire("Oops... Something gone wrong!", "Try it again.", "error");
        });
    }
  };

  onFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      this.setState({ proj_pic: reader.result });
    };
    reader.readAsDataURL(file);
  };

  render() {
    const { proj_tit, proj_des, proj_pic } = this.state;
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
                {proj_pic ? (
                  <img alt="preview" className="w-64 h-64" src={proj_pic} />
                ) : null}
              </div>
            </div>
          </form>
          <div className="text-center py-4">
            <button
              className="bg-gray-300 text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
              onClick={this.save}
            >
              <i className="fas fa-save"></i>
              <span className="ml-2">Grabar</span>
            </button>
          </div>
        </section>
      </div>
    );
  }
}

export default withRouter(AddProject);
