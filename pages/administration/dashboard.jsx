import React, { Component } from "react";
import { auth, db } from "../../services/_firebase";

import Header from "./components/Header.jsx";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // token: auth().currentUser,
      totalPublications: "",
      totalProjects: "",
      loading: true,
    };
  }

  componentDidMount() {
    db.ref("posts").on("value", (element) => {
      let allPosts = [];
      element.forEach((item) => {
        allPosts.push(item.val());
      });
      let totalPublications = allPosts.length;
      this.setState({ totalPublications });
    });

    db.ref("projects").on("value", (element) => {
      let allProjects = [];
      element.forEach((item) => {
        allProjects.push(item.val());
      });
      let totalProjects = allProjects.length;
      this.setState({ totalProjects, loading: false });
    });
  }

  render() {
    const { totalPublications, totalProjects } = this.state;
    if (this.state.loading) {
      return (
        <div className="w-full py-32 flex flex-col items-center justify-center">
          <img
            className="w-32 h-32"
            id="loading"
            alt="loading"
            src="/administration/vimhash.png"
          />
          <h1>loading...</h1>
        </div>
      );
    }
    return (
      <div className="w-full h-screen bg-black">
        <Header />
        <section>
          <div className="w-full mx-auto">
            <div className="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
              <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 xl:w-1/3 p-3">
                  <div className="bg-gray-900 border border-gray-800 rounded shadow p-2">
                    <div className="flex flex-row items-center">
                      <div className="flex-shrink pr-4">
                        <div className="rounded p-3 bg-green-600">
                          <i className="fa fa-wallet fa-2x fa-fw fa-inverse"></i>
                        </div>
                      </div>
                      <div className="flex-1 text-right md:text-center">
                        <h5 className="font-bold uppercase text-gray-400">
                          Total Publications
                        </h5>
                        <h3 className="font-bold text-3xl text-gray-600">
                          {totalPublications}
                          <span className="text-green-500">
                            <i className="fas fa-caret-up"></i>
                          </span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className="w-full md:w-1/2 xl:w-1/3 p-3">
                  <div className="bg-gray-900 border border-gray-800 rounded shadow p-2">
                    <div className="flex flex-row items-center">
                      <div className="flex-shrink pr-4">
                        <div className="rounded p-3 bg-green-600">
                          <i className="fa fa-wallet fa-2x fa-fw fa-inverse"></i>
                        </div>
                      </div>
                      <div className="flex-1 text-right md:text-center">
                        <h5 className="font-bold uppercase text-gray-400">
                          Total Projects
                        </h5>
                        <h3 className="font-bold text-3xl text-gray-600">
                          {totalProjects}
                          <span className="text-green-500">
                            <i className="fas fa-caret-up"></i>
                          </span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Dashboard;
