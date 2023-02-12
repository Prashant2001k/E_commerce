import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
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
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dqf75urpt/image/upload/v1676201393/samples/292393717_572613227568467_4128593112564682711_n_custom-1c4747f8862d5f8b3b0137378dc87a2461d63425-s1100-c50_lwxhbg.jpg"
              alt="Founder"
            />
            <Typography>Prince Kumar</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a sample wesbite made by prashant Kumar and Prince Kumar. This is a MERN Stack Ecommerce website.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://codeforces.com/profile/pkg180901"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://codeforces.com/profile/pkg180901" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;