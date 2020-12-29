import React from "react";
import styled from "styled-components";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { useBreakpoint } from "gatsby-plugin-breakpoints";

import { responsive } from "../../layouts/responsive";

import colors from "../../layouts/colors";
import Typography from "../../layouts/Typography";

import Container from "../../components/Container";

import img_home_main from "../../assets/images/Home/img_home_main.png";
import img_home_main_2x from "../../assets/images/Home/img_home_main@2x.png";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 67rem;

  @media ${responsive.conditionForTablet} {
    height: 76.8rem;
    flex-direction: column;
  }

  @media ${responsive.conditionForDesktop} {
    height: 72rem;
    flex-direction: row;
  }
`;

const TitleContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${colors.primary};

  overflow: hidden;
  justify-content: center;
  padding: 0 calc((100% - 36rem) / 2);

  @media ${responsive.conditionForTablet} {
    padding: 0 calc((100% - 76.8rem) / 2);
    justify-content: space-between;
  }

  @media ${responsive.conditionForDesktop} {
    position: relative;
    padding: 0 calc((100% - 104rem) / 2);
    justify-content: space-between;
    padding-top: 0;
  }
`;

const Title = styled.h1`
  ${Typography("body", 4, 700)};
  font-family: "Roboto", sans-serif;
  line-height: 4.4rem;

  position: relative;
  width: 100%;
  top: 8rem;

  color: white;
  text-align: center;
  @media ${responsive.conditionForTablet} {
    position: absolute;

    width: 32.2rem;
    top: 15.5rem;
    left: 50%;
    margin-left: -17.4rem;
  }

  @media ${responsive.conditionForDesktop} {
    position: relative;
    width: 41.2rem;
    top: 0;
    left: 0;
    margin: auto 0;
    margin-left: 0;

    ${Typography("hero")};
    line-height: 4.4rem;
  }
`;

const BackgroundImage = styled.img`
  position: absolute;
  width: auto;
  height: 46rem;
  left: -40.5rem;
  bottom: -66%;

  @media ${responsive.conditionForTablet} {
    height: 72rem;
    left: -54.5rem;
    bottom: -145%;
  }
  @media ${responsive.conditionForDesktop} {
    height: 72rem;
    left: -23.5rem;
    bottom: 0;
  }
`;

const BackgroundImageWrapper = styled.div`
  position: absolute;
  opacity: 1;
  height: 100%;
  width: 100%;

  position: relative;
  height: 42.2rem;
  top: -17rem;

  @media ${responsive.conditionForTablet} {
    position: relative;
    height: 42.2rem;
    top: -17rem;
  }

  @media ${responsive.conditionForDesktop} {
    position: absolute;
    opacity: 1;
    height: 100%;
    width: 100%;
    top: 0;
  }
`;

export default function TitleSection() {
  const { t } = useTranslation();

  const breakpoints = useBreakpoint();
  return (
    <Wrapper>
      <TitleContainer>
        <Title
          data-sal="slide-up"
          data-sal-duration="1000"
          data-sal-easing="ease"
        >
          {t("HPG-88")}
        </Title>
        <BackgroundImageWrapper>
          <BackgroundImage
            data-sal={breakpoints.tablet ? "slide-up" : "slide-left"}
            data-sal-duration="1000"
            data-sal-easing="ease"
            src={img_home_main}
            srcSet={img_home_main_2x}
          />
        </BackgroundImageWrapper>
      </TitleContainer>
    </Wrapper>
  );
}
