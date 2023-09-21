import React from 'react';
import styled from 'styled-components';

import { responsive, high_resolution } from '../../layouts/responsive';

import Container from '../../components/Container';
import Column from '../../components/Column';
import Description from '../../components/Description';
import { ProductImg } from '../../components/ProductImg';
import ServiceImg from '../../components/ServiceImg';

import img_logo_cample from '../../assets/images/Product/img_logo_cample.png';
import img_logo_cample_2x from '../../assets/images/Product/img_logo_cample@2x.png';
import img_product_cample from '../../assets/images/Product/img_product_cample.png';
import img_product_cample_2x from '../../assets/images/Product/img_product_cample@2x.png';

const ContainerStyled = styled(Container)`
  padding-bottom: 20rem;

  flex-direction: column-reverse;
  @media ${responsive.conditionForTablet} {
    flex-direction: row;
  }
  @media ${responsive.conditionForDesktop} {
    padding-bottom: 30rem;
  }
`;

const ProductImgStyled = styled(ProductImg)`
  width: 100%;
  aspect-ratio: 1.6;
  background-image: url(${img_product_cample});
  @media ${high_resolution} {
    background-image: url(${img_product_cample_2x});
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

  width: 14.2rem;
  height: 4rem;

  background-image: url(${img_logo_cample});
  @media ${high_resolution} {
    background-image: url(${img_logo_cample_2x});
  }

  background-repeat: no-repeat;
  background-size: cover;
`;

const DescriptionStyled = styled(Description)`
  width: 100%;
  margin: 0 0 4rem;

  @media ${responsive.conditionForDesktop} {
    width: 38.1rem;
  }
`;

const Services = styled.div`
  display: flex;
  gap: 0.4rem;
`;

export default function CampleSection() {
  return (
    <ContainerStyled
      data-sal="slide-up"
      data-sal-duration="1000"
      data-sal-easing="ease"
    >
      <ProductImgStyled />
      <ColumnStyled>
        <Logo />
        <DescriptionStyled>
          Cample™은 언어 학습에 특화된 웹 기반 실시간 화상 수업 솔루션 입니다.
          최적화된 온라인 학습 환경을 조성하기 위해 다양한 수업 활용 도구와
          학습자의 수업 집중력 향상을 위한 관리 기능을 제공합니다.
        </DescriptionStyled>
        <Services>
          <ServiceImg service="web" />
          <ServiceImg service="ios" />
          <ServiceImg service="android" />
        </Services>
      </ColumnStyled>
    </ContainerStyled>
  );
}
