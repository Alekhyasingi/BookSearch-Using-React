import React, { Component } from "react";
import noBookCover from "./img/no_book_cover.jpg";
class Books extends Component {
  constructor() {
    super();
    /*  uncontrolled state as details may not need 
    to be saved by parent class but can be refreshed */
    this.state = {
      displayDetails: false,
    };
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      return { displayDetails: !prevState.displayDetails };
    });
  };
  render() {
    const { item } = this.props;
    var authors = "";

    if (item.authors != null) {
      for (var i = 0; i < item.authors.length; i++) {
        if (i > 1) {
          authors = ", " + item.authors[i];
        } else {
          authors = item.authors[i];
        }
      }
    }

    var descrip = "...";

    if (item.description != null) {
      descrip = item.description.substring(0, 200) + "...";
    }

    var id = "";

    if (this.props.identifier != null) {
      id = "book-" + this.props.identifier;
      var a = item.count;
    }
    var links = noBookCover;
    if (item.imageLinks != null && item.imageLinks.thumbnail != null) {
      links = item.imageLinks.thumbnail;
    }

    return (
      <figure className="col-md-3 col-xs-6 text-center" id={id}>
        <div className={this.state.displayDetails ? "hidden" : "perspective"}>
          <div className="book" id={id}>
            <div className="cover">
              <img
                src={links}
                alt={item.title}
                title={item.title}
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
        <div>
          <div className={this.state.displayDetails ? "details" : "hidden"}>
            <ul>
              <li>{descrip}</li>
              <li>{item.publishedDate}</li>
              <li>{item.publisher}</li>
              <li>{item.pageCount} pages</li>
            </ul>
          </div>
          <div className="buttons">
            <a href={item.previewLink} target="_blank">
              Preview
            </a>
            <a href="#" className="clicker" onClick={this.handleClick}>
              {this.state.displayDetails ? "Collapse" : "Details"}
            </a>
          </div>
        </div>
        <figcaption>
          <h2>
            <span>{item.title}</span>
            <span> By: {authors}</span>
          </h2>
        </figcaption>
      </figure>
    );
  }
}
export default Books;
