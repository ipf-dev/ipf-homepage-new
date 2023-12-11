import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import {
  Translation,
  useI18next,
  useTranslation,
} from 'gatsby-plugin-react-i18next';

import Typography from '../../layouts/Typography';
import { responsive } from '../../layouts/responsive';

import Container from '../../components/Container';
import SubTitle from '../../components/SubTitle';
import Modal from '../../components/Modal';

import colors from '../../layouts/colors';

import img_welfare_1 from '../../assets/images/Career/img_welfare_1.jpg';
import img_welfare_1_2x from '../../assets/images/Career/img_welfare_1@2x.jpg';
import img_welfare_2 from '../../assets/images/Career/img_welfare_2.jpg';
import img_welfare_2_2x from '../../assets/images/Career/img_welfare_2@2x.jpg';
import img_welfare_3 from '../../assets/images/Career/img_welfare_3.jpg';
import img_welfare_3_2x from '../../assets/images/Career/img_welfare_3@2x.jpg';
import img_welfare_4 from '../../assets/images/Career/img_welfare_4.jpg';
import img_welfare_4_2x from '../../assets/images/Career/img_welfare_4@2x.jpg';
import img_welfare_5 from '../../assets/images/Career/img_welfare_5.jpg';
import img_welfare_5_2x from '../../assets/images/Career/img_welfare_5@2x.jpg';
import img_welfare_6 from '../../assets/images/Career/img_welfare_6.jpg';
import img_welfare_6_2x from '../../assets/images/Career/img_welfare_6@2x.jpg';
import img_welfare_7 from '../../assets/images/Career/img_welfare_7.jpg';
import img_welfare_7_2x from '../../assets/images/Career/img_welfare_7@2x.jpg';
import img_welfare_8 from '../../assets/images/Career/img_welfare_8.jpg';
import img_welfare_8_2x from '../../assets/images/Career/img_welfare_8@2x.jpg';
import img_welfare_9 from '../../assets/images/Career/img_welfare_9.jpg';
import img_welfare_9_2x from '../../assets/images/Career/img_welfare_9@2x.jpg';
import img_welfare_10 from '../../assets/images/Career/img_welfare_10.jpg';
import img_welfare_10_2x from '../../assets/images/Career/img_welfare_10@2x.jpg';
import img_welfare_11 from '../../assets/images/Career/img_welfare_11.jpg';
import img_welfare_11_2x from '../../assets/images/Career/img_welfare_11@2x.jpg';

const WelfareData = {
  0: {
    title: <Translation>{(t) => t('HPG-56')}</Translation>,
    description:
      '회사의 이익은 직원들 없이는 발생하지 않습니다. 그에 대한 보답으로 순이익의 일부를 전부가 공유하는 문화를 가지고 있습니다.',
    img: img_welfare_1,
    img_2x: img_welfare_1_2x,
  },
  1: {
    title: <Translation>{(t) => t('HPG-57')}</Translation>,
    description:
      '급여에 더하여 외부에서 지급될 수 있는 보상은 최대한 챙겨드리고자 합니다. 아이포트폴리오인 개개인의 총 보상 최대화를 추구합니다.',
    img: img_welfare_2,
    img_2x: img_welfare_2_2x,
  },
  2: {
    title: <Translation>{(t) => t('HPG-58')}</Translation>,
    description:
      '휴식은 훌륭한 재충전의 기회입니다. 우리는 휴식의 중요성을 알기에 근로자 휴가지원사업에 참여하여 편의를 제공하고 있습니다.',
    img: img_welfare_3,
    img_2x: img_welfare_3_2x,
  },
  3: {
    title: <Translation>{(t) => t('HPG-59')}</Translation>,
    description:
      '생일, 명절, 경조사 등은 직원에게 발생하는 하나의 이벤트입니다. 아이포트폴리오인들의 이벤트에 여러가지 도움을 주고자 합니다.',
    img: img_welfare_4,
    img_2x: img_welfare_4_2x,
  },
  4: {
    title: <Translation>{(t) => t('HPG-60')}</Translation>,
    description:
      '학습하는 조직이 성장할 수 있습니다. 아이포트폴리오인들의 역량개발을 적극적으로 지원하며, 개인과 조직의 동반성장을 권장합니다.',
    img: img_welfare_5,
    img_2x: img_welfare_5_2x,
  },
  5: {
    title: <Translation>{(t) => t('HPG-61')}</Translation>,
    description:
      '주거가 안정되어야 마음이 편해지고, 생산성 역시 높아집니다. 따라서 1천만원 한도로 임대차보증금 무이자 대여를 진행하고 있습니다.',
    img: img_welfare_6,
    img_2x: img_welfare_6_2x,
  },
  6: {
    title: <Translation>{(t) => t('HPG-62')}</Translation>,
    description:
      '직원의 아픔은 회사의 아픔이기도 합니다. 아이포트폴리오인들이 아픔에 큰 부담을 느끼지 않도록, 단체 상해/실손보험으로 지원합니다.',
    img: img_welfare_7,
    img_2x: img_welfare_7_2x,
  },
  7: {
    title: <Translation>{(t) => t('HPG-63')}</Translation>,
    description:
      '업무를 하는데 필요한 도구가 있다면 최대한 제공합니다. 도구의 문제로 일을 할 수 없는 상황을 만들지 않습니다.',
    img: img_welfare_8,
    img_2x: img_welfare_8_2x,
  },
  8: {
    title: <Translation>{(t) => t('HPG-64')}</Translation>,
    description:
      '출근하고 싶은 회사가 좋은 회사입니다. 다양한 팀 빌딩 프로그램, 국내외 워크숍으로 출근하고 싶은 아이포트폴리오를 만들고자 합니다.',
    img: img_welfare_9,
    img_2x: img_welfare_9_2x,
  },
  9: {
    title: <Translation>{(t) => t('HPG-65')}</Translation>,
    description:
      '입이 심심할 틈을 주지 않습니다. 체중의 증가가 걱정되시는 분들은 내부 비공식적 건강관리 모임 가입을 추천드립니다.',
    img: img_welfare_10,
    img_2x: img_welfare_10_2x,
  },
  10: {
    title: <Translation>{(t) => t('HPG-66')}</Translation>,
    description:
      '건강한 몸에 건강한 마음이 깃든다고 믿습니다. 모든 아이포트폴리오인이 건강할 수 있도록 모션데스크를 지원하고 있습니다.',
    img: img_welfare_11,
    img_2x: img_welfare_11_2x,
  },
};

