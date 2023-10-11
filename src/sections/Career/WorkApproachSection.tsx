import React from 'react';

import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { responsive, high_resolution } from '../../layouts/responsive';

import Button from '../../components/Button';
import Container from '../../components/Container';
import SubTitle from '../../components/SubTitle';
import Description from '../../components/Description';

import img_work_approach from '../../assets/images/Career/img_work_approach.png';
import img_work_approach_2x from '../../assets/images/Career/img_work_approach@2x.png';

const ContainerStyled = styled(Container)`
  flex-wrap: nowrap;
  gap: 4rem;

  > div:first-child {
    max-width: 34rem;
    width: auto;

    @media ${responsive.conditionForDesktop} {
      max-width: 42.7rem;
    }
  }
`;

const SubTitleStyled = styled(SubTitle)`
  width: 33.2rem;
  @media ${responsive.conditionForTablet} {
    width: auto;
  }
`;

const WorkApproachImage = styled.span`
  background-image: url(${img_work_approach});
  @media ${high_resolution} {
    background-image: url(${img_work_approach_2x});
  }

  width: 100%;
  height: 28rem;
  border-radius: 16px;

  background-repeat: no-repeat;
  background-size: cover;

  @media ${responsive.conditionForTablet} {
    width: 33.6rem;
    height: 28rem;
  }

  @media ${responsive.conditionForDesktop} {
    width: 48rem;
  }
`;

export default function WorkApproachSection() {
  const { t } = useTranslation();

  return (
    <ContainerStyled
      data-sal="slide-up"
      data-sal-duration="1000"
      data-sal-easing="ease"
    >
      <div>
        <SubTitleStyled>{t('HPG-43')}</SubTitleStyled>
        <Description>{t('HPG-44')}</Description>
        <Button href="https://iportfolio.oopy.io/career" target="_blank">
          {t('HPG-45')}
        </Button>
      </div>

      <WorkApproachImage />
    </ContainerStyled>
  );
}
