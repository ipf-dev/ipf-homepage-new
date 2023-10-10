import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { navigate } from 'gatsby';

import { responsive } from '../../layouts/responsive';
import colors from '../../layouts/colors';

import Container from '../../components/Container';
import SubTitleEng from '../../components/SubTitleEng';
import Label from '../../components/Label';
import Button from '../../components/Button';
import Column from '../../components/Column';
import Description from '../../components/Description';

import img_world_map_inline from '../../assets/images/Home/img_world_map.inline.svg';

const AboutContainer = styled(Container)`
  justify-content: space-between;
`;

const ColumnStyled = styled(Column)`
  @media ${responsive.conditionForTablet} {
    width: 30rem;
  }

  @media ${responsive.conditionForDesktop} {
    width: fit-content;
  }
`;

const WorldMap = styled(img_world_map_inline)`
  width: 100%;
  height: 18.8rem;
  margin-top: 6.4rem;
  fill: ${colors.gray4};

  @media ${responsive.conditionForTablet} {
    width: 50%;
    height: 32.7rem;
  }

  @media ${responsive.conditionForDesktop} {
    width: 49.6rem;
    height: 32.7rem;
  }
`;

export default function AboutSection() {
  const { t } = useTranslation();
  return (
    <AboutContainer>
      <ColumnStyled
        data-sal="slide-up"
        data-sal-duration="1000"
        data-sal-easing="ease"
      >
        <Label>{t('TEXT-02')}</Label>
        <SubTitleEng>{t('TEXT-03')}</SubTitleEng>
        <Description>{t('HPG-1')}</Description>
        <Button onClick={() => navigate('/about')} icon="arrow">
          {t('HPG-4')}
        </Button>
      </ColumnStyled>
      <WorldMap />
    </AboutContainer>
  );
}
