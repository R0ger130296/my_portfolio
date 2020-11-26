import React from "react";

export default function HomeSection() {
  return (
    <section className="bg-white mt-20 max-w-2xl px-6 text-center mx-auto">
      <h2 className="text-3xl font-semibold text-gray-800">
        Hi,{" "}
        <span className="bg-indigo-600 text-white rounded px-1">I’m Johao</span>
        . Nice to meet you.
      </h2>
      <p className="text-gray-600 mt-4">
        I am a software developer with 2 and a half years experience, currently
        I am specializing in front-end technologies such as ReactJS and Angular,
        with knowledge in mobile applications with React Native and back-end
        with NodeJS and Laravel.
      </p>

      <div className="flex items-end justify-center mt-16">
        <img
          className="h-48 w-48 rounded-t-full"
          alt="pic"
          src="/portfolio/profile-pic.png"
        />
      </div>
    </section>
  );
}
