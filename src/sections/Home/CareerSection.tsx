import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { navigate } from 'gatsby';

import colors from '../../layouts/colors';

import Container from '../../components/Container';
import SubTitleEngWhite from '../../components/SubTitleEngWhite';
import Label from '../../components/Label';
import Button from '../../components/Button';
import Column from '../../components/Column';
import Description from '../../components/Description';
import PhotoCarouselHome from '../../containers/PhotoCarouselHome';

const ContainerStyled = styled(Container)`
  background-color: ${colors.black};
  padding-bottom: 0;
`;

export default function CareerSection() {
  const { t } = useTranslation();
  return (
    <>
      <ContainerStyled>
        <Column
          data-sal="slide-up"
          data-sal-duration="1000"
          data-sal-easing="ease"
        >
          <Label>{t('TEXT-08')}</Label>
          <SubTitleEngWhite>{t('TEXT-09')}</SubTitleEngWhite>
          <Description
            style={{
              color: 'white',
            }}
          >
            {t('HPG-3')}
          </Description>
          <Button onClick={() => navigate('/career')} icon="arrow">
            {t('HPG-4')}
          </Button>
        </Column>
      </ContainerStyled>
      <PhotoCarouselHome />
    </>
  );
}
