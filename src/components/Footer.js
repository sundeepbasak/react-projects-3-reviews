import React from "react";

const Footer = () => {
  return (
    <div className="my-4">
      <div className="border-t-2"></div>
      <p className="font-medium text-white">
        Made with ❤️ by
        <a
          href="https://www.linkedin.com/in/sundeepbasak/"
          target="_blank"
          rel="noreferrer"
          className="text-red-600 italic font-bold underline"
        >
          {" "}
          Sundeep Basak
        </a>
      </p>
    </div>
  );
};

export default Footer;
