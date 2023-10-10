import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { navigate } from 'gatsby';

import { responsive, high_resolution } from '../../layouts/responsive';
import colors from '../../layouts/colors';

import Container from '../../components/Container';
import SubTitleEng from '../../components/SubTitleEng';
import Label from '../../components/Label';
import Button from '../../components/Button';
import Column from '../../components/Column';
import Description from '../../components/Description';

import img_home_product_image from '../../assets/images/Home/img_home_product_image.png';
import img_home_product_image_2x from '../../assets/images/Home/img_home_product_image@2x.png';

const ProductContainer = styled(Container)`
  background-color: ${colors.gray1};
`;

const HomeProductImg = styled.span`
  width: 100%;
  height: 27.5rem;
  margin-top: 6.4rem;

  background-image: url(${img_home_product_image});
  @media ${high_resolution} {
    background-image: url(${img_home_product_image_2x});
  }

  background-repeat: no-repeat;
  background-size: cover;

  @media ${responsive.conditionForTablet} {
    width: 40.6rem;
    height: 51.2rem;
    margin-top: 0;
    background-size: contain;
    background-position: center;
  }

  @media ${responsive.conditionForDesktop} {
    width: 56.6rem;
  }
`;

const ColumnStyled = styled(Column)`
  @media ${responsive.conditionForTablet} {
    width: 29.5rem;
  }

  @media ${responsive.conditionForDesktop} {
    width: 38.5rem;
  }
`;

export default function ProductSection() {
  const { t } = useTranslation();
  return (
    <ProductContainer>
      <ColumnStyled
        data-sal="slide-up"
        data-sal-duration="1000"
        data-sal-easing="ease"
      >
        <Label>{t('TEXT-04')}</Label>
        <SubTitleEng>{t('TEXT-05')}</SubTitleEng>
        <Description>{t('HPG-2')}</Description>
        <Button onClick={() => navigate('/product')} icon="arrow">
          {t('HPG-4')}
        </Button>
      </ColumnStyled>
      <HomeProductImg
        data-sal="slide-up"
        data-sal-duration="1000"
        data-sal-easing="ease"
      />
    </ProductContainer>
  );
}
