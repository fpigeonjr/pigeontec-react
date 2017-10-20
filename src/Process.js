import React from "react";
import styled from "styled-components";
import processBg from "./img/process-bg.png";

const ProcessStyled = styled.div`
  .process {
    background-image: url(${processBg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    min-height: 540px;
    position: relative;
    text-align: center;
    color: white;
    padding: 160px 0 130px 0;
    margin-bottom: 96px;
    .process-h2 {
      margin-top: -96px;
      margin-bottom: 48px;
    }
    .process-box {
      background-color: rgba(41, 166, 152, 0.7);
      color: white;
      padding: 40px 20px;
      min-width: 245px;
      height: 245px;
      margin-bottom: 24px;
      .fa {
        font-size: 28px;
      }
    }
  }
`;

const Process = () => (
  <ProcessStyled id="process">
    <div className="container process">
      <h2 className="process-h2">Process</h2>
      <div className="row">
        <div className="col-sm-3">
          <div className="process-box">
            <h4 className="process-box-step">Step One</h4>
            <h4 className="process-box-title">Identity</h4>
            <i className="fa fa-lightbulb-o" aria-hidden="true" />
            <p className="process-box-descr">Identify your needs</p>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="process-box">
            <h4 className="process-box-step">Step Two</h4>
            <h4 className="process-box-title">Design</h4>
            <i className="fa fa-paint-brush" aria-hidden="true" />
            <p className="process-box-descr">Design your website</p>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="process-box">
            <h4 className="process-box-step">Step Three</h4>
            <h4 className="process-box-title">Code</h4>
            <i className="fa fa-code" aria-hidden="true" />
            <p className="process-box-descr">Write the code</p>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="process-box">
            <h4 className="process-box-step">Step Four</h4>
            <h4 className="process-box-title">Deploy</h4>
            <i className="fa fa-rocket" aria-hidden="true" />
            <p className="process-box-descr">Deploy your site</p>
          </div>
        </div>
      </div>
    </div>
  </ProcessStyled>
);

export default Process;
