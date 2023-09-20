import React from 'react';
import styled from 'styled-components';

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
  margin: 0;

  @media ${responsive.conditionForDesktop} {
    width: 38.1rem;
  }
`;

const Platforms = styled.div`
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
  return (
    <ContainerStyled
      data-sal="slide-up"
      data-sal-duration="1000"
      data-sal-easing="ease"
    >
      <ColumnStyled>
        <Logo />
        <DescriptionStyled>
          LAURA™ (Language Assistant Utilizing Reading Analytics)는 맞춤형
          학습을 위한 대화형 AI Tutor 솔루션입니다. 어린이 영어 학습자에게
          특화된 발음 분석 엔진과 개인별 맞춤 대화가 가능한 AI Tutor를 통해
          차별화된 언어 학습 경험을 제공합니다.
        </DescriptionStyled>
        <Platforms />
      </ColumnStyled>
      <ProductImgStyled />
      <CoreTechnologies />
    </ContainerStyled>
  );
}
