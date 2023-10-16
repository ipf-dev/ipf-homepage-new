import { graphql } from 'gatsby';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';

import Typography from '../../layouts/Typography';
import colors from '../../layouts/colors';
import { responsive } from '../../layouts/responsive';

import { getAllJobs, getJobDetail } from '../../api/getJobsData';

import Header from '../../components/Header';
import HelmetComponent from '../../components/HelmetComponent';
import Container from '../../components/Container';
import Footer from '../../containers/Footer';
import { JobItemDataType } from '../../components/JobItem';
import JobApplyPanel from '../../components/JobApplyPanel';

type Props = {
  location: any;
};

type JobDetailType = {
  docId: string;
  headingId: string;
  content: string;
  title: string;
  depth: number;
};

const ContainerStyled = styled(Container)`
  flex-direction: column;

  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
`;

const Layout = styled.div`
  display: flex;
  gap: 3rem;
`;

const Heading1 = styled.h2`
  ${Typography('heading1')};
  color: ${colors.black};

  margin-bottom: 1.6rem;
  white-space: pre-line;

  width: fit-content;
`;

const Body1 = styled.h3`
  ${Typography('body', 1.8, 700)};
  color: ${colors.gray4};

  white-space: pre-line;
`;

const Heading2 = styled.h3`
  ${Typography('heading2')};
  color: ${colors.primary};

  margin-bottom: 0.8rem;
  margin-top: 6.4rem;

  white-space: pre-line;
`;

const Heading3 = styled.p`
  ${Typography('body', 1.6, 700)};
  color: ${colors.black};

  margin-bottom: 0.8rem;
  margin-top: 1.6rem;

  white-space: pre-line;
`;

const Heading4 = styled.li`
  ${Typography('body', 1.4, 700)};
  color: ${colors.black};

  margin-bottom: 0.8rem;

  white-space: pre-line;
`;

const Body3 = styled.p`
  ${Typography('body', 1.4, 400)};
  color: ${colors.black};

  white-space: pre-line;
`;

const Body3Li = styled(Body3).attrs({ as: 'li' })`
  &:not(:last-child) {
    margin-bottom: 0.4rem;
  }
`;

const DiscList = styled.ul`
  list-style: disc;
  list-style-position: inside;
  word-break: keep-all;

  margin: 0;
  white-space: pre-line;
`;

const CircleList = styled.ul`
  list-style: circle;
  list-style-position: outside;
  padding-left: 3.9rem;
  word-break: keep-all;

  margin-bottom: 0.8rem;
  white-space: pre-line;
`;

const FooterWrapper = styled.div`
  .footer {
    padding-bottom: 21.8rem;

    @media ${responsive.conditionForTablet} {
      padding-bottom: 25.8rem;
    }

    @media ${responsive.conditionForDesktop} {
      padding-bottom: 12rem;
    }
  }
`;

function displayJobDetail(jobsDetailData: [JobDetailType]) {
  return jobsDetailData.map((jobDetail: JobDetailType, index: number) => {
    switch (jobDetail.depth) {
      case 1:
        return (
          <React.Fragment key={`${jobDetail.title.replace('\n', '')}_${index}`}>
            <Heading1>{jobDetail.title}</Heading1>
            <Body1>{jobDetail.content}</Body1>
          </React.Fragment>
        );
      case 2:
        return (
          <React.Fragment key={`${jobDetail.title.replace('\n', '')}_${index}`}>
            <Heading2>{jobDetail.title}</Heading2>
            <Body3>{jobDetail.content}</Body3>
          </React.Fragment>
        );
      case 3:
        return (
          <React.Fragment key={`${jobDetail.title.replace('\n', '')}_${index}`}>
            <Heading3>{jobDetail.title}</Heading3>
            <Body3>{jobDetail.content}</Body3>
          </React.Fragment>
        );
      case 4:
        return (
          <DiscList key={`${jobDetail.title.replace('\n', '')}_${index}`}>
            <Heading4>{jobDetail.title}</Heading4>
            <CircleList>
              {jobDetail.content.split('\n').map((value, index, arr) => {
                if (index === arr.length - 1) {
                  return null;
                }

                return <Body3Li key={value}>{value}</Body3Li>;
              })}
            </CircleList>
          </DiscList>
        );
      default:
    }
  });
}

function displayJobDetailSkeleton() {
  return (
    <>
      <Heading1 style={{ width: '100%' }}>
        <Skeleton />
      </Heading1>
      <Body1 style={{ width: '100%' }}>
        <Skeleton />
      </Body1>
    </>
  );
}

const emptyJobsData = {
  docId: '',
  headingId: '',
  content: '',
  title: '',
  depth: 0,
};

export default function Job({ location }: Props) {
  const urlParams = new URLSearchParams(location.search);
  const [jobsData, setJobsData] = useState<[JobDetailType]>([emptyJobsData]);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    if (location.state) {
      getJobDetail(location.state.details, signal)
        .then((resultData) => {
          setJobsData(resultData);
        })
        .catch(() => setJobsData([emptyJobsData]));
    } else if (urlParams.get('id')) {
      getAllJobs(signal)
        .then((resultData: JobItemDataType[]) => {
          if (resultData) {
            return resultData.find((data) => data.id === urlParams.get('id'))
              ?.details;
          }
        })
        .then((key: string = '') => {
          getJobDetail(key, signal).then((resultData) => {
            setJobsData(resultData);
          });
        })
        .catch(() => setJobsData([emptyJobsData]));
    }
    return function cleanup() {
      abortController.abort();
      setJobsData([emptyJobsData]);
    };
  }, []);

  return (
    <>
      <HelmetComponent
        pageTitle={`${
          jobsData[0].depth != 0 ? jobsData[0].title.replace('\n', '') : ''
        } 채용 - Careers`}
        pageLink={`/career/job/?id=${urlParams.get('id')}`}
      />
      <Header>Careers</Header>

      <ContainerStyled
        data-sal="slide-up"
        data-sal-duration="1000"
        data-sal-easing="ease"
      >
        <Layout>
          <div>
            {jobsData[0].depth != 0
              ? displayJobDetail(jobsData)
              : displayJobDetailSkeleton()}
          </div>

          <JobApplyPanel />
        </Layout>
      </ContainerStyled>

      <FooterWrapper>
        <Footer className="footer" />
      </FooterWrapper>
    </>
  );
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
