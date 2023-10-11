import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useTranslation } from 'react-i18next';
import Button from './Button';
import { responsive } from '../layouts/responsive';

const FloatingButtonContainer = styled.div`
  position: fixed;
  right: 2rem;
  box-shadow: 0px 12px 32px 0px rgba(0, 0, 0, 0.16);

  @media ${responsive.conditionForTablet} {
    right: calc((100% - 70.4rem) / 2);
  }

  @media ${responsive.conditionForDesktop} {
    right: calc((100% - 96rem) / 2);
  }
`;

const FloatingButton = () => {
  const { t } = useTranslation();

  const [bottom, setBottom] = useState(2);

  const checkFooterHeight = () => {
    const footerElement = document.getElementById('footer');
    const footerScreenTop =
      (document.body?.scrollHeight || 4000) -
      (footerElement?.clientHeight || 0);
    const buttonBottom = window.scrollY + window.innerHeight;

    const fixedBottom = window.innerWidth <= 768 ? 2 : 4;

    if (buttonBottom >= footerScreenTop) {
      const calcBottom = (buttonBottom - footerScreenTop) / 10 + fixedBottom;
      return setBottom(calcBottom);
    }
    if (bottom !== fixedBottom) {
      return setBottom(fixedBottom);
    }
  };

  useEffect(() => {
    setBottom(window.innerWidth <= 768 ? 2 : 4);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', checkFooterHeight);
    return () => {
      window.removeEventListener('scroll', checkFooterHeight);
    };
  }, []);

  return (
    <FloatingButtonContainer style={{ bottom: `${bottom}rem` }}>
      <Button>{t('TEXT-16')}</Button>
    </FloatingButtonContainer>
  );
};

export default FloatingButton;
