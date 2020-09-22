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
          <title>My Portfolio</title>
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
