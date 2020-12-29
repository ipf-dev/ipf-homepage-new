import React from "react";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import {
  NewsDataType,
  NewsItemDescriptionStyled,
} from "../../containers/NewsItemPreview";
import NewsItemContainer from "./NewsItemContainer";
import { NewsItemContainerSkeleton } from "./NewsItemSkeleton";
import NewsItemPublisher from "./NewsItemPublisher";
import NewsItemTitle from "./NewsItemTitle";
import NewsItemDescription from "./NewsItemDescription";
import NewsItemDate from "./NewsItemDate";

type NewsItemMobileProps = {
  newsData: NewsDataType[];
};

const SliderStyle = styled(Slider)`
  .trayWrapper {
    width: 32rem;
  }
  padding-left: calc((100% - 32rem) / 2);
`;

export default function NewsItemMobile({ newsData }: NewsItemMobileProps) {
  return (
    <CarouselProvider
      naturalSlideWidth={320}
      naturalSlideHeight={238}
      totalSlides={3}
      isIntrinsicHeight
    >
      <SliderStyle style={{ width: "100%" }} classNameTrayWrap="trayWrapper">
        {newsData.map((newsItem: NewsDataType, index) => {
          if (newsData[0].link == "") {
            return (
              <Slide
                index={index}
                style={{ marginRight: `${index != 2 ? "1.6rem" : 0}` }}
                key={index}
              >
                <NewsItemContainerSkeleton>
                  <NewsItemPublisher style={{ width: "50%" }}>
                    <Skeleton />
                  </NewsItemPublisher>
                  <NewsItemTitle>
                    <Skeleton />
                  </NewsItemTitle>
                  <NewsItemDescription>
                    <Skeleton count={3} />
                  </NewsItemDescription>
                  <NewsItemDate style={{ width: "10%" }}>
                    <Skeleton />
                  </NewsItemDate>
                </NewsItemContainerSkeleton>
              </Slide>
            );
          } else {
            return (
              <Slide
                index={index}
                style={{ marginRight: `${index != 2 ? "1.6rem" : 0}` }}
                key={newsItem.link}
              >
                <NewsItemContainer href={newsItem.link} target="_blank">
                  <NewsItemPublisher>{newsItem.publisher}</NewsItemPublisher>
                  <NewsItemTitle>{newsItem.title}</NewsItemTitle>
                  <NewsItemDescriptionStyled>
                    {newsItem.summary}
                  </NewsItemDescriptionStyled>
                  <NewsItemDate>{newsItem.date}</NewsItemDate>
                </NewsItemContainer>
              </Slide>
            );
          }
        })}
      </SliderStyle>
    </CarouselProvider>
  );
}
