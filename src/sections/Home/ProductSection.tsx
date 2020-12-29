import React from "react";
import styled from "styled-components";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { navigate } from "gatsby";

import { responsive } from "../../layouts/responsive";
import colors from "../../layouts/colors";

import Container from "../../components/Container";
import SubTitleEng from "../../components/SubTitleEng";
import Label from "../../components/Label";
import Button from "../../components/Button";
import Column from "../../components/Column";
import Description from "../../components/Description";

import img_home_product_image from "../../assets/images/Home/img_home_product_image.png";
import img_home_product_image_2x from "../../assets/images/Home/img_home_product_image@2x.png";

const ProductContainer = styled(Container)`
  background-color: ${colors.gray1};
`;

const HomeProductImg = styled.img`
  width: 100%;
  height: 27.5rem;
  margin-top: 6.4rem;

  @media ${responsive.conditionForTablet} {
    width: 40.6rem;
    height: 51.2rem;
    margin-top: 0;
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
        <Label>{t("HPG-91")}</Label>
        <SubTitleEng>{t("HPG-92")}</SubTitleEng>
        <Description>{t("HPG-2")}</Description>
        <Button onClick={() => navigate("/product")}>{t("HPG-4")}</Button>
      </ColumnStyled>
      <HomeProductImg
        src={img_home_product_image}
        srcSet={img_home_product_image_2x}
        data-sal="slide-up"
        data-sal-duration="1000"
        data-sal-easing="ease"
      />
    </ProductContainer>
  );
}
