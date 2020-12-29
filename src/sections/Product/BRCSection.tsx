import React from "react";
import styled from "styled-components";
import { useTranslation } from "gatsby-plugin-react-i18next";

import { responsive, high_resolution } from "../../layouts/responsive";

import Container from "../../components/Container";
import Column from "../../components/Column";
import Description from "../../components/Description";
import Services from "../../components/Services";
import { ProductImg } from "../../components/ProductImg";

import img_product_brc from "../../assets/images/Product/img_product_brc.png";
import img_product_brc_2x from "../../assets/images/Product/img_product_brc@2x.png";
import img_logo_brc from "../../assets/images/Product/img_logo_brc.png";
import img_logo_brc_2x from "../../assets/images/Product/img_logo_brc@2x.png";

const ContainerStyled = styled(Container)`
  flex-direction: column-reverse;
  padding-bottom: 1rem;
  @media ${responsive.conditionForTablet} {
    flex-direction: row;
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
  height: 3.6rem;
`;

const ProductImgStyled = styled(ProductImg)`
  width: 100%;
  height: 27.4rem;
  background-image: url(${img_product_brc});
  @media ${high_resolution} {
    background-image: url(${img_product_brc_2x});
  }

  background-repeat: no-repeat;
  background-size: cover;

  @media ${responsive.conditionForTablet} {
    width: 29.8rem;
    height: 34.9rem;
    background-size: contain;
  }

  @media ${responsive.conditionForDesktop} {
    width: 40.8rem;
  }
`;

export default function BRCSection() {
  const { t } = useTranslation();
  return (
    <ContainerStyled
      data-sal="slide-up"
      data-sal-duration="1000"
      data-sal-easing="ease"
    >
      <ProductImgStyled />
      <ColumnStyled>
        <Logo src={img_logo_brc} srcSet={img_logo_brc_2x} />
        <DescriptionStyled>{t("HPG-34")}</DescriptionStyled>
        <Services />
      </ColumnStyled>
    </ContainerStyled>
  );
}
