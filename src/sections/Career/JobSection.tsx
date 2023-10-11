import React from 'react';

import { Element } from 'react-scroll';
import styled from 'styled-components';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import colors from '../../layouts/colors';
import Typography from '../../layouts/Typography';

import Container from '../../components/Container';
import SubTitle from '../../components/SubTitle';
import JobsItemPreview from '../../containers/JobsItemPreview';

const ContainerStyled = styled(Container)`
  flex-direction: column;
  background-color: ${colors.gray1};

  ${Typography('heading1')};
  line-height: 49px;
  color: ${colors.black};
`;

export default function JobSection() {
  const { t } = useTranslation();

  return (
    <ContainerStyled>
      <Element name="recruiting-now">
        <SubTitle
          data-sal="slide-up"
          data-sal-duration="1000"
          data-sal-easing="ease"
        >
          {t('HPG-79')}
        </SubTitle>
      </Element>
      <JobsItemPreview />
    </ContainerStyled>
  );
}
