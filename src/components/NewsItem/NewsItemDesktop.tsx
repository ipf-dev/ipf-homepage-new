import React from "react";

import {
  NewsDataType,
  NewsItemDescriptionStyled,
} from "../../containers/NewsItemPreview";
import NewsItemContainer from "./NewsItemContainer";
import NewsItemPublisher from "./NewsItemPublisher";
import NewsItemTitle from "./NewsItemTitle";
import NewsItemDate from "./NewsItemDate";

type NewsItemDesktopProps = {
  newsItem: NewsDataType;
};

export default function NewsItemDesktop({ newsItem }: NewsItemDesktopProps) {
  return (
    <NewsItemContainer
      key={newsItem.title}
      href={newsItem.link}
      target="_blank"
    >
      <NewsItemPublisher>{newsItem.publisher}</NewsItemPublisher>
      <NewsItemTitle>{newsItem.title}</NewsItemTitle>
      <NewsItemDescriptionStyled>{newsItem.summary}</NewsItemDescriptionStyled>
      <NewsItemDate>{newsItem.date}</NewsItemDate>
    </NewsItemContainer>
  );
}
