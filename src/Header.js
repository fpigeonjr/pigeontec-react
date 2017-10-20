import React from "react";
import styled from "styled-components";
import headerbg from "./img/header-bg.png";

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url(${headerbg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 80vh;
  text-align: center;
  color: white;
  .header-h1 {
    margin: 0 0 29px 0;
    font-size: 64px;
    font-weight: 200;
  }
  .header-h4 {
    font-size: 36px;
    font-weight: 300;
  }
`;
const Header = () => (
  <Title className="header">
    <h1 className="header-h1">PIGEONTEC</h1>
    <h4 className="header-h4">bringing your dreams online</h4>
  </Title>
);

export default Header;
