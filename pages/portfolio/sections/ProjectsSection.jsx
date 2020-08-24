import React, { Component } from "react";
import { db } from "../../../services/_firebase";

class ProjectsSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      allProjects: [],
    };
  }

  componentDidMount = () => {
    db.ref("projects").on("value", (element) => {
      let allProjects = [];
      element.forEach((item) => {
        allProjects.push(item.val());
      });
      this.setState({ allProjects, loading: false });
    });
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
      <section className="bg-gray-800 py-20">
        <div className="max-w-5xl px-6 mx-auto text-center">
          <h2 className="text-2xl font-semibold text-white">Projects</h2>
          <div className="flex items-center justify-center mt-10">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {allProjects.map((proj) => (
                <div className="w-full" key={proj.proj_sec}>
                  <div className="flex items-center justify-center h-56 bg-white border-b-8 border-teal-400 rounded-md overflow-hidden">
                    <img alt="pic" src={proj.proj_pic} />
                  </div>
                  <div className="bg-gray-700 mt-5 rounded-md overflow-hidden">
                    <div className="flex flex-col justify-center py-2 px-3 text-center text-sm">
                      <span className="text-gray-300">{proj.proj_tit}</span>
                      <p className="block text-gray-500 mt-2">
                        {proj.proj_des}
                      </p>
                    </div>
                  </div>
                  <button
                    className="bg-gray-300 text-gray-800 font-bold rounded border-b-2 border-indigo-500 hover:border-indigo-600 hover:bg-indigo-500 hover:text-white shadow-md py-2 px-6 mt-3 inline-flex items-center mb-2"
                    onClick={() => window.open(proj.proj_link)}
                  >
                    Code
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ProjectsSection;
