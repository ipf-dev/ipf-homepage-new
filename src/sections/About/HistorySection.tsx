import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import { responsive, high_resolution } from '../../layouts/responsive';

import Typography from '../../layouts/Typography';
import colors from '../../layouts/colors';

import Container from '../../components/Container';
import SubTitle from '../../components/SubTitle';
import Label from '../../components/Label';
import Column from '../../components/Column';
import PhotoCarouselAbout from '../../containers/PhotoCarouselAbout';

import img_vector from '../../assets/images/About/img_vector.png';
import img_vector_2x from '../../assets/images/About/img_vector@2x.png';

const HistoryTitleContainer = styled(Container)`
  padding-bottom: 0;
`;

const HistoryDescriptionContainer = styled(Container)`
  padding-top: 0;

  justify-content: space-between;
`;

type TimelineProps = {
  hidden: boolean;
};

const Timeline = styled(Column)`
  margin: 0 0 8rem 0;
  display: ${(props: TimelineProps) => props.hidden && 'none'};

  @media ${responsive.conditionForDesktop} {
    display: block;
    visibility: ${(props: TimelineProps) => props.hidden && 'hidden'};
  }
`;

const Year = styled.div`
  ${Typography('heading1')};
  white-space: nowrap;

  display: flex;
`;

const Vector = styled.div`
  width: 100%;
  padding-left: 0.8rem;
  position: relative;

  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom;
  background-image: url(${img_vector});
  @media ${high_resolution} {
    background-image: url(${img_vector_2x});
  }
`;

const RedBubble = styled.div`
  width: fit-content;
  padding: 0.8rem 1.6rem;

  border-radius: 0.8rem;
  background-color: rgba(239, 80, 48, 0.1);

  margin-top: 3.2rem;
  margin-bottom: 1.3rem;

  white-space: nowrap;
  ${Typography('body', 1.6, 700)};
  color: ${colors.primary};
`;

const List = styled.div`
  margin-left: 2rem;
  line-height: 1px;
  width: 28.6rem;
`;

const BulletPoint = styled.span`
  line-height: 1.1rem;
  :before {
    position: relative;
    top: 1.8rem;
    right: 2rem;
    content: '•';
    font-size: 10pt;
  }
`;

const BulletItem = styled.p`
  ${Typography('body', 1.6, 400)};
`;

type TimeLineProps = {
  hidden?: boolean;
  year: string;
  description: {
    month: string;
    items: string[];
  }[];
  style?: React.CSSProperties;
};

function TimeLine({ hidden = false, year, description, style }: TimeLineProps) {
  return (
    <Timeline hidden={hidden} style={style}>
      <Year>
        {year}
        <Vector />
      </Year>
      {description.map((descriptionItem, index) => {
        return (
          <span key={descriptionItem.month + index}>
            <RedBubble>{descriptionItem.month}</RedBubble>
            <List>
              {descriptionItem.items.map((value) => {
                return (
                  <BulletPoint key={value}>
                    <BulletItem>{value}</BulletItem>
                  </BulletPoint>
                );
              })}
            </List>
          </span>
        );
      })}
    </Timeline>
  );
}

export default function HistorySection() {
  const { t } = useTranslation();

  return (
    <>
      <HistoryTitleContainer
        data-sal="slide-up"
        data-sal-duration="1000"
        data-sal-easing="ease"
      >
        <Column>
          <Label>{t('TEXT-15')}</Label>
          <SubTitle>{t('HPG-8')}</SubTitle>
        </Column>
      </HistoryTitleContainer>
      <PhotoCarouselAbout />
      <HistoryDescriptionContainer>
        <TimeLine
          year={t('YEAR-2011')}
          description={[{ month: t('MONTH-1'), items: [t('HPG-9')] }]}
        />
        <TimeLine
          year={t('YEAR-2013')}
          description={[
            { month: t('MONTH-1'), items: [t('HPG-10')] },
            { month: t('MONTH-8'), items: [t('HPG-12')] },
          ]}
        />
        <TimeLine
          year={t('YEAR-2014')}
          description={[
            { month: t('MONTH-6'), items: [t('HPG-12')] },
            { month: t('MONTH-11'), items: [t('HPG-13')] },
          ]}
        />
        <TimeLine
          year={t('YEAR-2016')}
          description={[
            { month: t('MONTH-7'), items: [t('HPG-14')] },
            { month: t('MONTH-9'), items: [t('HPG-15')] },
          ]}
        />
        <TimeLine
          year={t('YEAR-2017')}
          description={[
            {
              month: t('MONTH-6'),
              items: [t('HPG-16'), t('HPG-17')],
            },
            { month: t('MONTH-7'), items: [t('HPG-18')] },
            {
              month: t('MONTH-8'),
              items: [t('HPG-19')],
            },
            { month: t('MONTH-12'), items: [t('HPG-20')] },
          ]}
        />
        <TimeLine
          year={t('YEAR-2018')}
          description={[
            { month: t('MONTH-9'), items: [t('HPG-21')] },
            { month: t('MONTH-12'), items: [t('HPG-22')] },
          ]}
        />
        <TimeLine
          year={t('YEAR-2019')}
          description={[
            { month: t('MONTH-2'), items: [t('HPG-23')] },
            { month: t('MONTH-12'), items: [t('HPG-24')] },
          ]}
        />
        <TimeLine
          year={t('YEAR-2020')}
          description={[
            {
              month: t('MONTH-1'),
              items: [t('HPG-25'), t('HPG-26')],
            },
            {
              month: t('MONTH-3'),
              items: [t('HPG-27'), t('HPG-28')],
            },
            { month: t('MONTH-11'), items: [t('HPG-29')] },
          ]}
        />
        <TimeLine
          year={t('YEAR-2021')}
          description={[
            {
              month: t('MONTH-1'),
              items: [t('HPG-89'), t('HPG-90')],
            },
            {
              month: t('MONTH-6'),
              items: [t('HPG-91')],
            },
            {
              month: t('MONTH-11'),
              items: [t('HPG-92')],
            },
          ]}
        />
        <TimeLine
          year={t('YEAR-2022')}
          description={[
            {
              month: t('MONTH-1'),
              items: [t('HPG-93')],
            },
            {
              month: t('MONTH-3'),
              items: [t('HPG-94')],
            },
            {
              month: t('MONTH-6'),
              items: [t('HPG-95'), t('HPG-96')],
            },
            {
              month: t('MONTH-9'),
              items: [t('HPG-97')],
            },
          ]}
        />
        <TimeLine
          year={t('YEAR-2023')}
          description={[
            {
              month: t('MONTH-1'),
              items: [t('HPG-98')],
            },
            {
              month: t('MONTH-5'),
              items: [t('HPG-99')],
            },
            {
              month: t('MONTH-7'),
              items: [t('HPG-100')],
            },
            {
              month: t('MONTH-8'),
              items: [t('HPG-101')],
            },
          ]}
        />
        <TimeLine hidden year="" description={[{ month: '', items: [''] }]} />
      </HistoryDescriptionContainer>
    </>
  );
}
