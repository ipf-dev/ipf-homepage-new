import React from 'react';
import styled from 'styled-components';
import { Translation } from 'gatsby-plugin-react-i18next';

import colors from '../../layouts/colors';
import { high_resolution, responsive } from '../../layouts/responsive';
import Typography from '../../layouts/Typography';

import Container from '../../components/Container';
import SubTitle from '../../components/SubTitle';
import Description from '../../components/Description';
import Column from '../../components/Column';

import img_arrow_down from '../../assets/images/Career/img_arrow_down.png';
import img_arrow_down_2x from '../../assets/images/Career/img_arrow_down@2x.png';

const EmploymentStepData = {
  first: {
    title: <Translation>{(t) => t('HPG-69')}</Translation>,
    description: <Translation>{(t) => t('HPG-70')}</Translation>,
    subText: <Translation>{(t) => t('HPG-107')}</Translation>,
  },
  second: {
    title: <Translation>{(t) => t('HPG-71')}</Translation>,
    description: <Translation>{(t) => t('HPG-72')}</Translation>,
    subText: <Translation>{(t) => t('HPG-73')}</Translation>,
  },
  third: {
    title: <Translation>{(t) => t('HPG-74')}</Translation>,
    description: <Translation>{(t) => t('HPG-75')}</Translation>,
  },
  fourth: {
    title: <Translation>{(t) => t('HPG-76')}</Translation>,
    description: <Translation>{(t) => t('HPG-77')}</Translation>,
    subText: <Translation>{(t) => t('HPG-78')}</Translation>,
  },
};

const ContainerStyled = styled(Container)`
  flex-direction: column;
`;

const RedBubble = styled.div`
  width: fit-content;
  padding: 1.6rem 3.2rem;

  border-radius: 1.6rem;
  background-color: rgba(239, 80, 48, 0.1);

  margin-bottom: 1.6rem;

  white-space: nowrap;
  ${Typography('heading2')};
  color: ${colors.primary};

  @media ${responsive.conditionForTablet} {
    margin-right: 3.2rem;
    margin-bottom: 0;
  }
`;

const ArrowDown = styled.div`
  width: 2.4rem;
  height: 2.4rem;

  position: relative;
  left: 0;
  margin: 2.4rem 0;

  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${img_arrow_down});

  @media ${high_resolution} {
    background-image: url(${img_arrow_down_2x});
  }

  @media ${responsive.conditionForTablet} {
    left: 5rem;
  }
`;

const Caption = styled.p`
  ${Typography('caption', 400)};

  margin: 2.4rem 0 4rem 0;

  @media ${responsive.conditionForTablet} {
    margin-bottom: 6.4rem;
  }
`;

const JobDescription = styled.p`
  ${Typography('body', 1.6)};
  color: ${colors.black};

  word-break: keep-all;
`;

const SubText = styled(Description)`
  margin: 0;
  color: ${colors.gray4};

  @media ${responsive.conditionForTablet} {
    margin-top: 0.8rem;
  }
`;

const EmploymentStep = styled.div`
  display: flex;
  flex-direction: column;

  @media ${responsive.conditionForTablet} {
    flex-direction: row;
  }
`;

export default function EmploymentStepSection() {
  return (
    <ContainerStyled
      data-sal="slide-up"
      data-sal-duration="1000"
      data-sal-easing="ease"
    >
      <SubTitle>
        <Translation>{(t) => t('HPG-67')}</Translation>
      </SubTitle>
      <Caption>
        <Translation>{(t) => t('HPG-68')}</Translation>
      </Caption>
      {Object.keys(EmploymentStepData).map(function (key: string, index) {
        return (
          <div key={key} style={{ width: '100%' }}>
            <EmploymentStep>
              <RedBubble>{(EmploymentStepData as any)[key].title}</RedBubble>
              <Column>
                <JobDescription>
                  {(EmploymentStepData as any)[key].description}
                </JobDescription>
                {(EmploymentStepData as any)[key].subText && (
                  <SubText>{(EmploymentStepData as any)[key].subText}</SubText>
                )}
              </Column>
            </EmploymentStep>
            {key !== 'fourth' && <ArrowDown />}
          </div>
        );
      })}
    </ContainerStyled>
  );
}
