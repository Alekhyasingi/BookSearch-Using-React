import React, { Component } from "react";
import reactImage from "./img/react.png";
import googleBooksAPIImage from "./img/googlebooks.png";

class Footer extends Component {
  //state = {};
  render() {
    return (
      <div className="related">
        <p>Created by : Alekhya Singisetty</p>

        <a href="http://facebook.github.io/react/" target="_blank">
          {/* <img className="logo-img" src={reactImage} /> */}
          <h4>React JS</h4>
        </a>
        <a href="https://developers.google.com/books/?hl=en" target="_blank">
          {/* <img className="logo-img" src={googleBooksAPIImage} /> */}
          <h4>Google Books API</h4>
        </a>
      </div>
    );
  }
}

export default Footer;
