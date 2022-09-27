import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-scroll";
import './Header.css'

const linkstyle = { textDecoration: "none", color: "#000000" };

const Header = () => {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand  text-white" href="/">
            Relymer Labs
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
              <Link to="/" style={linkstyle}>
                  <a className="nav-link active text-white" aria-current="page" href="/">
                    Home
                  </a>
              </Link>
                </li>
                <li className="nav-item">
              <Link to="/faqs" style={linkstyle}>
                  <a className="nav-link text-white" href="/">
                    Faqs
                  </a>
              </Link>
                </li>
                <li className="nav-item">
              <Link to="/faq" style={linkstyle}>
                  <a className="nav-link text-white" href="/">
                    Faq
                  </a>
              </Link>
                </li>
                <li className="nav-item">
              <Link to="/contact" style={linkstyle}>
                  <a className="nav-link text-white" href="/">
                    Contact
                  </a>
              </Link>
                </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-search text-white" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
