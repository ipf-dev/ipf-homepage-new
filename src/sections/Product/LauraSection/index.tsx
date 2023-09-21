import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import ServiceImg from '../../../components/ServiceImg';
import { responsive, high_resolution } from '../../../layouts/responsive';

import Container from '../../../components/Container';
import Column from '../../../components/Column';
import Description from '../../../components/Description';
import { ProductImg } from '../../../components/ProductImg';

import img_logo_laura from '../../../assets/images/Product/img_logo_laura.png';
import img_logo_laura_2x from '../../../assets/images/Product/img_logo_laura@2x.png';
import img_product_laura from '../../../assets/images/Product/img_product_laura.png';
import img_product_laura_2x from '../../../assets/images/Product/img_product_laura@2x.png';

import CoreTechnologies from './CoreTechnologies';

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

const Logo = styled.span`
  margin-bottom: 2.4rem;

  width: 13.9rem;
  height: 4.4rem;

  background-image: url(${img_logo_laura});
  @media ${high_resolution} {
    background-image: url(${img_logo_laura_2x});
  }

  background-repeat: no-repeat;
  background-size: cover;
`;

const DescriptionStyled = styled(Description)`
  width: 100%;
  margin: 0 0 2.4rem;

  @media ${responsive.conditionForDesktop} {
    width: 38.1rem;
    margin-bottom: 4rem;
  }
`;

const Services = styled.div`
  display: flex;
`;

const ProductImgStyled = styled(ProductImg)`
  width: 100%;
  aspect-ratio: 1.6;
  background-image: url(${img_product_laura});
  @media ${high_resolution} {
    background-image: url(${img_product_laura_2x});
  }

  background-repeat: no-repeat;
  background-size: cover;

  @media ${responsive.conditionForTablet} {
    width: 40rem;
    height: 25.1rem;
    background-size: contain;
  }

  @media ${responsive.conditionForDesktop} {
    width: 43.4rem;
    height: 27.2rem;
  }
`;

export default function LauraSection() {
  const { t } = useTranslation();

  return (
    <ContainerStyled
      data-sal="slide-up"
      data-sal-duration="1000"
      data-sal-easing="ease"
    >
      <ColumnStyled>
        <Logo />
        <DescriptionStyled>{t('HPG-102')}</DescriptionStyled>
        <Services>
          <ServiceImg service="android" isViewer={false} />
        </Services>
      </ColumnStyled>
      <ProductImgStyled />
      <CoreTechnologies />
    </ContainerStyled>
  );
}
