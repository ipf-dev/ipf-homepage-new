import React from "react";
import styled from "styled-components";
import { useTranslation } from "gatsby-plugin-react-i18next";

import { responsive, high_resolution } from "../layouts/responsive";

import colors from "../layouts/colors";
import Typography from "../layouts/Typography";

import Header from "../components/Header";
import Footer from "../containers/Footer";
import SubTitle from "../components/SubTitle";
import Container from "../components/Container";

import img_contact_company from "../assets/images/Contact/img_contact_company.png";
import img_contact_company_2x from "../assets/images/Contact/img_contact_company@2x.png";

const SubTitleStyled = styled(SubTitle)`
  @media only screen and (max-width: 1040px) {
    width: 100%;
    font-size: 3.2rem;
  }
`;

const Title = styled.dt`
  ${Typography("heading2")};
`;

const Description = styled.dt`
  ${Typography("body", 1.4, 400)};

  max-width: 40.7rem;
  margin-top: 0.8rem;
  margin-bottom: 4rem;
  white-space: pre-line;

  @media ${responsive.conditionForTablet} {
    width: 100%;
  }
`;

const ContactCompanyImage = styled.span`
  width: 100%;
  height: 9.846rem;
  padding: 0px calc((100% - 32rem) / 2);
  border-radius: 1.6rem;
  margin-bottom: 1.654rem;
  margin-top: 6.4rem;

  background-size: cover;
  background-image: url(${img_contact_company});
  @media ${high_resolution} {
    background-image: url(${img_contact_company_2x});
  }

  @media ${responsive.conditionForTablet} {
    margin: 6.4rem 0 1.6rem 0;
    padding: 0;
    height: 32rem;
  }
`;

const AddressBook = styled.dl`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2.4rem;
  border-radius: 1.6rem;
  margin-bottom: 1.6rem;

  background-color: ${colors.gray1};

  @media ${responsive.conditionForTablet} {
    width: 51.2rem;
    padding: 4rem 4rem 0 4rem;
    margin-right: 1.6rem;
  }
`;

const GoogleMaps = styled.iframe`
  width: 100%;
  height: 31.8rem;
  border-radius: 1.6rem;
  border: none;

  @media ${responsive.conditionForTablet} {
    width: 51.2rem;
    height: 100%;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  @media ${responsive.conditionForTablet} {
    flex-direction: row;
    height: 50.8rem;
  }
`;

export default function Contact() {
  const { t, i18n } = useTranslation();

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Header>{t("HPG-121")}</Header>
      <Container
        data-sal="slide-up"
        data-sal-duration="1000"
        data-sal-easing="ease"
      >
        <SubTitleStyled>{t("HPG-80")}</SubTitleStyled>
        <ContactCompanyImage />
        <ContactInfo>
          <AddressBook>
            <Title>{t("HPG-81")}</Title>
            <Description>{t("HPG-82")}</Description>
            <Title>{t("HPG-83")}</Title>
            <Description>{t("HPG-84")}</Description>
            <Title>{t("HPG-85")}</Title>
            <Description style={{ width: "222px" }}>{t("HPG-86")}</Description>
            <Title>{t("HPG-87")}</Title>
            <Description>{t("HPG-122")}</Description>
          </AddressBook>
          <GoogleMaps
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDo3ca0SZp6U61rlNXuAw-wluwd8wcDnVY
                &q=place_id:ChIJGRgP7KhgezUR91qgEhZU0Ug&language=${i18n.language}`}
            allowFullScreen
          ></GoogleMaps>
        </ContactInfo>
      </Container>
      <Footer />
    </div>
  );
}
