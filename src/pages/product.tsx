import { graphql } from 'gatsby';
import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import Header from '../components/Header';
import HelmetComponent from '../components/HelmetComponent';
import Footer from '../containers/Footer';

import SpindleBooksSection from '../sections/Product/SpindleBooksSection';
import OLBSection from '../sections/Product/OLBSection';
import ReadingNSection from '../sections/Product/ReadingNSection';
import ORCSection from '../sections/Product/ORCSection';
import BRCSection from '../sections/Product/BRCSection';
import PopReaderSection from '../sections/Product/PopReaderSection';
import LauraSection from '../sections/Product/LauraSection';
import CampleSection from '../sections/Product/CampleSection';

export default function Product() {
  const { t } = useTranslation();
  return (
    <>
      <HelmetComponent pageTitle="Product" pageLink="/product" />
      <div style={{ width: '100%', height: '100%' }}>
        <Header>{t('TEXT-04')}</Header>

        <SpindleBooksSection />
        <LauraSection />
        <CampleSection />

        <OLBSection />
        <ReadingNSection />
        <ORCSection />
        <BRCSection />
        <PopReaderSection />

        <Footer />
      </div>
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
