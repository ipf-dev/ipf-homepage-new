import React from "react";
import styled from "styled-components";

import { responsive } from "../layouts/responsive";
import colors from "../layouts/colors";
import Typography from "../assets/Typography";

import Navigation from "../containers/Navigation";

type Props = {
  children: string;
};

const HeaderContainer = styled.header`
  width: 100%;
  height: 235px;

  color: white;
  background-color: ${colors.black};

  @media only screen and (min-width: 1040px) {
    height: 32.6rem;
  }
`;

const Title = styled.h1`
  position: relative;
  top: calc(100% - 80px);
  color: white;
  padding-left: calc((100% - 32rem) / 2);

  ${Typography("hero")};
  font-family: "Roboto", sans-serif;

  @media ${responsive.conditionForTablet} {
    padding-left: calc((100% - 70.4rem) / 2);
    box-shadow: none;
  }

  @media ${responsive.conditionForDesktop} {
    padding-left: calc((100% - 104rem) / 2);
  }
`;

function Header({ children }: Props) {
  return (
    <HeaderContainer>
      <Navigation mode="dark" />
      <Title>{children}</Title>
    </HeaderContainer>
  );
}

export default Header;
