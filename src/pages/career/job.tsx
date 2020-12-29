import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";

import Typography from "../../layouts/Typography";
import colors from "../../layouts/colors";

import { getJobDetail } from "../../api/getJobsData";

import Header from "../../components/Header";
import Container from "../../components/Container";
import Button from "../../components/Button";
import Footer from "../../containers/Footer";

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
  width: 100%;
  flex-direction: column;

  font-family: "Spoqa Han Sans Neo", "sans-serif";
`;

const Heading1 = styled.h2`
  ${Typography("heading1")};
  color: ${colors.black};

  margin-bottom: 1.6rem;
  white-space: pre-line;

  width: fit-content;
`;

const Body1 = styled.h3`
  ${Typography("body", 1.8, 700)};
  color: ${colors.gray4};

  white-space: pre-line;
`;

const Heading2 = styled.h3`
  ${Typography("heading2")};
  color: ${colors.primary};

  margin-bottom: 0.8rem;
  margin-top: 6.4rem;

  white-space: pre-line;
`;

const Heading3 = styled.p`
  ${Typography("body", 1.6, 700)};
  color: ${colors.black};

  margin-bottom: 0.8rem;
  margin-top: 1.6rem;

  white-space: pre-line;
`;

const Heading4 = styled.li`
  ${Typography("body", 1.4, 700)};
  color: ${colors.black};

  margin-bottom: 0.8rem;

  white-space: pre-line;
`;

const Body3 = styled.p`
  ${Typography("body", 1.4, 400)};
  color: ${colors.black};

  white-space: pre-line;
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

const ButtonWrapper = styled.div`
  margin-top: 6.4rem;
`;

function displayJobDetail(jobsDetailData: [JobDetailType]) {
  return jobsDetailData.map((jobDetail: JobDetailType, index: number) => {
    switch (jobDetail.depth) {
      case 1:
        return (
          <>
            <Heading1>{jobDetail.title}</Heading1>
            <Body1>{jobDetail.content}</Body1>
          </>
        );
      case 2:
        return (
          <>
            <Heading2>{jobDetail.title}</Heading2>
            <Body3>{jobDetail.content}</Body3>
          </>
        );
      case 3:
        return (
          <>
            <Heading3>{jobDetail.title}</Heading3>
            <Body3>{jobDetail.content}</Body3>
          </>
        );
      case 4:
        return (
          <DiscList>
            <Heading4>{jobDetail.title}</Heading4>
            <CircleList>
              <Body3 as="li">{jobDetail.content}</Body3>
            </CircleList>
          </DiscList>
        );
    }
  });
}

function displayJobDetailSkeleton() {
  return (
    <>
      <Heading1 style={{ width: "100%" }}>
        <Skeleton />
      </Heading1>
      <Body1 style={{ width: "100%" }}>
        <Skeleton />
      </Body1>
    </>
  );
}

const emptyJobsData = {
  docId: "",
  headingId: "",
  content: "",
  title: "",
  depth: 0,
};

export default function Job({ location }: Props) {
  const [jobsData, setJobsData] = useState<[JobDetailType]>([emptyJobsData]);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    if (location.state) {
      getJobDetail(location.state.details, signal).then((resultData) => {
        setJobsData(resultData);
      });
    }
    return function cleanup() {
      abortController.abort();
      setJobsData([emptyJobsData]);
    };
  }, []);

  return (
    <>
      <Header>Career</Header>
      <ContainerStyled
        data-sal="slide-up"
        data-sal-duration="1000"
        data-sal-easing="ease"
      >
        {jobsData[0].depth != 0
          ? displayJobDetail(jobsData)
          : displayJobDetailSkeleton()}
        <ButtonWrapper>
          <Button href="mailto:jobs@iportfolio.co.kr">지원하기</Button>
        </ButtonWrapper>
      </ContainerStyled>
      <Footer />
    </>
  );
}
