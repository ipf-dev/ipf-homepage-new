import React from "react";
import styled, { css } from "styled-components";
import { useTranslation } from "gatsby-plugin-react-i18next";

import Typography from "../../layouts/Typography";

import { responsive, high_resolution } from "../../layouts/responsive";

import Container from "../../components/Container";
import SubTitle from "../../components/SubTitle";
import Description from "../../components/Description";

import img_we_1 from "../../assets/images/Career/img_we_1.png";
import img_we_1_2x from "../../assets/images/Career/img_we_1@2x.png";
import img_we_2 from "../../assets/images/Career/img_we_2.png";
import img_we_2_2x from "../../assets/images/Career/img_we_2@2x.png";
import img_we_3 from "../../assets/images/Career/img_we_3.png";
import img_we_3_2x from "../../assets/images/Career/img_we_3@2x.png";

const ContainerStyled = styled(Container)`
  flex-direction: column;
`;

const commonStyle = css`
  width: 100%;
  height: 26.7rem;
  border-radius: 1.6rem;
  background-size: cover;
  margin: 0 0 1.6rem 0;

  @media ${responsive.conditionForTablet} {
    width: 22.6rem;
    height: 28rem;
    margin: 0 1.6rem 0 0;
  }

  @media ${responsive.conditionForDesktop} {
    width: 33.6rem;
  }
`;

const ImageItem1 = styled.span`
  ${commonStyle};

  background-image: url(${img_we_1});
  @media ${high_resolution} {
    background-image: url(${img_we_1_2x});
  }
`;

const ImageItem2 = styled.span`
  ${commonStyle};

  background-image: url(${img_we_2});
  @media ${high_resolution} {
    background-image: url(${img_we_2_2x});
  }
`;

const ImageItem3 = styled.span`
  ${commonStyle};

  background-image: url(${img_we_3});
  @media ${high_resolution} {
    background-image: url(${img_we_3_2x});
  }
`;

const ImageList = styled.div`
  display: flex;
  flex-direction: column;

  @media ${responsive.conditionForTablet} {
    flex-direction: row;
  }
`;

const ValueText = styled.div`
  width: 100%;
  padding: 4rem;

  ${Typography("body", 1.6, 700)};
  color: white;

  word-break: keep-all;
`;

const SubTitleStyled = styled(SubTitle)`
  @media ${responsive.conditionForTablet} {
    width: 30rem;
  }
`;

export default function IntroSection() {
  const { t } = useTranslation();

  return (
    <ContainerStyled
      data-sal="slide-up"
      data-sal-duration="1000"
      data-sal-easing="ease"
    >
      <SubTitleStyled>{t("HPG-36")}</SubTitleStyled>
      <Description>{t("HPG-37")}</Description>
      <ImageList
        data-sal="slide-up"
        data-sal-duration="1000"
        data-sal-easing="ease"
      >
        <ImageItem1>
          <ValueText>{t("HPG-38")}</ValueText>
        </ImageItem1>
        <ImageItem2>
          <ValueText>{t("HPG-39")}</ValueText>
        </ImageItem2>
        <ImageItem3>
          <ValueText>{t("HPG-40")}</ValueText>
        </ImageItem3>
      </ImageList>
    </ContainerStyled>
  );
}
