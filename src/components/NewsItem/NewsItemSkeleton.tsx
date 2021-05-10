import React from 'react';
import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';

import NewsItemContainer from './NewsItemContainer';
import NewsItemPublisher from './NewsItemPublisher';
import NewsItemTitle from './NewsItemTitle';
import { NewsItemDescriptionSkeleton } from './NewsItemDescription';
import NewsItemDate from './NewsItemDate';

export const NewsItemContainerSkeleton = styled(NewsItemContainer)`
  :hover {
    box-shadow: none;
  }

  :active {
    background-color: white;
  }
`;

function NewsItemSkeleton() {
  return (
    <NewsItemContainerSkeleton>
      <NewsItemPublisher>
        <Skeleton width={120} />
      </NewsItemPublisher>
      <NewsItemTitle>
        <Skeleton />
      </NewsItemTitle>
      <NewsItemDescriptionSkeleton>
        <Skeleton count={3} />
      </NewsItemDescriptionSkeleton>
      <NewsItemDate>
        <Skeleton width={60} />
      </NewsItemDate>
    </NewsItemContainerSkeleton>
  );
}

export default NewsItemSkeleton;
