import React from "react";
import "./App.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab);

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-sm-12">
            <div className="footer_component">
              <div className="component_content">
                <h3>Contact Info</h3>
                <div className="contact_info_list">
                  <ul className="ci_list">
                    <li>
                      <span className="circle">
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                      </span>
                      <a
                        href="https://goo.gl/maps/637cdRkMRZYJp4iUA"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        4205 Shipp Dr, Unit 2609, <br /> Mississauga - L4Z 2Y9
                      </a>
                    </li>
                    <li>
                      <span className="circle">
                        <FontAwesomeIcon icon={faPhoneAlt} />
                      </span>
                      Phone: <a href="tel:+14168284464">(416) 828 4464</a>{" "}
                      <br /> Fax: (416) 828 4464
                    </li>
                    <li>
                      <span className="circle">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </span>
                      <a href="mailto:admin@aumkarsadhana.org">
                        admin@aumkarsadhana.org
                      </a>
                      <br />
                      <a href="mailto:info@aumkarsadhana.org">
                        info@aumkarsadhana.org
                      </a>
                    </li>
                    <li>
                      <span className="circle">
                        <FontAwesomeIcon icon={faClock} />
                      </span>
                      Mon-Fri: 7:00 pm - 9:00 pm <br /> Sat-Sun: 10:00 am -
                      12:00 pm
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-sm-12">
            <div className="footer_component">
              <div className="component_content">
                <h3>More Info</h3>
                <div className="more_info_list">
                  <ul>
                    <li>
                      <a href="#!">Blog</a>
                    </li>
                    <li>
                      <a href="#!">Downloads</a>
                    </li>
                    <li>
                      <a href="#!">FAQ</a>
                    </li>
                    <li>
                      <a href="#!">Media &amp; Press Release</a>
                    </li>
                    <li>
                      <a href="#!">Other Centers</a>
                    </li>
                    <li>
                      <a href="#!">Volunteer</a>
                    </li>
                    <li>
                      <a href="#!">Photos</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-sm-12">
            <div className="footer_component">
              <div className="component_content">
                <h3>Upcoming Events</h3>
                <div className="more_info_list">
                  <div className="contact_info_list">
                    <ul className="recent_event">
                      <li>
                        <div className="recent_event_date">
                          <a href="#!" target="_self">
                            2<span className="e_month">Sep</span>
                            <span className="e_year">2020</span>
                          </a>
                        </div>
                        <div className="recent_event_content">
                          <div className="recent_event_title">Purnima Anusthan</div>
                          <p>
                            Please do Anushthan vidhi on Pratimas as per given
                            dates on amavasya and purnima
                          </p>
                        </div>
                        <div className="clear"></div>
                      </li>
                      <li>
                        <div className="recent_event_date">
                          <a href="#!" target="_self">
                            Daily<span className="e_month">Aug</span>
                            <span className="e_year">2020</span>
                          </a>
                        </div>
                        <div className="recent_event_content">
                          <div className="recent_event_title">
                            Daily Aumkar Sadhana
                          </div>
                          <p>
                            Everyday: Canadian time 7.00 pm
                            <br />
                            Meeting Details: 
                            <a
                              className="btn-primary-link"
                              href="https://meet.google.com/dde-wnvt-sye"
                              target="_blank"
                              rel="noopener noreferrer"
                            > Click here
                            </a>
                          </p>
                        </div>
                        <div className="clear"></div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="small_footer">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-sm-12">
              <span>
                Copyright &copy; 2020 Aumkar Sadhana Online. All Rights
                Reserved.
              </span>
            </div>
            <div className="col-md-5 col-sm-12 text-md-right mt-md-1">
              <ul className="list-unstyled list-inline mb-7 mb-md-0">
                <li className="list-inline-item">
                  <a
                    href="https://www.facebook.com/aumkar.sadhana.79"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-gray-350"
                    title="Join WhatsApp Group"
                  >
                    <FontAwesomeIcon icon={["fab", "whatsapp"]} />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://www.facebook.com/aumkar.sadhana.79"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-gray-350"
                    title="Facebook"
                  >
                    <FontAwesomeIcon icon={["fab", "facebook-f"]} />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://www.youtube.com/channel/UC9qyN0963IO9njQUM2KNE4w"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-gray-350"
                    title="YouTube"
                  >
                    <FontAwesomeIcon icon={["fab", "youtube"]} />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="#!"
                    className="text-gray-350"
                    target="_blank"
                    title="Twitter"
                  >
                    <FontAwesomeIcon icon={["fab", "twitter"]} />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="#!"
                    className="text-gray-350"
                    target="_blank"
                    title="Instagram"
                  >
                    <FontAwesomeIcon icon={["fab", "instagram"]} />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="#!"
                    className="text-gray-350"
                    target="_blank"
                    title="LinkedIn"
                  >
                    <FontAwesomeIcon icon={["fab", "linkedin"]} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
