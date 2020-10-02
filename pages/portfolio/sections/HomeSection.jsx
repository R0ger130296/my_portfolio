import React from "react";

const HomeSection = () => {
  return (
    <section className="bg-white mt-20 max-w-2xl px-6 text-center mx-auto">
      <h2 className="text-3xl font-semibold text-gray-800">
        Hi,{" "}
        <span className="bg-indigo-600 text-white rounded px-1">I’m Johao</span>
        . Nice to meet you.
      </h2>
      <p className="text-gray-600 mt-4">
        I'm a software development and a web designer student with intermediate
        level experience, currently I'm specializing in web technologies and UI
        design, and with little knowledge in mobile and back-end applications.
      </p>

      <div className="flex items-end justify-center mt-16">
        <img
          className="h-48 w-48 rounded-t-full"
          alt="pic"
          src="/portfolio/profile-pic.jpg"
        />
      </div>
    </section>
  );
};

export default HomeSection;
