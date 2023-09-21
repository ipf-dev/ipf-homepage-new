import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import { responsive, high_resolution } from '../../layouts/responsive';

import Container from '../../components/Container';
import Column from '../../components/Column';
import Description from '../../components/Description';
import { ProductImg } from '../../components/ProductImg';

import img_spindlebooks_logo from '../../assets/images/Product/img_spindlebooks_logo.png';
import img_spindlebooks_logo_2x from '../../assets/images/Product/img_spindlebooks_logo@2x.png';
import img_spindlebooks_ipad from '../../assets/images/Product/img_spindlebooks_ipad.png';
import img_spindlebooks_ipad_2x from '../../assets/images/Product/img_spindlebooks_ipad@2x.png';
import img_spindlebooks_solutions from '../../assets/images/Product/img_spindlebooks_solutions.png';
import img_spindlebooks_solutions_2x from '../../assets/images/Product/img_spindlebooks_solutions@2x.png';

const ContainerStyled = styled(Container)`
  padding-bottom: 1rem;
`;

const ColumnStyled = styled(Column)`
  @media ${responsive.conditionForTablet} {
    width: 30rem;
  }

  @media ${responsive.conditionForDesktop} {
    width: fit-content;
  }
`;

const DescriptionStyled = styled(Description)`
  width: 100%;
  margin: 0;

  @media ${responsive.conditionForDesktop} {
    width: 38.1rem;
  }
`;

const Logo = styled.span`
  margin-bottom: 2.4rem;

  width: 24rem;
  height: 6rem;

  background-image: url(${img_spindlebooks_logo});
  @media ${high_resolution} {
    background-image: url(${img_spindlebooks_logo_2x});
  }

  background-repeat: no-repeat;
  background-size: cover;
`;

const Viewers = styled.span`
  width: 100%;
  height: 13.4rem;
  margin-top: 3.2rem;

  background-image: url(${img_spindlebooks_solutions});
  @media ${high_resolution} {
    background-image: url(${img_spindlebooks_solutions_2x});
  }

  background-repeat: no-repeat;
  background-size: contain;

  @media ${responsive.conditionForDesktop} {
    margin-top: 8rem;
    height: 43.5rem;
  }
`;

const ProductImgStyled = styled(ProductImg)`
  width: 100%;
  height: 13.6rem;
  background-image: url(${img_spindlebooks_ipad});
  @media ${high_resolution} {
    background-image: url(${img_spindlebooks_ipad_2x});
  }

  background-repeat: no-repeat;
  background-size: cover;

  @media ${responsive.conditionForTablet} {
    width: 40rem;
    height: 20.4rem;
    background-size: contain;
  }

  @media ${responsive.conditionForDesktop} {
    width: 48rem;
  }
`;

export default function SpindleBooksSection() {
  const { t } = useTranslation();
  return (
    <ContainerStyled
      data-sal="slide-up"
      data-sal-duration="1000"
      data-sal-easing="ease"
    >
      <ColumnStyled>
        <Logo />
        <DescriptionStyled>{t('HPG-30')}</DescriptionStyled>
      </ColumnStyled>
      <ProductImgStyled />
      <Viewers
        data-sal="slide-up"
        data-sal-duration="1000"
        data-sal-easing="ease"
      />
    </ContainerStyled>
  );
}
