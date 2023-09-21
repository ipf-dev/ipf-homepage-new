import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import { responsive } from '../../../layouts/responsive';
import Typography from '../../../layouts/Typography';

import img_product_laura_enterprise_generative_ai from '../../../assets/images/Product/img_product_laura_enterprise_generative_ai.png';
import img_product_laura_enterprise_generative_ai_2x from '../../../assets/images/Product/img_product_laura_enterprise_generative_ai@2x.png';
import img_product_laura_spindle_lrs from '../../../assets/images/Product/img_product_laura_spindle_lrs.png';
import img_product_laura_spindle_lrs_2x from '../../../assets/images/Product/img_product_laura_spindle_lrs@2x.png';
import img_product_laura_spindle_speech_ai from '../../../assets/images/Product/img_product_laura_spindle_speech_ai.png';
import img_product_laura_spindle_speech_ai_2x from '../../../assets/images/Product/img_product_laura_spindle_speech_ai@2x.png';

import CoreTechnologyItem from './CoreTechnologyItem';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  margin-top: 2.4rem;

  @media ${responsive.conditionForTablet} {
    margin-top: 4rem;
  }
`;

const TitleWrapper = styled.div`
  width: 100%;
  text-align: center;

  ${Typography('subheading')};
`;

const Content = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(1, 1fr);
  gap: 2.4rem;

  @media ${responsive.conditionForTablet} {
    grid-template-rows: repeat(1, 1fr);
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${responsive.conditionForDesktop} {
    gap: 6.4rem;
  }
`;

export default function CoreTechnologies() {
  const { t } = useTranslation();

  return (
    <Container>
      <TitleWrapper>Core Technologies</TitleWrapper>

      <Content>
        <CoreTechnologyItem
          img={{
            src: img_product_laura_spindle_speech_ai,
            srcSet: `${img_product_laura_spindle_speech_ai} 1x, ${img_product_laura_spindle_speech_ai_2x} 2x`,
            alt: 'Spindle Speech AI icon',
          }}
          title="Spindle Speech AI"
          description={t('HPG-103')}
        />

        <CoreTechnologyItem
          img={{
            src: img_product_laura_spindle_lrs,
            srcSet: `${img_product_laura_spindle_lrs} 1x, ${img_product_laura_spindle_lrs_2x} 2x`,
            alt: 'Spindle LRS icon',
          }}
          title="Spindle LRS"
          description={t('HPG-104')}
        />

        <CoreTechnologyItem
          img={{
            src: img_product_laura_enterprise_generative_ai,
            srcSet: `${img_product_laura_enterprise_generative_ai} 1x, ${img_product_laura_enterprise_generative_ai_2x} 2x`,
            alt: 'Enterprise Generative AI icon',
          }}
          title="Enterprise Generative AI"
          description={t('HPG-105')}
        />
      </Content>
    </Container>
  );
}
