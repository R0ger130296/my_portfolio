import React, { Component } from "react";

class AboutSection extends Component {
  render() {
    return (
      <section className="bg-gray-800 pattern py-20">
        <div className="max-w-5xl px-6 mx-auto text-center">
          <h2 className="text-2xl font-semibold text-white">About Me</h2>
          <p className="text-gray-400 mt-4">
            In all this time I have had the opportunity to carry out many
            interesting projects, with a great desire to learn new things,
            ability to work in a team and to carry out projects in the best way,
            committed to my duties and with a great motivation to take on new
            challenges.
          </p>
          <p className="text-gray-400 mt-4">
            Why me? I'm looking for personal growth.
          </p>
        </div>
      </section>
    );
  }
}

export default AboutSection;
