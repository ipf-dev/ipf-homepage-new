import React from 'react';
import styled from 'styled-components';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Translation } from 'gatsby-plugin-react-i18next';

import { responsive, high_resolution } from '../layouts/responsive';

import colors from '../layouts/colors';
import Typography from '../layouts/Typography';

import img_arrow_left from '../assets/images/Career/img_arrow_left.png';
import img_arrow_left_2x from '../assets/images/Career/img_arrow_left@2x.png';
import img_arrow_right from '../assets/images/Career/img_arrow_right.png';
import img_arrow_right_2x from '../assets/images/Career/img_arrow_right@2x.png';
import img_interviewee_okwon from '../assets/images/Career/img_interviewee_okwon.png';
import img_interviewee_okwon_2x from '../assets/images/Career/img_interviewee_okwon@2x.png';
import img_interviewee_hcho from '../assets/images/Career/img_interviewee_hcho.png';
import img_interviewee_hcho_2x from '../assets/images/Career/img_interviewee_hcho@2x.png';
import img_interviewee_mkim from '../assets/images/Career/img_interviewee_mkim.png';
import img_interviewee_mkim_2x from '../assets/images/Career/img_interviewee_mkim@2x.png';
import img_interviewee_hjpark from '../assets/images/Career/img_interviewee_hjpark.png';
import img_interviewee_hjpark_2x from '../assets/images/Career/img_interviewee_hjpark@2x.png';
import img_interviewee_dwjung from '../assets/images/Career/img_interviewee_dwjung.png';
import img_interviewee_dwjung_2x from '../assets/images/Career/img_interviewee_dwjung@2x.png';
import img_interviewee_sychoi from '../assets/images/Career/img_interviewee_sychoi.png';
import img_interviewee_sychoi_2x from '../assets/images/Career/img_interviewee_sychoi@2x.png';
import img_interviewee_blee from '../assets/images/Career/img_interviewee_blee.png';
import img_interviewee_blee_2x from '../assets/images/Career/img_interviewee_blee@2x.png';
import img_interviewee_dssong from '../assets/images/Career/img_interviewee_dssong.png';
import img_interviewee_dssong_2x from '../assets/images/Career/img_interviewee_dssong@2x.png';
import img_interviewee_jelee from '../assets/images/Career/img_interviewee_jelee.png';
import img_interviewee_jelee_2x from '../assets/images/Career/img_interviewee_jelee@2x.png';

const InterviewData = [
  {
    profile: 'okwon',
    title: <Translation>{(t) => t('INTVW-OKWON-TITLE')}</Translation>,
    quote: <Translation>{(t) => t('INTVW-OKWON-QUOTE')}</Translation>,
    imgSrc: {
      x1: img_interviewee_okwon,
      x2: img_interviewee_okwon_2x,
    },
  },
  {
    profile: 'hcho',
    title: <Translation>{(t) => t('INTVW-HCHO-TITLE')}</Translation>,
    quote: <Translation>{(t) => t('INTVW-HCHO-QUOTE')}</Translation>,
    imgSrc: {
      x1: img_interviewee_hcho,
      x2: img_interviewee_hcho_2x,
    },
  },
  {
    profile: 'mkim',
    title: <Translation>{(t) => t('INTVW-MKIM-TITLE')}</Translation>,
    quote: <Translation>{(t) => t('INTVW-MKIM-QUOTE')}</Translation>,
    imgSrc: {
      x1: img_interviewee_mkim,
      x2: img_interviewee_mkim_2x,
    },
  },
  {
    profile: 'hjpark',
    title: <Translation>{(t) => t('INTVW-HJPARK-TITLE')}</Translation>,
    quote: <Translation>{(t) => t('INTVW-HJPARK-QUOTE')}</Translation>,
    imgSrc: {
      x1: img_interviewee_hjpark,
      x2: img_interviewee_hjpark_2x,
    },
  },
  {
    profile: 'dwjung',
    title: <Translation>{(t) => t('INTVW-DWJUNG-TITLE')}</Translation>,
    quote: <Translation>{(t) => t('INTVW-DWJUNG-QUOTE')}</Translation>,
    imgSrc: {
      x1: img_interviewee_dwjung,
      x2: img_interviewee_dwjung_2x,
    },
  },
  {
    profile: 'sychoi',
    title: <Translation>{(t) => t('INTVW-SYCHOI-TITLE')}</Translation>,
    quote: <Translation>{(t) => t('INTVW-SYCHOI-QUOTE')}</Translation>,
    imgSrc: {
      x1: img_interviewee_sychoi,
      x2: img_interviewee_sychoi_2x,
    },
  },
  {
    profile: 'blee',
    title: <Translation>{(t) => t('INTVW-BLEE-TITLE')}</Translation>,
    quote: <Translation>{(t) => t('INTVW-BLEE-QUOTE')}</Translation>,
    imgSrc: {
      x1: img_interviewee_blee,
      x2: img_interviewee_blee_2x,
    },
  },
  {
    profile: 'dssong',
    title: <Translation>{(t) => t('INTVW-DSSONG-TITLE')}</Translation>,
    quote: <Translation>{(t) => t('INTVW-DSSONG-QUOTE')}</Translation>,
    imgSrc: {
      x1: img_interviewee_dssong,
      x2: img_interviewee_dssong_2x,
    },
  },
  {
    profile: 'jelee',
    title: <Translation>{(t) => t('INTVW-JELEE-TITLE')}</Translation>,
    quote: <Translation>{(t) => t('INTVW-JELEE-QUOTE')}</Translation>,
    imgSrc: {
      x1: img_interviewee_jelee,
      x2: img_interviewee_jelee_2x,
    },
  },
];

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

const Profile = styled.span<{ imgSrc: { x1: string; x2: string } }>`
  align-self: center;
  width: 8rem;
  height: 8rem;
  background-size: cover;

  background-image: url(${({ imgSrc }) => imgSrc.x1});
  @media ${high_resolution} {
    background-image: url(${({ imgSrc }) => imgSrc.x2});
  }
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

  ${Typography('body')};
`;

const Quote = styled.p`
  ${Typography('body')};
  text-align: center;
  margin-top: 2.4rem;
  word-break: keep-all;
  white-space: pre-line;
  padding: 0 2rem;

  @media ${responsive.conditionForTablet} {
    padding: 0 8rem;
  }
`;

const Name = styled.p`
  ${Typography('body', 1.4)}
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
        {InterviewData.map(({ profile, title, quote, imgSrc }, index) => {
          return (
            <Slide key={profile} index={index}>
              <QuoteContainer>
                <Profile imgSrc={imgSrc} />
                <Quote>
                  {quote}
                  <br />
                </Quote>
                <Name>{title}</Name>
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
