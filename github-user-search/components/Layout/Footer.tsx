import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-gray-700 bg-gray-900 text-gray-400 text-sm py-6 px-6 flex flex-col md:flex-row items-center justify-between">
      <p className="mb-2 md:mb-0">
        &copy; {new Date().getFullYear()} GitHub Profile Explorer. All rights reserved.
      </p>

      <nav className="flex gap-4">
        <a
          href="https://github.com/LeGabriel254/avatar/tree/Master/github-user-search"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-200"
        >
          View on GitHub
        </a>
        <a
          href="https://docs.github.com/en/rest/users/users#get-a-user"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-200"
        >
          API Docs
        </a>
        <a
          href="https://github.com/LeGabriel254"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-200 mr-2"
        >
          Author Gabriel Leon
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
