import { graphql } from 'gatsby';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  SpindleThemeProvider,
  // Pagination,
} from '@ipf-dev/web-spindle-design-system';
import Skeleton from 'react-loading-skeleton';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

import Header from '../components/Header';
import HelmetComponent from '../components/HelmetComponent';
import NewsItemPublisher from '../components/NewsItem/NewsItemPublisher';
import NewsItemTitle from '../components/NewsItem/NewsItemTitle';
import NewsItemDate from '../components/NewsItem/NewsItemDate';
import Container from '../components/Container';
import Pagination from '../components/Pagination';
import Footer from '../containers/Footer';
import { NewsDataType, emptyNewsData } from '../containers/NewsItemPreview';

import { getNewsData } from '../api/getNewsData';
import colors from '../layouts/colors';
import theme from '../layouts/theme';

const NewsContainer = styled(Container)`
  flex-direction: column;
`;

const NewsItemContainer = styled.a`
  width: 100%;
  height: fit-content;
  border-radius: 1.6rem;
  padding: 2.4rem;
  margin-bottom: 1.6rem;
  background-color: ${colors.gray1};
  transition: all 0.1s linear;

  :hover {
    box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.12);
    transition: box-shadow 0.3s ease-in-out;
  }
`;

const NewsItemContainerSkeleton = styled(NewsItemContainer)`
  padding: 3.2rem 4rem 3.2rem 4rem;
`;

const PaginationWrapper = styled.div`
  width: 100%;
  margin-top: 6.4rem;
  white-space: nowrap;
`;

function displayAllNewsData(newsData: NewsDataType[], pageIndex: number) {
  let pageData = newsData.slice(pageIndex * 8, pageIndex * 8 + 8);
  return pageData.map((newsItem: NewsDataType, index: number) => {
    return (
      <NewsItemContainer
        key={newsItem.title}
        href={newsItem.link}
        target="_blank"
      >
        <NewsItemPublisher>{newsItem.publisher}</NewsItemPublisher>
        <NewsItemTitle>{newsItem.title}</NewsItemTitle>
        <NewsItemDate>{newsItem.date}</NewsItemDate>
      </NewsItemContainer>
    );
  });
}

function displayNewsItemSkeleton() {
  let skeletonNewsItems = [];
  for (let i = 0; i < 7; i++) {
    skeletonNewsItems.push(
      <NewsItemContainerSkeleton key={i}>
        <NewsItemPublisher style={{ height: '0.8rem', width: '100%' }}>
          <Skeleton height={8} style={{ height: '0.8rem', width: '64px' }} />
        </NewsItemPublisher>
        <NewsItemTitle style={{ height: '0.8rem', width: '100%' }}>
          <Skeleton height={8} />
        </NewsItemTitle>
        <NewsItemDate style={{ height: '0.8rem', marginTop: 0, width: '10%' }}>
          <Skeleton height={8} />
        </NewsItemDate>
      </NewsItemContainerSkeleton>,
    );
  }
  return skeletonNewsItems;
}

export default function News() {
  const [newsData, setNewsData] = useState<NewsDataType[]>([emptyNewsData]);
  const [paginationData, setPaginationData] = useState({
    totalPages: 1,
    selectedPage: 1,
  });

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    getNewsData(signal)
      .then((resultData: NewsDataType[]) => {
        if (resultData) {
          setNewsData(resultData);
        } else {
          setNewsData([emptyNewsData]);
        }

        let numPages = Math.ceil(resultData.length / 8);
        if (numPages === 0) numPages = 1;

        setPaginationData({ ...paginationData, totalPages: numPages });
      })
      .catch(() => setNewsData([emptyNewsData]));

    return function cleanup() {
      abortController.abort();
      setNewsData([emptyNewsData]);
    };
  }, []);

  const handleOnClick = (selectedPage: number) => {
    setPaginationData({ ...paginationData, selectedPage });
  };

  const breakpoints = useBreakpoint();

  return (
    <>
      <HelmetComponent pageTitle="News" pageLink="/news" />
      <Header>News</Header>
      <NewsContainer
        data-sal="slide-up"
        data-sal-duration="1000"
        data-sal-easing="ease"
      >
        {newsData[0].title != ''
          ? displayAllNewsData(newsData, paginationData.selectedPage)
          : displayNewsItemSkeleton()}

        <SpindleThemeProvider theme={theme}>
          <PaginationWrapper>
            <Pagination
              currentPage={paginationData.selectedPage}
              totalPage={paginationData.totalPages}
              onPrevClick={() => handleOnClick(paginationData.selectedPage - 1)}
              onNextClick={() => handleOnClick(paginationData.selectedPage + 1)}
              onPageNumClick={(pageNum) => handleOnClick(pageNum)}
            />
          </PaginationWrapper>
        </SpindleThemeProvider>
      </NewsContainer>
      <Footer />
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