const ContainerStyled = styled(Container)`
  flex-direction: column;
  background-color: ${colors.gray1};

  padding-bottom: 6.4rem;

  @media ${responsive.conditionForTablet} {
    padding-bottom: 10.4rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: wrap;
  width: 100%;

  margin-top: 6.4rem;
`;

const BenefitItemButton = styled.button`
  width: fit-content;
  max-width: 100%;

  border: none;
  border-radius: 1.6rem;
  background-color: white;

  padding: 2.4rem;
  margin-right: 1.6rem;
  margin-bottom: 1.6rem;

  display: flex;
  justify-content: center;
  white-space: pre-line;
  word-break: keep-all;
  overflow-wrap: break-word;
  text-align: left;

  ${Typography('body', 1.4, 700)};

  ${(props) =>
    props.lang === 'ko' &&
    css`
      cursor: pointer;
      transition: all 0.1s linear;

      :hover {
        box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.12);
      }

      :focus {
        background-color: ${colors.gray1};
      }
    `};
`;

export default function BenefitSection() {
  const { language } = useI18next();
  const { t } = useTranslation();
  const [currentModal, setCurrentModal] = useState<{
    show: boolean;
    data: {
      key: null | number;
      title: string;
      description: string;
      img: any;
      img_2x: any;
    };
  }>({
    show: false,
    data: {
      key: null,
      title: '',
      description: '',
      img: null,
      img_2x: null,
    },
  });

  const handleOnClick = (key: number | null) => {
    if (key || key === 0) {
      setCurrentModal({
        show: true,
        data: {
          key,
          title: (WelfareData as any)[key].title,
          description: (WelfareData as any)[key].description,
          img: (WelfareData as any)[key].img,
          img_2x: (WelfareData as any)[key].img_2x,
        },
      });
    } else {
      setCurrentModal({
        ...currentModal,
        show: false,
      });
    }
  };

  const handleArrowClick = (key: number | null) => {
    if (key || key === 0) {
      setCurrentModal({
        show: true,
        data: {
          key,
          title: (WelfareData as any)[key].title,
          description: (WelfareData as any)[key].description,
          img: (WelfareData as any)[key].img,
          img_2x: (WelfareData as any)[key].img_2x,
        },
      });
    }
  };

  return (
    <ContainerStyled>
      <SubTitle
        data-sal="slide-up"
        data-sal-duration="1000"
        data-sal-easing="ease"
      >
        {t('HPG-55')}
      </SubTitle>
      <Wrapper
        data-sal="slide-up"
        data-sal-duration="1000"
        data-sal-easing="ease"
      >
        {Object.keys(WelfareData).map(function (key, index) {
          if (key === '1' && language === 'en') {
            return null;
          }
          return (
            <BenefitItemButton
              key={key}
              onClick={
                language === 'ko'
                  ? () => handleOnClick(parseInt(key, 10))
                  : () => {}
              }
              lang={language}
            >
              {(WelfareData as any)[key].title}
            </BenefitItemButton>
          );
        })}
      </Wrapper>
      {currentModal.show && (
        <Modal
          data={currentModal.data}
          onClick={(e) => handleOnClick(e)}
          onArrowClick={(e) => handleArrowClick(e)}
        />
      )}
    </ContainerStyled>
  );
}
