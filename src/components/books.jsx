import React, { Component } from "react";
import noBookCover from "./img/no_book_cover.jpg";
class Books extends Component {
  /* constructor() {
    super();
  
    this.state = {
      displayDetails: false,
    };
  } */

  /* handleClick = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      return { displayDetails: !prevState.displayDetails };
    });
  }; */
  render() {
    const { volumeInfo } = this.props.item;
    var authors = "";

    if (volumeInfo.authors != null) {
      for (var i = 0; i < volumeInfo.authors.length; i++) {
        if (i > 1) {
          authors = ", " + volumeInfo.authors[i];
        } else {
          authors = volumeInfo.authors[i];
        }
      }
    }

    var descrip = "...";

    if (volumeInfo.description != null) {
      descrip = volumeInfo.description.substring(0, 200) + "...";
    }

    var id = "";

    if (this.props.item.id != null) {
      id = "book-" + this.props.item.id;
    }
    var links = noBookCover;
    if (
      volumeInfo.imageLinks != null &&
      volumeInfo.imageLinks.thumbnail != null
    ) {
      links = volumeInfo.imageLinks.thumbnail;
    }

    return (
      <figure className="col-md-3 col-xs-6 text-center" id={id}>
        <div
          className={this.props.item.displayDetails ? "hidden" : "perspective"}
        >
          <div className="book" id={id}>
            <div className="cover">
              <img
                src={links}
                alt={volumeInfo.title}
                title={volumeInfo.title}
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
        <div>
          <div
            className={this.props.item.displayDetails ? "details" : "hidden"}
          >
            <ul>
              <li>{descrip}</li>
              <li>{volumeInfo.publishedDate}</li>
              <li>{volumeInfo.publisher}</li>
              <li>{volumeInfo.pageCount} pages</li>
            </ul>
          </div>
          <div className="buttons">
            <a href={volumeInfo.previewLink} target="_blank">
              Preview
            </a>
            <a
              href="#"
              className="clicker"
              onClick={(e) => {
                e.preventDefault();
                this.props.handleClick(this.props.item.id);
              }}
            >
              {this.props.item.displayDetails ? "Collapse" : "Details"}
            </a>
          </div>
        </div>
        <figcaption>
          <h2>
            <span>{volumeInfo.title}</span>
            <span> By: {authors}</span>
          </h2>
        </figcaption>
      </figure>
    );
  }
}
export default Books;
