import React from "react";
import "../CSS/Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import logo from "../Images/logo192 copy.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer1">
        <div>
          <img src={logo} />
        </div>
        <div className="icons">
          <div>
            <FacebookIcon fontSize="large" />
          </div>
          <div>
            <TwitterIcon fontSize="large" />
          </div>
          <div>
            <LinkedInIcon fontSize="large" />
          </div>
          <div>
            <InstagramIcon fontSize="large" />
          </div>
          <div>
            <EmailIcon fontSize="large" />
          </div>
        </div>
      </div>
      <div id="copyright">
        <p><b>Copyright &#169;</b>-GAZIO 2020</p>
      </div>
    </div>
  );
}

export default Footer;
