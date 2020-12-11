import React from "react";
import styled from "styled-components";
import { useTranslation } from "gatsby-plugin-react-i18next";

import { responsive, high_resolution } from "../../layouts/responsive";

import Container from "../../components/Container";
import SubTitle from "../../components/SubTitle";
import Description from "../../components/Description";
import Column from "../../components/Column";
import Interview from "../../components/Interview";

import img_good_team from "../../assets/images/Career/img_good_team.png";
import img_good_team_2x from "../../assets/images/Career/img_good_team@2x.png";

const GoodTeam = styled.div`
  width: 100%;
  height: 31rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  background-image: url(${img_good_team});
  @media ${high_resolution} {
    background-image: url(${img_good_team_2x});
  }

  @media ${responsive.conditionForDesktop} {
    height: 54.3rem;
  }
`;

const ContainerStyled = styled(Container)`
  margin: 0;
  height: 100%;
`;

const WhiteSubTitle = styled(SubTitle)`
  color: white;
  @media ${responsive.conditionForDesktop} {
    width: 29rem;
  }
`;

const DescriptionStyled = styled(Description)`
  color: white;
`;

export default function CommunitySection() {
  const { t } = useTranslation();

  return (
    <>
      <GoodTeam>
        <ContainerStyled>
          <Column>
            <WhiteSubTitle>{t("HPG-41")}</WhiteSubTitle>
            <DescriptionStyled>{t("HPG-42")}</DescriptionStyled>
          </Column>
        </ContainerStyled>
      </GoodTeam>
      <Interview />
    </>
  );
}
