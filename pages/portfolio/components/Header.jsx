import React from "react";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  return (
    <header className="bg-white shadow border-t-4 border-indigo-600">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <button
              className="flex items-center text-gray-800 hover:text-indigo-600"
              onClick={() => router.push("/knowledgebase")}
            >
              <i className="fas fa-terminal"></i>
              <span className="mx-3 font-medium text-sm md:text-base">
                Knowledge Base
              </span>
            </button>
          </div>
          <div className="flex items-center -mx-2">
            <button
              className="flex items-center mx-2 text-gray-800 hover:text-indigo-600"
              onClick={() => window.open("https://github.com/vimhash")}
            >
              <i className="fab fa-github text-2xl"></i>
            </button>

            <button
              className="flex items-center mx-2 text-gray-800 hover:text-indigo-600"
              onClick={() =>
                window.open("https://www.linkedin.com/in/perlazajohao/")
              }
            >
              <i className="fab fa-linkedin text-2xl"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
