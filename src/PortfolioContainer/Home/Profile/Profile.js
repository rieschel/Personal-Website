import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

function Profile(props) {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/emilia-rieschel/">
                <i className="fa fa-linkedin-square fa-3x"></i>
              </a>
              <a href="https://www.instagram.com/emiliarieschel/">
                <i className="fa fa-instagram fa-3x"></i>
              </a>
              <a href="https://github.com/rieschel">
                <i className="fa fa-github-square fa-3x"></i>
              </a>
              <a href="mailto: emilia.rieschel@gmail.com">
                <i className="fa fa-envelope fa-3x"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Emilia</span>
            </span>
          </div>

          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Passionate Computer Science Student",
                    1000,
                    "CEO for one month",
                    1000,
                    "Nova 111 Student Winner",
                    1000,
                    "Tech Student of the year - finalist",
                    1000,
                    "React Developer",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Computer science student focusing on web development, leadership
                and female empowerment.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <a href="CV - Emilia Rieschel.pdf" download="Emilia Rieschel.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
