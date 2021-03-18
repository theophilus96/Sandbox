import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
import logo from "../assets/new sandbox logo.png";

//css
import "../css/theme.css";
import "../css/libs.css";
import AOS from "aos";

export default function TestNavBar() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-light navbar-togglable fixed-top bg-white border-bottom">
        <div className="container">
          {/* Brand */}
          <Link to="/" className="navbar-brand">
            <img src={logo} className="navbar-brand-img" alt="..." />
          </Link>

          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapse */}
          <div className="collapse navbar-collapse" id="navbarCollapse">
            {/* Toggler */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fe fe-x"></i>
            </button>

            {/* Navigation */}
            <ul className="navbar-nav ms-auto">
              <li className="nav-item dropdown">
                <Link
                  to="/company"
                  className="nav-link dropdown-toggle"
                  id="navbarLandings"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Companies
                </Link>

                <div
                  className="dropdown-menu dropdown-menu-md p-0"
                  aria-labelledby="navbarLandings"
                >
                  <div className="row gx-0">
                    {/* <div className="col-12 col-lg-6">
                      <div
                        className="dropdown-img-start"
                        style={{
                          backgroundImage: `url(require("./assets/img/photos/photo-3.jpg"))`,
                        }}
                      >
                        <h4 className="fw-bold text-white mb-0">Overview</h4>

                        <p className="fs-sm text-white">
                          See all the pages at once.
                        </p>

                        <a
                          href="./overview.html"
                          className="btn btn-sm btn-white shadow-dark fonFt-size-sm"
                        >
                          View all pages
                        </a>
                      </div>
                    </div> */}
                    <div className="col-6 col-lg-6">
                      <div className="dropdown-body">
                        <div className="row gx-0">
                          <div className="col-6">
                            {/* Heading */}
                            <h6 className="dropdown-header">Types</h6>

                            {/* List */}
                            <a className="dropdown-item" href="/company">
                              all
                            </a>
                          </div>
                        </div>{" "}
                        {/* / .row */}
                      </div>
                    </div>
                  </div>{" "}
                  {/* / .row */}
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarPages"
                  data-bs-toggle="dropdown"
                  href="#"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Social
                </a>
                {/* / .row */}
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  id="navbarAccount"
                  to="/blog"
                >
                  Blog
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDocumentation"
                  data-bs-toggle="dropdown"
                  href="#"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Contacts
                </a>
                <div
                  className="dropdown-menu dropdown-menu-md"
                  aria-labelledby="navbarDocumentation"
                >
                  <div className="list-group list-group-flush">
                    <a className="list-group-item" href="/contact">
                      {/* Icon */}
                      <div class="icon-circle bg-primary text-white">
                        <i class="fe fe-phone"></i>
                      </div>

                      {/* Content */}
                      <div className="ms-4">
                        {/* Heading */}
                        <h6 className="fw-bold text-uppercase text-primary mb-0">
                          Contact
                        </h6>

                        {/* Text */}
                        <p className="fs-sm text-gray-700 mb-0">
                          Let us help you
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  onClick={handleAuthentication}
                  href={!user && "/login"}
                >
                  Hello {!user ? "Guest" : user.email}
                </a>
              </li>
            </ul>

            {/* Button */}

            <Link to="/checkout">{basket?.length}</Link>

            <a
              className="navbar-btn btn btn-sm btn-primary lift ms-auto"
              href={!user && "/login"}
              onClick={handleAuthentication}
            >
              {user ? "Sign Out" : "Sign In"}
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
