import React from "react";
import bookSearchImage from "./img/bookSearch.jpg";

const Header = (props) => {
  return (
    <header className="main">
      <p>Book Search</p>

      <form
        style={{ width: 550, marginLeft: "auto", marginRight: "auto" }}
        onSubmit={(event) => {
          event.preventDefault();
          props.localSubmit(props.searchInput);
        }}
      >
        <div className="input-group">
          <img
            style={{ height: 50, width: 150 }}
            className="logo-img"
            src={bookSearchImage}
            alt="lib"
          />

          <input
            className="form-control"
            placeholder="Search"
            name="searchInput"
            value={props.searchInput}
            onChange={(event) => props.handleChange(event)}
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
};

export default Header;
