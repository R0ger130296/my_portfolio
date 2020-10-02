import Head from "next/head";

import React, { Component } from "react";

import Header from "./components/Header.jsx";
import HomeSection from "./sections/HomeSection.jsx";
import AboutSection from "./sections/AboutSection.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";
import ProjectsSection from "./sections/ProjectsSection.jsx";
import EducationSection from "./sections/EducationSection.jsx";
import ContactSection from "./sections/ContactSection.jsx";
import Footer from "./components/Footer.jsx";

class Home extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Johao Perlaza - My Projects and Personal Information </title>
          <meta
            name="description"
            content="Information about me, my acquired knowledge and skills, professional training and portfolio of projects carried out or under development."
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta charSet="UTF-8" />
        </Head>
        <Header />
        <HomeSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
        <Footer />
      </div>
    );
  }
}

export default Home;
