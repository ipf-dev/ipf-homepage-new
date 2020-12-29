import React from "react";
import styled from "styled-components";
import { navigate } from "gatsby";

import Navigation from "../containers/Navigation";
import Container from "../components/Container";
import Button from "../components/Button";

import Typography from "../layouts/Typography";

import img_contact_company from "../assets/images/Contact/img_contact_company.png";
import img_contact_company_2x from "../assets/images/Contact/img_contact_company@2x.png";

const ContainerStyled = styled(Container)`
  flex-direction: column;
  text-align: center;
`;

const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 4rem;
  width: 100%;
`;

const Heading = styled.h1`
  ${Typography("body", 8, 700)};
`;

const Description = styled.p`
  ${Typography("body", 4, 400)};
`;

const ButtonWrapper = styled.div`
  margin-top: 4rem;
`;

export default function Reload() {
  return (
    <>
      <Navigation />
      <ContainerStyled>
        <Heading>404</Heading>
        <Description>Page not found</Description>
        <Image src={img_contact_company} srcSet={img_contact_company_2x} />
        <ButtonWrapper>
          <Button onClick={() => navigate("/")}>Go to Home</Button>
        </ButtonWrapper>
      </ContainerStyled>
    </>
  );
}
