import { graphql } from 'gatsby';
import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import { Link } from 'react-scroll';
import Header from '../components/Header';
import HelmetComponent from '../components/HelmetComponent';
import IntroSection from '../sections/Career/IntroSection';
import CommunitySection from '../sections/Career/CommunitySection';
import GrowthSection from '../sections/Career/GrowthSection';
import BenefitSection from '../sections/Career/BenefitSection';
import EmploymentStepSection from '../sections/Career/EmploymentStepSection';
import JobSection from '../sections/Career/JobSection';
import WorkApproachSection from '../sections/Career/WorkApproachSection';
import Footer from '../containers/Footer';
import FloatingButton from '../components/FloatingButton';

export default function Career() {
  const { t } = useTranslation();
  return (
    <>
      <HelmetComponent pageTitle="Career" pageLink="/career" />
      <div style={{ width: '100%', height: '100%' }}>
        <Header>{t('TEXT-08')}</Header>
        <IntroSection />
        <CommunitySection />
        <WorkApproachSection />
        <GrowthSection />
        <BenefitSection />
        <EmploymentStepSection />
        <JobSection />
        <Footer />
        <Link to="recruiting-now" offset={-100}>
          <FloatingButton />
        </Link>
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
