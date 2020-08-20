import React, { Component } from "react";
import Router from "next/router";
import { db } from "../../../services/_firebase";
import Swal from "sweetalert2";
import { Editor } from "@tinymce/tinymce-react";
import moment from "moment";

import Header from "../components/Header.jsx";
import { user_authentication } from "../../../services/_webService";

class CreatePublication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post_sec: "",
      post_tit: "",
      post_sum: "",
      post_con: "",
      post_pic: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleEditorChange = (content, editor) => {
    this.setState({ post_con: content });
  };

  componentDidMount() {
    if (
      user_authentication(
        sessionStorage.getItem("secret_token"),
        "administration"
      ) !== false
    ) {
      db.ref("posts").once("value", (element) => {
        let posts = [];
        let post_sec = [];
        element.forEach((item) => {
          posts.push(item.val());
        });
        posts.map((element) => post_sec.push(element.post_sec));
        let id = post_sec.reverse();
        if (id.length === 0) {
          this.setState({ post_sec: 1 });
        } else {
          this.setState({ post_sec: parseInt(id) + 1 });
        }
      });
    }
  }

  save = (e) => {
    e.preventDefault();
    if (
      this.state.post_tit === "" ||
      this.state.post_sum === "" ||
      this.state.post_con === "" ||
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
      db.ref("posts/post" + this.state.post_sec)
        .set({
          post_sec: this.state.post_sec,
          post_tit: this.state.post_tit,
          post_sum: this.state.post_sum,
          post_con: this.state.post_con,
          post_dat: moment().format("MMMM Do YYYY, h:mm:ss a"),
          post_pic: this.state.post_pic,
        })
        .then(
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Saved publication",
            showConfirmButton: false,
            timer: 1500,
          }).then(() => Router.push("/administration/publications"))
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
      this.setState({ post_pic: reader.result });
    };
    reader.readAsDataURL(file);
  };

  render() {
    const { post_tit, post_sum, post_con, post_pic } = this.state;
    return (
      <div className="bg-black text-white">
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
                    name="post_tit"
                    value={post_tit}
                    onChange={this.changeHandler}
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="px-1 py-1">
                <h1 className="uppercase font-bold py-2 px-2">Summary *</h1>
                <div className="px-1 flex-1">
                  <textarea
                    className="w-full border border-gray-500 rounded py-2 px-4 text-black"
                    type="text"
                    name="post_sum"
                    value={post_sum}
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
                  name="post_pic"
                  defaultValue={post_pic}
                  onChange={this.onFileChange}
                />
              </div>
              <div className="px-1">
                {post_pic ? (
                  <img alt="preview" className="w-64 h-64" src={post_pic} />
                ) : null}
              </div>
            </div>
          </form>
          <div className="px-16 w-full text-center">
            <h1 className="uppercase font-bold py-2 px-2">Content *</h1>
            <Editor
              init={{
                height: 500,
                menubar: true,
                plugins: [
                  "advlist autolink lists link image charmap print preview anchor",
                  "searchreplace visualblocks code fullscreen",
                  "insertdatetime media table paste code help wordcount",
                ],
                toolbar:
                  "undo redo | formatselect | bold italic backcolor |  alignleft aligncenter alignright alignjustify |  bullist numlist outdent indent | removeformat | help",
              }}
              value={post_con}
              onEditorChange={this.handleEditorChange}
            />
          </div>
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

export default CreatePublication;
