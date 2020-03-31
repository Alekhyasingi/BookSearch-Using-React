import React, { Component } from "react";
import ReactDOM from "react-dom";
import bookSearchImage from "./img/bookSearch.png";
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
                ref="search"
              />
              <button className="btn btn-primary no-top-margin">
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
