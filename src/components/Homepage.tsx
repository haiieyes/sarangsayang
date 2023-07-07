import React from "react";
import homepagebg from "./images/homepage4.png";
import BridalAds from "./BridalAds";

const Homepage = () => {
  return (
    <div className="">
      <div className="m-0 alert alert-info text-center" role="alert">
        <i className="bi bi-house-heart-fill"></i> Your one-stop wedding
        planning partner &nbsp;
        <button type="button" className="btn btn-outline-secondary btn-sm">
          Create Account
        </button>
      </div>
      <div className="">
        <div className="card">
          <img src={homepagebg} className="card-img" alt="..." />
          <div className="card-img-overlay position-absolute top-50 start-50 translate-middle ">
            <br />
            <br />
            <div className="">
              <div className="container-fluid py-5">
                <div className="input-group input-group-lg shadow-lg">
                  <span className="input-group-text">
                    <i className="bi bi-search-heart-fill"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-lg"
                    placeholder="Search Bridals, Venues, Catering..."
                  />
                  <button
                    className="btn btn-info text-light"
                    type="button"
                    id="searchButton"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="container">
        <BridalAds />
      </div>
    </div>
  );
};

export default Homepage;
