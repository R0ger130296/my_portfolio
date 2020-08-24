import React, { Component } from "react";
import Router from "next/router";
import Swal from "sweetalert2";
import { db } from "../../../services/_firebase";
import { Editor } from "@tinymce/tinymce-react";

import Header from "../components/Header.jsx";
import { user_authentication } from "../../../services/_webService";

class UpdatePublication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post_sec: "",
      post_tit: "",
      post_sum: "",
      post_con: "",
      post_pic_before: "",
      post_pic: "",
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
        post_sec: localStorage.getItem("post_sec"),
        post_tit: localStorage.getItem("post_tit"),
        post_sum: localStorage.getItem("post_sum"),
        post_con: localStorage.getItem("post_con"),
        post_pic_before: localStorage.getItem("post_pic"),
      });
    }
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleEditorChange = (content) => {
    this.setState({ post_con: content });
  };

  onFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      this.setState({ newImage: true, post_pic: reader.result });
    };
    reader.readAsDataURL(file);
  };

  updatePost = () => {
    db.ref("posts/post" + this.state.post_sec)
      .update({
        post_sec: parseInt(this.state.post_sec),
        post_tit: this.state.post_tit,
        post_sum: this.state.post_sum,
        post_con: this.state.post_con,
        post_pic: this.state.post_pic
          ? this.state.post_pic
          : this.state.post_pic_before,
      })
      .then(
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Post updated",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => Router.push("/administration/publications"))
      )
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    const {
      post_tit,
      post_sum,
      post_con,
      post_pic,
      post_pic_before,
      newImage,
    } = this.state;
    return (
      <div>
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
                {newImage ? (
                  <img alt="preview" className="w-64 h-64" src={post_pic} />
                ) : (
                  <img
                    alt="preview"
                    className="w-64 h-64"
                    src={post_pic_before}
                  />
                )}
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
              onClick={this.updatePost}
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

export default UpdatePublication;
