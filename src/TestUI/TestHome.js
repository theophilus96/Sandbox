import React from "react";
import useFirestore from "../hooks/useFirestore";
import { Link } from "react-router-dom";

export default function TestHome() {

  const { docs } = useFirestore("company");
  console.log(docs);
  return (
      <div>
    <section className="pt-8 pt-md-12 pb-12 pb-md-15">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 text-center">
            {/* Headin */}
            <h1 className="display-1 fw-bold">Our Companies.</h1>

            {/* Text */}
            <p className="lead text-secondary mb-4">
              Find a new company to network with. Grow your projects together.
            </p>
          </div>
          <br />
          <div className="container">
            <div className="pt-8 pt-md-8 pb-2 pb-md-2 row align-items-center">
              {/* <CompanySearch /> */}
              <form className="rounded shadow mb-4">
                <div className="input-group input-group-lg">
                  {/* Text */}
                  <span className="input-group-text border-0 pe-1">
                    <i className="fe fe-search"></i>
                  </span>

                  {/* Input */}
                  <input
                    className="form-control border-0 px-1"
                    type="text"
                    aria-label="Search Companies ..."
                    placeholder="Search Companies ..."
                  />

                  {/* Text */}
                  <span className="input-group-text border-0 py-0 ps-1 pe-3">
                    <a
                      className="btn btn-sm btn-primary"
                      href="blog-search.html"
                    >
                      Search
                    </a>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>{" "}
        {/* / .row */}
      </div>{" "}
      {/* / .container */}
    </section>
    <section className="py-8 py-md-11 mt-n10 mt-md-n14">
    <div className="container">
      <div
        className="row"
        id="portfolio"
        data-isotope='{"layoutMode": "fitRows"}'
      >
        {docs &&
          docs.map((doc) => (
            <div className="col-12 col-md-4 product">
              {/* style={{ position: "absolute", left: "0px", top: "0px" }} */}

              <Link to={`/company/${doc.id}`} className="card card-flush mb-7">
                {/* Image */}
                <div className="card-zoom">
                  <img
                    className="card-img-top rounded shadow-light-lg"
                    src={doc.image}
                    alt="..."
                  />
                  {/* style={{ imageSize: "contain" }} */}
                </div>

                {/* Footer */}
                <div className="card-footer">
                  {/* Preheading */}
                  <h6 className="text-uppercase mb-1 text-muted">
                    {doc.description}
                  </h6>

                  {/* Heading */}
                  <h4 className="mb-0">{doc.name}</h4>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  </section>
  </div>
  );
}
