import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby-plugin-react-i18next';

import { responsive, high_resolution } from '../layouts/responsive';
import colors from '../layouts/colors';
import Typography from '../layouts/Typography';

import Label from './Label';

import img_arrow_jobs_right from '../assets/images/Career/img_arrow_jobs_right.png';
import img_arrow_jobs_right_2x from '../assets/images/Career/img_arrow_jobs_right@2x.png';

export type JobItemDataType = {
  id: string;
  part: string;
  title: string;
  details: string;
  due_date: string;
};

type Props = {
  jobItemData: JobItemDataType;
};

export const Item = styled(Link)`
  display: flex;
  flex-direction: column;
  min-width: 100%;
  padding: 24px;
  border: none;
  border-radius: 16px;
  margin-bottom: 0.8rem;

  white-space: nowrap;
  background-color: white;
  cursor: pointer;

  transition: all 0.1s linear;

  :hover {
    box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.12);
  }

  :focus {
    background-color: ${colors.gray1};
  }

  @media ${responsive.conditionForTablet} {
    width: 100%;
    flex-direction: row;
    padding: 4rem;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 2.7rem;

  @media ${responsive.conditionForTablet} {
    flex-direction: row;
  }
`;

export const TypeOfJob = styled.p`
  ${Typography('body', 1.6, 400)};
  width: 12.4rem;
  text-align: left;
  display: flex;
  align-items: center;

  @media ${responsive.conditionForTablet} {
    flex: 0 0 12.4rem;
  }
`;

export const LabelStyled = styled(Label)`
  color: ${colors.black};
  width: 100%;
  margin: 0;
  text-align: left;
`;

const Arrow = styled.div`
  width: 1.6rem;
  height: 1.6rem;

  position: absolute;
  right: 0;
  top: 4rem;
  margin-right: 2.8rem;

  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${img_arrow_jobs_right});

  @media ${high_resolution} {
    background-image: url(${img_arrow_jobs_right_2x});
  }

  @media ${responsive.conditionForTablet} {
    width: 2.4rem;
    height: 2.4rem;
    margin-right: 4.5rem;
  }
`;

export default function JobItem({ jobItemData }: Props) {
  return (
    <div
      style={{ display: 'flex', position: 'relative' }}
      key={jobItemData.title}
    >
      <Item
        to={`/career/job?id=${jobItemData.id}`}
        state={{ details: jobItemData.details }}
      >
        <DescriptionContainer>
          <TypeOfJob>{jobItemData.part}</TypeOfJob>
          <LabelStyled>{jobItemData.title}</LabelStyled>
        </DescriptionContainer>
        <Arrow />
      </Item>
    </div>
  );
}
