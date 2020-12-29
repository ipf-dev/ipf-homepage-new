import React from "react";
import styled from "styled-components";
import { useTranslation } from "gatsby-plugin-react-i18next";

import { responsive } from "../../layouts/responsive";

import colors from "../../layouts/colors";

import Container from "../../components/Container";
import SubTitle from "../../components/SubTitle";
import Label from "../../components/Label";
import Description from "../../components/Description";
import Column from "../../components/Column";

import img_diagram from "../../assets/images/About/img_diagram.png";
import img_diagram_2x from "../../assets/images/About/img_diagram@2x.png";

const ContainerStyled = styled(Container)`
  background-color: ${colors.gray1};
`;

const ColumnStyled = styled(Column)`
  @media ${responsive.conditionForTablet} {
    width: 29.5rem;
  }

  @media ${responsive.conditionForDesktop} {
    width: 38.5rem;
  }
`;

const DescriptionStyled = styled(Description)`
  margin: 2.4rem 0 auto 0;
  width: 100%;

  @media ${responsive.conditionForTablet} {
    width: 24.9rem;
  }
`;

const CoreValuesImg = styled.img`
  width: 100%;
  height: 30rem;
  margin-top: 6.4rem;

  @media ${responsive.conditionForTablet} {
    width: 40.8rem;
    height: 41rem;
    margin-top: 0;
  }

  @media ${responsive.conditionForDesktop} {
    width: 43.8rem;
  }
`;

const SuTitleStyled = styled(SubTitle)`
  @media ${responsive.conditionForDesktop} {
    width: 36.5rem;
  }
`;

export default function CoreValuesSection() {
  const { t } = useTranslation();

  return (
    <ContainerStyled>
      <ColumnStyled
        data-sal="slide-up"
        data-sal-duration="1000"
        data-sal-easing="ease"
      >
        <Label>{t("HPG-101")}</Label>
        <SuTitleStyled>{t("HPG-6")}</SuTitleStyled>
        <DescriptionStyled>{t("HPG-7")}</DescriptionStyled>
      </ColumnStyled>
      <CoreValuesImg
        src={img_diagram}
        srcSet={img_diagram_2x}
        data-sal="slide-up"
        data-sal-duration="1000"
        data-sal-easing="ease"
      />
    </ContainerStyled>
  );
}
