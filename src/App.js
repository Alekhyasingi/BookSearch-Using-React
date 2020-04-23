import React, { Component } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Books from "./components/books";
import $ from "jquery";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      searchInput: "",
    };
  }

  reloadBookList() {
    this.setState({ items: [] });
    var component = this;
    axios
      .get("http://localhost:8080/search")
      .then((response) => {
        console.log(response.data.result);
        component.setState({ items: response.data.result });
        $(".front").css("background", "url(img/no_book_cover.jpg)");

        for (var i = 0; i < component.state.items.length; i++) {
          if (component.state.items[i].volumeInfo.imageLinks != null) {
            $("#book-" + component.state.items[i].id)
              .find(".front")
              .css(
                "background",
                "url(" +
                  component.state.items[i].volumeInfo.imageLinks.thumbnail +
                  ")"
              );
          }
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  componentDidMount() {
    this.reloadBookList();
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  localSubmit(search) {
    axios
      .get("http://localhost:8080/search/title/" + search)
      .then((response) => {
        this.setState({ items: response.data.result, searchInput: "" });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    var books = [];
    var content = [];
    if (this.state.items !== null && this.state.items.length !== 0) {
      books = this.state.items.map(function (book) {
        return (
          <Books key={book.id} item={book.volumeInfo} identifier={book.id} />
        );
      });
    }
    if (books.length > 0) {
      content = books;
    } else {
      content = (
        <div className="search-icon">
          <i className="fa fa-search"></i>
        </div>
      );
    }
    return (
      <React.Fragment>
        <Header
          localSubmit={this.localSubmit.bind(this)}
          searchInput={this.state.searchInput}
          handleChange={this.handleChange}
        />
        <div className="main">
          <div id="bookshelf" className="bookshelf">
            {content}
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
