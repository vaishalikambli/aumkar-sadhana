import React from "react";
import "./App.scss";

import Nav from "./Nav";
import Home from "./Home";
import Establishment from "./Establishment";
import SufisContribution from "./SufisContribution";
import AaratiSadhana from "./Aaratisadhana";
import AumkarSadhana from "./AumkarSadhana";
import Kamkaj from "./Kamkaj";
import SufiHajiMalangBaba from "./SufiHajiMalangBaba";
import SufiMohammadJilanibaba from "./MohammadJilanibaba";
import SufiAjmerSharif from "./sufiajmersharif";
import SufiBandeNawaz from "./SufiBandeNawaz";
import SufiSalimChishti from "./SufiSalimChishti";
import SufiQutbuddinBaba from "./SufiQutbuddinBaba";

import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faOm,
  faPhoneAlt,
  faEnvelope,
  faChevronUp,
  faChevronCircleDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab);

function App() {
  return (
    <Router>
      <div className="App">
      <a className="scrollToTop" title="Scroll to top" href="!#"><FontAwesomeIcon icon={faChevronUp} /></a>
        <header id="header">
          <div className="as_info_section">
            <div className="container">
              <div className="main_section">
                <div className="main_title">
                  <h2 className="">
                    <FontAwesomeIcon icon={faOm} />
                    Aumkar Sadhana
                  </h2>
                </div>
                <div className="logo_section_toggle">
                  <span className="logo_section_btn">
                    <FontAwesomeIcon icon={faChevronCircleDown} />
                  </span>
                </div>
                <div className="info_section">
                  <ul>
                    <li>
                      <a href="tel:+14168284464">
                        <FontAwesomeIcon icon={faPhoneAlt} />
                        <span className="ml-2">Call: (416) 828 4464</span>
                      </a>
                    </li>
                    <li>
                      <a href="mailto:info@aumkarsadhana.org">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span className="ml-2">info@aumkarsadhana.org</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            {/* <a
              href="#main-menu"
              id=""
              className="menu-toggle"
              aria-label="Open main menu"
            >
              <span className="sr-only">Open main menu</span>
              <span className="hamburger" aria-hidden="true"></span>
            </a> */}
            <Nav />
            {/* <a href="#main-menu-toggle" className="backdrop" tabIndex="-1" aria-hidden="true"></a> */}
          </div>
        </header>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/establishment" component={Establishment} />
          <Route path="/sufiscontribution" component={SufisContribution} />
          <Route path="/aaratisadhana" component={AaratiSadhana} />
          <Route path="/aumkarsadhana" component={AumkarSadhana} />
          <Route path="/kamkaj" component={Kamkaj} />
          <Route path="/sufihajimalangbaba" component={SufiHajiMalangBaba} />
          <Route
            path="/sufimohammadjilanibaba"
            component={SufiMohammadJilanibaba}
          />
          <Route path="/sufiajmersharif" component={SufiAjmerSharif} />
          <Route path="/sufibandenawaz" component={SufiBandeNawaz} />
          <Route path="/sufisalimchishti" component={SufiSalimChishti} />
          <Route path="/sufiqutbuddinbaba" component={SufiQutbuddinBaba} />
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
