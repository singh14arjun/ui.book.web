import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black-400 text-center py-4 mt-10 shadow-inner">
      <p className="text-gray-600 text-sm">
        © {new Date().getFullYear()} MyWebsite. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
