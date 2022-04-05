import React from "react";
// import { axios } from "axios";

const Space_card = (props) => {
  let {
    imageUrl,
    title,
    description,
    rlaunch_url,
    buttontitle,
    key,
    year,
    status,
    r_name,
  } = props;

  return (
    <>
      <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 mt-4">
        <div className="card ">
          {/* <img src={imageUrl} className="card-img-top" alt="Space x" /> */}
          <div className="card-body">
            <h5 className="card-title">Mission Name:- {title}</h5>
            <p className="card-title">
              <strong>Rocket Name:-</strong> {r_name}
            </p>
            <span className="card-title">
              <strong>Description:- </strong>
              {description}
            </span>
            <p className="card-text">
              <strong>Mission Status</strong>:{" "}
              {status ? "Mission Fils" : "Mission Pass"}
            </p>
            <p className="card-text">Launch Year:- {year}</p>
            <a
              href={rlaunch_url}
              target="_blank"
              className="btn btn-primary"
              rel="noreferrer"
            >
              {buttontitle}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Space_card;
