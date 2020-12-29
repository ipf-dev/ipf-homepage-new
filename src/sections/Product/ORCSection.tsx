import React from "react";
import styled from "styled-components";
import { useTranslation } from "gatsby-plugin-react-i18next";

import { responsive, high_resolution } from "../../layouts/responsive";

import Container from "../../components/Container";
import Column from "../../components/Column";
import Description from "../../components/Description";
import Services from "../../components/Services";
import { ProductImg } from "../../components/ProductImg";

import img_logo_orc from "../../assets/images/Product/img_logo_orc.png";
import img_logo_orc_2x from "../../assets/images/Product/img_logo_orc@2x.png";
import img_product_orc from "../../assets/images/Product/img_product_orc.png";
import img_product_orc_2x from "../../assets/images/Product/img_product_orc@2x.png";

const ContainerStyled = styled(Container)`
  @media only screen and (max-width: 96rem) {
    padding-bottom: 1rem;
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

const DescriptionStyled = styled(Description)`
  width: 100%;
  margin: 0;

  @media ${responsive.conditionForDesktop} {
    width: 38.1rem;
  }
`;

const Logo = styled.img`
  margin-bottom: 2.4rem;

  width: 30rem;
  height: 3.3rem;
`;

const ProductImgStyled = styled(ProductImg)`
  width: 100%;
  height: 20rem;
  background-image: url(${img_product_orc});
  @media ${high_resolution} {
    background-image: url(${img_product_orc_2x});
  }

  background-repeat: no-repeat;
  background-size: cover;

  @media ${responsive.conditionForTablet} {
    width: 39rem;
    height: 37.6rem;
    background-size: contain;
  }

  @media ${responsive.conditionForDesktop} {
    width: 57rem;
  }
`;

export default function ORCSection() {
  const { t } = useTranslation();
  return (
    <ContainerStyled
      data-sal="slide-up"
      data-sal-duration="1000"
      data-sal-easing="ease"
    >
      <ColumnStyled>
        <Logo src={img_logo_orc} srcSet={img_logo_orc_2x} />
        <DescriptionStyled>{t("HPG-33")}</DescriptionStyled>
        <Services />
      </ColumnStyled>
      <ProductImgStyled />
    </ContainerStyled>
  );
}
