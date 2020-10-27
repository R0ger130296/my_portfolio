import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Site Not Found</title>
        <meta name="description" content="Site Not Found." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>
      <div>
        <div className="h-screen w-screen bg-gray-100 flex items-center">
          <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
            <div className="max-w-md">
              <div className="text-5xl font-dark font-bold">404</div>
              <p className="text-2xl md:text-3xl font-light leading-normal">
                Sorry we couldn't find this page.{" "}
              </p>
              <p className="mb-8">
                But dont worry, you can find plenty of other things on our
                knowledge base page.
              </p>

              <button
                className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700"
                onClick={() => router.back()}
              >
                go back
              </button>
            </div>
            <div className="max-w-lg">
              <img src="/vimhash.webp" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
