import React, { useState, useEffect } from "react";

import { db } from "../../../services/_firebase";

export default function ProjectsSection() {
  const [loading, setLoading] = useState(true),
    [allProjects, setAllProjects] = useState([]);

  useEffect(() => {
    db.ref("projects").on("value", (element) => {
      let getAllProjects = [];
      element.forEach((item) => {
        getAllProjects.push(item.val());
      });
      setAllProjects(getAllProjects);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="w-full py-32 flex flex-col items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  } else {
    return (
      <section className="bg-gray-800">
        <h2 className="text-2xl font-semibold text-white py-6 text-center uppercase">
          Projects
        </h2>
        <div className="flex flex-row flex-wrap mx-auto">
          {allProjects.map((proj) => (
            <div
              className="transition-all duration-150 flex w-full px-4 py-6 md:w-1/2 lg:w-1/3"
              key={proj.proj_sec}
            >
              <div className="flex flex-col items-stretch min-h-full pb-4 mb-6 transition-all duration-150 bg-white rounded-lg shadow-lg hover:shadow-2xl border">
                <div className="md:flex-shrink-0">
                  <img
                    src={proj.proj_pic}
                    alt={"pic" + proj.proj_sec}
                    className="object-fill w-full rounded-lg rounded-b-none md:h-56"
                  />
                </div>
                <div className="flex flex-wrap items-center flex-1 px-4 py-1 text-center mx-auto">
                  <button className="hover:underline">
                    <h2 className="text-2xl font-bold tracking-normal text-gray-800">
                      {proj.proj_tit}
                    </h2>
                  </button>
                </div>
                <hr className="border-gray-300" />
                <p className="flex flex-row flex-wrap w-full px-4 py-2 overflow-hidden text-sm text-justify text-gray-700">
                  {proj.proj_des}
                </p>
                <hr className="border-gray-300" />
                <section className="px-4 py-2 mt-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center flex-1 justify-center">
                      <button
                        className="bg-gray-300 text-gray-800 font-bold rounded border-b-2 border-indigo-500 hover:border-indigo-600 hover:bg-indigo-500 hover:text-white shadow-md py-2 px-6 mt-3 inline-flex items-center mb-2"
                        onClick={() => window.open(proj.proj_link)}
                      >
                        Code
                      </button>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}
