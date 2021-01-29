import React from "react";
import "./App.scss";

import { NavLink } from "react-router-dom";

function Home() {
  return (
    <main role="main" className="vibhuti_sec">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <div className="card">
              <img
                src={require("../src/img/dadas_pic.jpg")}
                alt="SRI DATTATRAY BHASKAR BHAGWAT (KNOWN AS DADA)"
                title="SRI DATTATRAY BHASKAR BHAGWAT (KNOWN AS DADA)"
                className="rounded img-fluid"
              />
            </div>
            <div className="card-body p-4">
              <h4 className="mb-3">Revered Dada</h4>
              <p>Revered Dada Bhagwat - (1921 - 1991)</p>
              <NavLink to="/establishment" activeClassName="btn-primary-link">
                <span className="btn-primary-link">Read more</span>
              </NavLink>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="card">
              <img
                src={require("../src/img/saibabas_pic.jpg")}
                alt="SRI SAIBABA"
                title="SRI SAIBABA"
                className="rounded img-fluid"
              />
            </div>
            <div className="card-body p-4">
              <h4 className="mb-3">Shri Sai Baba</h4>
              <p>(SAMADHI ON OCTOBER 15, 1918)</p>
              <NavLink to="/establishment" activeClassName="btn-primary-link">
                <span className="btn-primary-link">Read more</span>
              </NavLink>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="card">
              <img
                src={require("../src/img/panta_maharaj_pic.jpg")}
                alt="SRI PANT MAHARAJ"
                title="SRI PANT MAHARAJ"
                className="rounded img-fluid"
              />
            </div>
            <div className="card-body p-4">
              <h4 className="mb-3">Shri Pant Maharaj</h4>
              <p>(SEPTEMBER 03, 1855 - OCTOBER 16, 1905)</p>
              <NavLink to="/establishment" activeClassName="btn-primary-link">
                <span className="btn-primary-link">Read more</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
