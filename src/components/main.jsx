import React, { Component } from "react";
import Header from "./header";
import Footer from "./footer";
import Books from "./books";

var Main = React.createClass({
  getInitialState: function() {
    return { items: [] };
  },

  localSubmit: function(search) {
    this.setState({ items: [] });
    var component = this;
  },

  render: function() {
    var books = [];

    books = this.state.items.map(function(book) {
      return (
        <Books key={book.id} item={book.volumeInfo} identifier={book.id} />
      );
    });

    return (
      <div>
        <Header localSubmit={this.localSubmit} />
        <div className="main"></div>

        <Footer />
      </div>
    );
  }
});

export default Main;

//ReactDOM.render(<Main />, document.getElementById("scroll-wrap"));
