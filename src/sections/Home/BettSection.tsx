import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import styled from 'styled-components';

import { responsive, high_resolution } from '../../layouts/responsive';

import Container from '../../components/Container';
import SubTitleEngWhite from '../../components/SubTitleEngWhite';
import Button from '../../components/Button';
import Column from '../../components/Column';
import Description from '../../components/Description';

import img_bett_highlights from '../../assets/images/Home/img_bett_highlights.png';
import img_bett_highlights_2x from '../../assets/images/Home/img_bett_highlights@2x.png';

const ContainerStyled = styled(Container)`
  padding-top: 8rem;
  padding-bottom: 0;
`;

const Bett2020 = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 1.6rem;

  background-image: url(${img_bett_highlights});
  @media ${high_resolution} {
    background-image: url(${img_bett_highlights_2x});
  }

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media ${responsive.conditionForDesktop} {
    height: 22.5rem;
  }
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;

  @media ${responsive.conditionForDesktop} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ColumnStyled = styled(Column)`
  padding: 3.2rem;
  width: 100%;

  @media ${responsive.conditionForDesktop} {
    padding: 4.9rem 5.6rem 0 5.6rem;
  }
`;

const DescriptionStyled = styled(Description)`
  width: 100%;
  color: white;

  @media ${responsive.conditionForDesktop} {
    width: 59.2rem;
  }
`;

const ButtonStyled = styled(Button)`
  bottom: 1.5rem;
`;

export default function BettSection() {
  const { t, i18n } = useTranslation();

  return i18n.language === 'ko' ? (
    <ContainerStyled>
      <Bett2020>
        <ColumnStyled>
          <SubTitleEngWhite>{t('TEXT-10')}</SubTitleEngWhite>
          <DescriptionWrapper>
            <DescriptionStyled>{t('TEXT-11')}</DescriptionStyled>
            <ButtonStyled
              href="https://docs.google.com/forms/d/e/1FAIpQLScxDuKyD0ohIk58YVdE83FryqtCFFvTSVtG_Os_ZtD7stTpRg/viewform"
              target="_blank"
              icon="arrow"
            >
              {t('TEXT-12')}
            </ButtonStyled>
          </DescriptionWrapper>
        </ColumnStyled>
      </Bett2020>
    </ContainerStyled>
  ) : (
    <> </>
  );
}
