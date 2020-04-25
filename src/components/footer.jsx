import React from "react";
const Footer = () => {
  return (
    <div className="related">
      <p>Created by : Alekhya Singisetty</p>

      <a
        href="http://facebook.github.io/react/"
        rel="noopener noreferrer"
        target="_blank"
      >
        {/* <img className="logo-img" src={reactImage} /> */}
        <h4>React JS</h4>
      </a>
      <a
        href="https://developers.google.com/books/?hl=en"
        rel="noopener noreferrer"
        target="_blank"
      >
        {/* <img className="logo-img" src={googleBooksAPIImage} /> */}
        <h4>Google Books API</h4>
      </a>
    </div>
  );
};

export default Footer;
