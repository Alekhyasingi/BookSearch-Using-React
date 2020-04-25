import React, { Component } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Books from "./components/books";

import "./App.css";
import axios from "axios";

class App extends Component {
  constructor() {
    super();

    this.state = {
      items: [],
      searchInput: "",
    };
  }

  reloadBookList() {
    this.setState({ items: [] });

    axios
      .get("http://localhost:8080/search")
      .then((response) => {
        const items = response.data.result.map((item) => ({
          ...item,
          displayDetails: false,
        }));

        this.setState({ items });
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
  handleDisplayDetails = (identifier) => {
    const items = this.state.items.map((item) => {
      if (item.id === identifier) {
        item.displayDetails = !item.displayDetails;
        return item;
      }
      return item;
    });

    this.setState({ items });
  };
  localSubmit = (search) => {
    axios
      .get("http://localhost:8080/search/title/" + search)
      .then((response) => {
        const items = response.data.result.map((item) => ({
          ...item,
          displayDetails: false,
        }));

        this.setState({ items });
        this.setState({ items, searchInput: "" });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    var books = [];
    var content = [];
    if (this.state.items !== null && this.state.items.length !== 0) {
      books = this.state.items.map((book) => {
        return (
          <Books
            key={book.id}
            item={book}
            handleClick={this.handleDisplayDetails}
          />
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
          localSubmit={this.localSubmit}
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
