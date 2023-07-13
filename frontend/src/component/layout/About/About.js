import React from "react";
import "./aboutSection.css";
import {Typography, Avatar } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://codeforces.com/profile/pkg180901";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dqf75urpt/image/upload/v1676201168/samples/pkg_eeolhx.jpg"
              alt="Founder"
            />
            <Typography>Prashant Kumar</Typography>
            <Typography>
              <h4>Working as a Backend Developer</h4>
            </Typography>
            <div>
              <a href="https://codeforces.com/profile/pkg180901" target="blank">
                <GitHubIcon className="githubSvgIcon" />
              </a>
              &nbsp;&nbsp;
              <a href="https://codeforces.com/profile/pkg180901" target="blank">
                <InstagramIcon className="instagramSvgIcon" />
              </a>
            </div>

          </div>
          <div className="aboutSectionContainer2">
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dqf75urpt/image/upload/v1689261084/IMG_20230713_132437_cnnatm.jpg"
              alt="Founder"
            />
            <Typography>Prince Kumar</Typography>
            <Typography>
              <h4>Working as a Frontent Developer</h4>
            </Typography>

            <div>
              <a href="https://github.com/aiswalprince07" target="blank">
                <GitHubIcon className="githubSvgIcon" />
              </a>
              &nbsp;&nbsp;
              <a href="https://www.instagram.com/kumarprince06/" target="blank">
                <InstagramIcon className="instagramSvgIcon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
