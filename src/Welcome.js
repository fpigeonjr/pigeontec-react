import React from "react";
import styled from "styled-components";
import profile from "./img/frank.png";

const purpleColor = "#2f2933";
const darkBlueColor = "#01a2a6";

const WelcomeStyle = styled.div`
  .welcome {
    margin: 48px 0;
  }
  .owner {
    background-image: url(${profile});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 460px;
    position: relative;
    text-align: center;
    color: white;
    .owner-bar {
      background-color: ${purpleColor};
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 100px;
      .owner-title {
        padding-top: 24px;
        font-size: 18px;
      }
    }
  }
  .mission {
    min-height: 460px;
    background-color: ${darkBlueColor};
    color: white;
    padding: 40px 89px;
    .mission-title {
      font-size: 32px;
      font-weight: 700;
      margin-top: 0;
    }
    .mission-p {
      font-size: 24px;
      font-weight: 400;
      line-height: 29px;
      margin: 18px 0;
    }
  }
`;
const Welcome = () => (
  <WelcomeStyle className="welcome" id="about">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="owner img-responsive">
            <div className="owner-bar">
              <h4 className="owner-title">Frank Pigeon-Owner</h4>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="mission">
            <h2 className="mission-title">Welcome to Pigeontec</h2>
            <p className="mission-p">
              We provide affordable, professional, dependable web design and
              development.
            </p>
            <p className="mission-p">
              Pigeontec is a veteran owned, values-based small business. Our
              mission is to help individuals, businesses, non-profits, and
              churches grow and gain exposure by getting online.
            </p>
          </div>
        </div>
      </div>
    </div>
  </WelcomeStyle>
);

export default Welcome;
