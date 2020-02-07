import React, { Component } from "react";
import ReactDOM from "react-dom";
import bookSearchImage from "./img/BookSearch.png";
class Header extends Component {
  handleSubmit = e => {
    e.preventDefault();
    var input = ReactDOM.findDOMNode(this.refs.search);

    this.props.localSubmit(input.value);

    input.value = "";
  };
  render() {
    return (
      <header className="codrops-header">
        {/* <h1>Book Search</h1> */}
        <div>
          <img className="logo-img" src={bookSearchImage} />
        </div>

        <div>
          <form
            className="form-inline"
            style={{ marginTop: 30 + "px" }}
            onSubmit={this.handleSubmit}
          >
            <div className="form-group">
              <input
                className="form-control"
                placeholder="Book Title ..."
                type="search"
              />
              <button className="btn btn-default">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </form>
        </div>
      </header>
    );
  }
}

export default Header;
