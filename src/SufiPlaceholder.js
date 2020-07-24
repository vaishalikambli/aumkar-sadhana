import React from "react";
import { NavLink } from "react-router-dom";

const SufiPlaceholder = (props) => {
  return (
    <React.Fragment>
      <div className="col-md-4">
        <NavLink to={props.pageLink}>
          <div className="card mb-4 shadow-sm">
            <img
              src={props.imgPath}
              alt={props.sufiTitle}
              title={props.sufiTitle}
              className="img-fluid imgEffect"
            />
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div className="sc_group_info">
                  <div className="sc_group_header">
                    <h4 className="sc_group_title">
                      <span>{props.sufiTitle}</span>
                    </h4>
                    <div className="sc_group_subtitle">
                      {props.sufiLocation}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </NavLink>
      </div>
    </React.Fragment>
  );
};

export default SufiPlaceholder;
