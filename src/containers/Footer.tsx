import React from 'react';
import styled, { css } from 'styled-components';
import { useI18next, useTranslation } from 'gatsby-plugin-react-i18next';

import { responsive, high_resolution } from '../layouts/responsive';

import colors from '../layouts/colors';
import Typography from '../layouts/Typography';

import Button from '../components/Button';
import Container from '../components/Container';

import img_logo_ipf from '../assets/images/img_logo_ipf.png';
import img_logo_ipf_2x from '../assets/images/img_logo_ipf@2x.png';
import img_facebook from '../assets/images/Footer/img_facebook.png';
import img_facebook_2x from '../assets/images/Footer/img_facebook@2x.png';
import img_naverpost from '../assets/images/Footer/img_naverpost.png';
import img_naverpost_2x from '../assets/images/Footer/img_naverpost@2x.png';

import iPortfolio_intro_en from '../assets/files/iPortfolio_intro_en.pdf';
import iPortfolio_intro_ko from '../assets/files/iPortfolio_intro_ko.pdf';

const ContainerStyled = styled(Container)`
  background-color: ${colors.black};
  padding-top: 5.6rem;
  padding-bottom: 8rem;
  display: flex;
  flex-direction: column;

  @media ${responsive.conditionForTablet} {
    padding-bottom: 12rem;
    flex-direction: row;
  }
`;

const LicenseContainer = styled.div`
  ${Typography('body', 1.4)};

  height: fit-content;
  margin-bottom: 3.2rem;

  @media ${responsive.conditionForTablet} {
    margin-bottom: 0;
  }
`;

const Logo = styled.span`
  display: block;
  width: 8rem;
  height: 1.6rem;
  margin-bottom: 1.6rem;

  background-size: cover;
  background-repeat: no-repeat;

  background-image: url(${img_logo_ipf});

  @media ${high_resolution} {
    background-image: url(${img_logo_ipf_2x});
  }
`;

const License = styled.p`
  ${Typography('body', 1.2, 400)};
  color: ${colors.gray4};
`;

const LinkContainer = styled.div`
  display: flex;
  margin-bottom: 3.2rem;

  @media ${responsive.conditionForTablet} {
    margin-bottom: 0;
    margin-left: auto;
  }
`;

const LinkStyle = css`
  background-repeat: no-repeat;
  background-size: cover;

  width: 3.2rem;
  height: 3.2rem;
`;

const FacebookLink = styled.a`
  background-image: url(${img_facebook});
  @media ${high_resolution} {
    background-image: url(${img_facebook_2x});
  }
  ${LinkStyle};
`;

const NaverPostLink = styled.a`
  background-image: url(${img_naverpost});
  @media ${high_resolution} {
    background-image: url(${img_naverpost_2x});
  }
  ${LinkStyle};

  margin-left: 1.6rem;
`;

const DownloadButton = styled(Button).attrs({ className: 'download-button' })`
  @media ${responsive.conditionForTablet} {
    margin-left: 4rem;
    transition: margin-left 0.1s ease-in-out;
    &:hover {
      margin-left: 2.4rem;
    }
  }
`;

export default function Footer() {
  const { language } = useI18next();
  const { t } = useTranslation();

  return (
    <>
      <ContainerStyled id="footer">
        <LicenseContainer>
          <Logo />
          <License>© iPortfolio Inc. All rights reserved.</License>
        </LicenseContainer>
        <LinkContainer>
          <FacebookLink href="https://www.facebook.com/ipofo" target="_blank" />
          <NaverPostLink href="https://post.naver.com/ipofo" target="_blank" />
        </LinkContainer>
        <DownloadButton
          className="download-button"
          icon="download"
          href={language === 'en' ? iPortfolio_intro_en : iPortfolio_intro_ko}
          filename={
            language === 'en' ? `iPortfolio_intro_en` : `iPortfolio_intro_ko`
          }
        >
          {t('HPG-88')}
        </DownloadButton>
      </ContainerStyled>
    </>
  );
}
