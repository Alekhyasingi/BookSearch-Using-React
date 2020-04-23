import React, { Component } from "react";
import bookSearchImage from "./img/bookSearch.jpg";
class Header extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.localSubmit(this.props.searchInput);
  };
  render() {
    return (
      <header className="main">
        <p>Book Search</p>

        <form
          style={{ width: 550, marginLeft: "auto", marginRight: "auto" }}
          onSubmit={this.handleSubmit}
        >
          <div className="input-group">
            <img
              style={{ height: 50, width: 150 }}
              className="logo-img"
              src={bookSearchImage}
            />

            <input
              className="form-control"
              placeholder="Search"
              ref="search"
              name="searchInput"
              value={this.props.searchInput}
              onChange={(event) => this.props.handleChange(event)}
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
