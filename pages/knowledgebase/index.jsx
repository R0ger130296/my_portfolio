import React from "react";
import Head from "next/head";

import Header from "./components/Header.jsx";
import GetAllPosts from "./components/GetAllPosts.jsx";
import Footer from "./components/Footer.jsx";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Johao Perlaza - Knowledge Base Page </title>
        <meta
          name="description"
          content="Series of steps, manuals and relevant information of tools I have used."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>

      <Header />
      <section className="w-full flex lg:flex-row md:flex-row flex-col">
        <GetAllPosts />
      </section>
      <Footer />
    </div>
  );
}
