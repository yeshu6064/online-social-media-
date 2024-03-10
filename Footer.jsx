import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import "./Footer.css";

//condition location

const Footer = () => {
  return (
    <div>
      <div className="footer-container"> 
        <div>
          Created by yeshu and raghu {" "}
          <a
            href=""
            target="_blank"
            rel="noreferrer"
            className="not-link"
          >
            {" "}
            
          </a>
        </div>
        <div className="footer-links">
          <div>
            <a
             className="not-link"
              href=""
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
          </div>
          <div>
            <a
            className="not-link"
              href=""
              target="_blank"
              rel="noreferrer"
            >
              <TwitterIcon />
            </a>
          </div>
          <div>
            <a
             className="not-link"
              href=""
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <LinkedInIcon />
            </a>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Footer;
