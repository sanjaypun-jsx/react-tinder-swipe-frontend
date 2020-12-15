import React from "react";
import styled from "styled-components";

const ICON = styled.i`
  font-size: 1.5rem;
  padding: 0.3rem;
  cursor: pointer;
  padding: 1rem;
`;
const HeaderWrapper = styled.div`
  width: 300px;
  max-height: 500px;
  display: flex;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <ICON className="far fa-user"></ICON>
      <ICON
        style={{
          color: "rgb(254, 60, 114)"
        }}
        className="fas fa-fire-alt"
      ></ICON>
      <ICON className="far fa-envelope"></ICON>
    </HeaderWrapper>
  );
};
export default Header;
