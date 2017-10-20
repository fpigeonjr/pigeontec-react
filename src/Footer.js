import React from "react";
import styled from "styled-components";
import cityBg from "./img/city-bg.png";

const purpleColor = "#2f2933";
const lightBlueColor = "#29d9c2";

const email = "frank@pigeontec.com";
const twitterLink = "https://twitter.com/pigeon_tec";
const facebookLink = "https://twitter.com/pigeon_tec";
const linkedinLink = "https://twitter.com/pigeon_tec";

const StyledFooter = styled.div`
  .sub-footer {
    background-image: url(${cityBg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    min-height: 400px;
    position: relative;
    text-align: center;
    color: white;
    padding-top: 166px;
    .subfooter-h1 {
      font-size: 36px;
      font-weight: 300;
    }
  }
  footer {
    background-color: ${purpleColor};
    color: white;
    font-size: 18px;
    font-weight: 300;
    min-height: 302px;
    padding-top: 48px;
    .footer-h4,
    .footer-h2 {
      margin-top: 0;
    }
    .fa {
      color: white;
      font-size: 26px;
      margin-right: 10px;
      &:hover {
        color: ${lightBlueColor};
      }
    }
    .footer-link {
      color: white;
      &:hover {
        color: ${lightBlueColor};
      }
    }
  }
`;

const Footer = () => (
  <StyledFooter>
    <div className="sub-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="subfooter-h1">Founded in San Antonio, Texas</h1>
          </div>
        </div>
      </div>
    </div>
    <footer id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2 className="footer-h2">Pigeontec</h2>
            <p className="footer-p">
              {new Date().getFullYear()} all rights reserved
            </p>
          </div>
          <div className="col-md-4">
            <h4 className="footer-h4">Address</h4>
            <address className="footer-p">
              110 E Houston St.<br /> San Antonio, TX 78205<br />
            </address>
            <tel>210-704-7443</tel>
            <br />
            <a href="mailto:{email}" className="footer-link">
              {email}
            </a>
          </div>
          <div className="col-md-4">
            <h4 className="footer-h4">Connect</h4>
            <a href={facebookLink}>
              <i className="fa fa-facebook-square" aria-hidden="true" />
            </a>
            <a href={linkedinLink}>
              <i className="fa fa-linkedin-square" aria-hidden="true" />
            </a>
            <a href={twitterLink}>
              <i className="fa fa-twitter-square" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  </StyledFooter>
);

export default Footer;
