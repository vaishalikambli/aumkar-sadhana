import React from "react";
import "./App.scss";

import { NavLink } from "react-router-dom";
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

import Nav from "./Nav";
import Home from "./Home";
import Establishment from "./Establishment";
import SufisContribution from "./SufisContribution";
import AaratiSadhana from "./Aaratisadhana";
import AumkarSadhana from "./AumkarSadhana";
import Kamkaj from "./Kamkaj";
import SufiHajiMalangBaba from "./SufiHajiMalangBaba";
import SufiMohammadJilanibaba from "./MohammadJilanibaba";
import SufiAjmerSharif from "./SufiAjmerSharif";
import SufiBandeNawaz from "./SufiBandeNawaz";
import SufiSalimChishti from "./SufiSalimChishti";
import SufiQutbuddinBaba from "./SufiQutbuddinBaba";
import Footer from "./Footer";

library.add(fab);

function App() {
  return (
    <Router>
      <div className="App">
        <a className="scrollToTop" title="Scroll to top" href="!#">
          <FontAwesomeIcon icon={faChevronUp} />
        </a>
        <header id="header">
          <div className="as_info_section">
            <div className="container">
              <div className="main_section">
                <div className="main_title">
                  <h2>
                    <FontAwesomeIcon icon={faOm} />
                    <NavLink exact to="/" activeClassName="">Aumkar Sadhana</NavLink>
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
                      <FontAwesomeIcon icon={faPhoneAlt} />
                      <span className="ml-2">
                        Call: <a href="tel:+14168284464">(416) 828 4464</a>
                      </span>
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
            <Nav />
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
