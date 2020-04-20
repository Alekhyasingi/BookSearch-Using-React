import React, { Component } from "react";
import noBookCover from "./img/no_book_cover.jpg";
class Books extends Component {
  constructor() {
    super();
    this.state = {
      displayDetails: false,
    };
  }

  componentDidMount() {
    if (this.props.item != null) {
      this.setState(this.props.item);
    }
  }
  handleClick = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      return { displayDetails: !prevState.displayDetails };
    });
  };
  render() {
    var authors = "";

    if (this.state.authors != null) {
      for (var i = 0; i < this.state.authors.length; i++) {
        if (i > 1) {
          authors = ", " + this.state.authors[i];
        } else {
          authors = this.state.authors[i];
        }
      }
    }

    var descrip = "...";

    if (this.state.description != null) {
      descrip = this.state.description.substring(0, 230) + "...";
    }

    var id = "";

    if (this.props.identifier != null) {
      id = "book-" + this.props.identifier;
      var a = this.state.count;
    }
    var links = noBookCover;
    if (
      this.state.imageLinks != null &&
      this.state.imageLinks.thumbnail != null
    ) {
      links = this.state.imageLinks.thumbnail;
    }

    return (
      <figure className="col-md-3 col-xs-6 text-center" id={id}>
        <div className={this.state.displayDetails ? "hidden" : "perspective"}>
          <div className="book" id={id}>
            <div className="cover">
              <img
                src={links}
                alt={this.state.title}
                title={this.state.title}
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
              <li>{this.state.publishedDate}</li>
              <li>{this.state.publisher}</li>
              <li>{this.state.pageCount} pages</li>
            </ul>
          </div>
          <div className="buttons">
            <a href={this.state.previewLink} target="_blank">
              Preview
            </a>
            <a href="#" className="clicker" onClick={this.handleClick}>
              {this.state.displayDetails ? "Collapse" : "Details"}
            </a>
          </div>
        </div>
        <figcaption>
          <h2>
            <span>{this.state.title}</span>
            <span> By: {authors}</span>
          </h2>
        </figcaption>
      </figure>
    );
  }
}
export default Books;
