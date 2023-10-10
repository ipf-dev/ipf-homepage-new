import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { navigate } from 'gatsby';

import Container from '../../components/Container';
import SubTitleEng from '../../components/SubTitleEng';
import Label from '../../components/Label';
import Button from '../../components/Button';
import Column from '../../components/Column';
import NewsItemPreview from '../../containers/NewsItemPreview';

export default function NewsSection() {
  const { t } = useTranslation();

  return (
    <>
      <Container style={{ paddingBottom: '4rem' }}>
        <Column style={{ width: '100%' }}>
          <span
            data-sal="slide-up"
            data-sal-duration="1000"
            data-sal-easing="ease"
          >
            <Label>{t('TEXT-06')}</Label>
            <SubTitleEng>{t('TEXT-07')}</SubTitleEng>
          </span>
        </Column>
      </Container>
      <NewsItemPreview />
      <Container style={{ paddingTop: '4rem' }}>
        <Button onClick={() => navigate('/news')} icon="arrow">
          {t('HPG-4')}
        </Button>
      </Container>
    </>
  );
}
