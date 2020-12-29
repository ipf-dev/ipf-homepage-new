import React from "react";
import styled from "styled-components";
import { useTranslation } from "gatsby-plugin-react-i18next";

import { responsive, high_resolution } from "../../layouts/responsive";

import Container from "../../components/Container";
import Column from "../../components/Column";
import Description from "../../components/Description";
import Services from "../../components/Services";
import { ProductImg } from "../../components/ProductImg";

import img_product_popreader from "../../assets/images/Product/img_product_popreader.png";
import img_product_popreader_2x from "../../assets/images/Product/img_product_popreader@2x.png";
import img_logo_popreader from "../../assets/images/Product/img_logo_popreader.png";
import img_logo_popreader_2x from "../../assets/images/Product/img_logo_popreader@2x.png";

const DescriptionStyled = styled(Description)`
  width: 100%;
  margin: 0;

  @media ${responsive.conditionForDesktop} {
    width: 38.1rem;
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

const Logo = styled.img`
  margin-bottom: 2.4rem;

  width: 19.1rem;
  height: 5.3rem;
`;

const ProductImgStyled = styled(ProductImg)`
  width: 100%;
  height: 22.3rem;
  background-image: url(${img_product_popreader});
  @media ${high_resolution} {
    background-image: url(${img_product_popreader_2x});
  }

  background-repeat: no-repeat;
  background-size: cover;

  @media ${responsive.conditionForTablet} {
    width: 37rem;
    height: 33.4rem;
    background-size: contain;
  }

  @media ${responsive.conditionForDesktop} {
    width: 48rem;
  }
`;

export default function PopReaderSection() {
  const { t } = useTranslation();
  return (
    <Container
      data-sal="slide-up"
      data-sal-duration="1000"
      data-sal-easing="ease"
    >
      <ColumnStyled>
        <Logo src={img_logo_popreader} srcSet={img_logo_popreader_2x} />
        <DescriptionStyled>{t("HPG-35")}</DescriptionStyled>
        <Services />
      </ColumnStyled>
      <ProductImgStyled />
    </Container>
  );
}
