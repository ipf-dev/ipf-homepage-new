import React from "react";
import styled, { css } from "styled-components";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Translation } from "gatsby-plugin-react-i18next";

import { responsive, high_resolution } from "../layouts/responsive";

import colors from "../layouts/colors";
import Typography from "../layouts/Typography";

import img_arrow_left from "../assets/images/Career/img_arrow_left.png";
import img_arrow_left_2x from "../assets/images/Career/img_arrow_left@2x.png";
import img_arrow_right from "../assets/images/Career/img_arrow_right.png";
import img_arrow_right_2x from "../assets/images/Career/img_arrow_right@2x.png";
import img_interviewee_klee from "../assets/images/Career/img_interviewee_klee.png";
import img_interviewee_klee_2x from "../assets/images/Career/img_interviewee_klee@2x.png";
import img_interviewee_bskim from "../assets/images/Career/img_interviewee_bskim.png";
import img_interviewee_bskim_2x from "../assets/images/Career/img_interviewee_bskim@2x.png";
import img_interviewee_jpark from "../assets/images/Career/img_interviewee_jpark.png";
import img_interviewee_jpark_2x from "../assets/images/Career/img_interviewee_jpark@2x.png";
import img_interviewee_chcho from "../assets/images/Career/img_interviewee_chcho.png";
import img_interviewee_chcho_2x from "../assets/images/Career/img_interviewee_chcho@2x.png";
import img_interviewee_tkim from "../assets/images/Career/img_interviewee_tkim.png";
import img_interviewee_tkim_2x from "../assets/images/Career/img_interviewee_tkim@2x.png";

const InterviewData = [
  {
    profile: "klee",
    title: <Translation>{(t) => t("HPG-44")}</Translation>,
    quote: <Translation>{(t) => t("HPG-43")}</Translation>,
  },
  {
    profile: "bskim",
    title: <Translation>{(t) => t("HPG-46")}</Translation>,
    quote: <Translation>{(t) => t("HPG-45")}</Translation>,
  },
  {
    profile: "jpark",
    title: <Translation>{(t) => t("HPG-48")}</Translation>,
    quote: <Translation>{(t) => t("HPG-47")}</Translation>,
  },
  {
    profile: "chcho",
    title: <Translation>{(t) => t("HPG-50")}</Translation>,
    quote: <Translation>{(t) => t("HPG-49")}</Translation>,
  },
  {
    profile: "tkim",
    title: <Translation>{(t) => t("HPG-52")}</Translation>,
    quote: <Translation>{(t) => t("HPG-51")}</Translation>,
  },
];

const profilePic: any = {
  klee: css`
    background-image: url(${img_interviewee_klee});
    @media ${high_resolution} {
      background-image: url(${img_interviewee_klee_2x});
    }
  `,
  bskim: css`
    background-image: url(${img_interviewee_bskim});
    @media ${high_resolution} {
      background-image: url(${img_interviewee_bskim_2x});
    }
  `,
  jpark: css`
    background-image: url(${img_interviewee_jpark});
    @media ${high_resolution} {
      background-image: url(${img_interviewee_jpark_2x});
    }
  `,
  chcho: css`
    background-image: url(${img_interviewee_chcho});
    @media ${high_resolution} {
      background-image: url(${img_interviewee_chcho_2x});
    }
  `,
  tkim: css`
    background-image: url(${img_interviewee_tkim});
    @media ${high_resolution} {
      background-image: url(${img_interviewee_tkim_2x});
    }
  `,
};

const CarouselProviderStyled = styled(CarouselProvider)`
  background-color: ${colors.gray1};
  padding: 5.6rem 0;

  @media ${responsive.conditionForTablet} {
    padding: 5.6rem calc((100% - 70.4rem) / 2);
    padding-bottom: 0;
  }

  @media ${responsive.conditionForDesktop} {
    padding: 6.8rem calc((100% - 96rem) / 2);
    padding-bottom: 0;
  }
`;

type ProfileProps = {
  profileImg: string;
};

const Profile = styled.span`
  align-self: center;
  width: 8rem;
  height: 8rem;
  background-size: cover;

  background-image: ${(props: ProfileProps) => profilePic[props.profileImg]};
`;

const SliderStyled = styled(Slider)`
  width: 100%;
  height: 31rem;

  @media ${responsive.conditionForDesktop} {
    height: 22.2rem;
  }
`;

const QuoteContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${Typography("body")};
`;

const Quote = styled.p`
  ${Typography("body")};
  text-align: center;
  margin-top: 2.4rem;
  word-break: keep-all;
  padding: 0 2rem;

  @media ${responsive.conditionForTablet} {
    padding: 0 8rem;
  }
`;

const Name = styled.p`
  ${Typography("body", 1.4)}
  color: ${colors.gray4};
  margin-top: 1.6rem;

  display: flex;
  justify-content: center;
`;

const BackButtonWeb = styled(ButtonBack)`
  border: none;
  background-color: transparent;

  width: 4rem;
  height: 4rem;

  background-size: cover;
  background-image: url(${img_arrow_left});
  @media ${high_resolution} {
    background-image: url(${img_arrow_left_2x});
  }
`;

const BackButtonMobile = styled(BackButtonWeb)`
  display: block;
  margin-right: 1.2rem;
`;

const NextButtonWeb = styled(ButtonNext)`
  border: none;
  background-color: transparent;
  position: absolute;
  right: 0;
  top: 0;

  width: 4rem;
  height: 4rem;

  background-size: cover;
  background-image: url(${img_arrow_right});
  @media ${high_resolution} {
    background-image: url(${img_arrow_right_2x});
  }
`;

const NextButtonMobile = styled(NextButtonWeb)`
  position: relative;
  margin-left: 1.2rem;
`;

const ButtonWrapperMobile = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3.2rem;

  @media ${responsive.conditionForTablet} {
    display: none;
  }
`;

const ButtonWrapperWeb = styled.div`
  display: none;
  width: 100%;
  position: relative;
  bottom: 15rem;

  @media ${responsive.conditionForTablet} {
    display: block;
  }
`;

function Interview() {
  return (
    <CarouselProviderStyled
      naturalSlideWidth={1040}
      naturalSlideHeight={450}
      totalSlides={InterviewData.length}
      infinite
    >
      <SliderStyled>
        {Object.keys(InterviewData).map(function (key: string, index) {
          return (
            <Slide key={key} index={index}>
              <QuoteContainer>
                <Profile profileImg={(InterviewData as any)[key].profile} />
                <Quote>
                  {(InterviewData as any)[key].quote}
                  <br />
                </Quote>
                <Name>{(InterviewData as any)[key].title}</Name>
              </QuoteContainer>
            </Slide>
          );
        })}
      </SliderStyled>
      <ButtonWrapperWeb>
        <BackButtonWeb>
          <span />
        </BackButtonWeb>
        <NextButtonWeb>
          <span />
        </NextButtonWeb>
      </ButtonWrapperWeb>
      <ButtonWrapperMobile>
        <BackButtonMobile>
          <span />
        </BackButtonMobile>
        <NextButtonMobile>
          <span />
        </NextButtonMobile>
      </ButtonWrapperMobile>
    </CarouselProviderStyled>
  );
}

export default Interview;
