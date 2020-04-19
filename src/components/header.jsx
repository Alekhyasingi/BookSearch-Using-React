import React, { Component } from "react";
import bookSearchImage from "./img/bookSearch.jpg";
class Header extends Component {
  state = {
    searchInput: "",
  };
  handleChange = (event) => {
    this.setState({ searchInput: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();

    this.props.localSubmit(this.state.searchInput);
    this.setState({ searchInput: "" });
  };
  render() {
    return (
      <header className="main">
        <p>Book Search</p>

        <form onSubmit={this.handleSubmit}>
          <div className="input-group">
            <img
              style={{ float: "left", height: 50, width: 150 }}
              className="logo-img"
              src={bookSearchImage}
            />

            <input
              className="form-control"
              placeholder="Search"
              ref="search"
              name="searchInput"
              value={this.state.searchInput}
              onChange={this.handleChange}
              style={{ width: 350 }}
            />
            <div className="input-group-append">
              <button type="Submit" className="btn btn-secondary">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
        </form>
      </header>
    );
  }
}

export default Header;
