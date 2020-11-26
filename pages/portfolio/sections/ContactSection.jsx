import React from "react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="h-auto lg:px-48 md:px-24 px-4 py-12 text-white"
      style={{ background: "#191919" }}
    >
      <div className="flex lg:flex-row md:flex-row flex-col">
        <div className="lg:w-1/4 md:w-1/4 w-full lg:px-12 md:px-12 px-4 self-center uppercase">
          <h1 className="font-bold text-2xl self-center text-center">
            Start a project together
          </h1>
        </div>

        <div className="lg:w-2/4 md:w-2/4 w-full lg:px-12 md:px-12 px-4 self-center">
          <h1 className="font-bold text-2xl self-center text-center text-gray-600">
            Interesting to working together? Let's schedule a meeting
          </h1>
        </div>

        <div className="lg:w-1/4 md:w-1/4 w-full text-center lg:mt-0 md:mt-0 sm:mt-0 mt-12 self-center flex flex-col">
          <i className="fas fa-envelope text-6xl px-12 flex self-center"></i>
          <div className="text-gray-600">
            <p>Johao Perlaza</p>
            <p>Quito, Ecuador</p>
            <p>(+593)978970998</p>
            <p>perlazajohao@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}
