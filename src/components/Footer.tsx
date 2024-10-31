import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-12 md:p-8 lg:p-10">
        <hr className="my-6 border-gray-200 sm:mx-auto" />
        <div className="text-center">
          <span className="block text-sm text-center text-gray-500">
            © 2024 Mathieu Bon.
            <a href="#" className="text-primary-1 hover:underline">
              Legal Notice
            </a>
            .
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
