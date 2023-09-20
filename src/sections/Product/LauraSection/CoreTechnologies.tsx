import React from 'react';
import styled from 'styled-components';

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
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  align-items: center;
  justify-content: space-between;

  @media ${responsive.conditionForTablet} {
    flex-direction: row;
    gap: 6.4rem;
  }
`;

export default function CoreTechnologies() {
  return (
    <Container>
      <TitleWrapper>Core Technologies</TitleWrapper>

      <Content>
        <CoreTechnologyItem
          img={{
            src: img_product_laura_enterprise_generative_ai,
            srcSet: `${img_product_laura_enterprise_generative_ai} 1x, ${img_product_laura_enterprise_generative_ai_2x} 2x`,
            alt: 'Spindle Speech AI icon',
          }}
          title="Spindle Speech AI"
          description="4~15세의 EFL 아동 학습자의 발음, 강세 및 억양을 정확히 이해하고 처리하는데 특화된 고품질의 음성인식(STT), 음성합성(TTS), 발음분석(PAE) 기술을 제공합니다."
        />

        <CoreTechnologyItem
          img={{
            src: img_product_laura_spindle_lrs,
            srcSet: `${img_product_laura_spindle_lrs} 1x, ${img_product_laura_spindle_lrs_2x} 2x`,
            alt: 'Spindle LRS icon',
          }}
          title="Spindle LRS"
          description="학습자의 독서 기록과 학습 데이터를 수집하여 맞춤형 대화를 위한 생성형 AI의 학습용 데이터로 활용합니다."
        />

        <CoreTechnologyItem
          img={{
            src: img_product_laura_spindle_speech_ai,
            srcSet: `${img_product_laura_spindle_speech_ai} 1x, ${img_product_laura_spindle_speech_ai_2x} 2x`,
            alt: 'Enterprise Generative AI icon',
          }}
          title="Enterprise Generative AI"
          description="학습자의 연령과 영어 수준에 맞게 단어 난이도, 문장 길이, 발화 속도 등을 세밀하게 조정하여 개인별 맞춤 학습을 제공합니다."
        />
      </Content>
    </Container>
  );
}
