import React, { Component } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Books from "./components/books";
//import logo from "./logo.svg";
import "./App.css";
import "./css/bookblock.css";
//import "./css/component.css";
import "./css/normalize.css";
import axios from "axios";

class App extends Component {
  //state = {};
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      message: null
    };
  }
  componentDidMount() {
    this.reloadBookList();
  }
  reloadBookList() {
    axios
      .get("http://localhost:8080/search")
      .then(response => {
        console.log(response.data.result);
        this.setState({ items: response.data.result });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    var books = [];
    var content;

    books = this.state.items.map(function(book) {
      return (
        <Books key={book.id} item={book.volumeInfo} identifier={book.id} />
      );
    });
    if (books.length > 0) {
      content = books;
    } else {
      content = (
        <div className="search-icon">
          <span className="glyphicon glyphicon-search"></span>
        </div>
      );
    }
    return (
      <React.Fragment>
        <Header localSubmit={this.localSubmit} />
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
