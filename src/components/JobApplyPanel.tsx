import React from 'react';

import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import styled from 'styled-components';

import Typography from '../layouts/Typography';
import colors from '../layouts/colors';
import { responsive } from '../layouts/responsive';
import Button from './Button';

export default function JobApplyPanel() {
  const { t, i18n } = useTranslation();

  return (
    <Panel>
      <TextWrapper language={i18n.language}>
        <Trans i18nKey="TEXT-38" components={{ span: <span /> }} />
      </TextWrapper>
      <Button
        href="https://docs.google.com/forms/d/e/1FAIpQLSfU4YZdQn0UVueKMe0faxoAumdCkzQBfhuGXnyMXtPHn7xQTw/viewform"
        target="_blank"
        style={{ width: '100%', maxWidth: '29.6rem' }}
      >
        {t('TEXT-37')}
      </Button>
    </Panel>
  );
}

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;

  background-color: #ffeaea;

  z-index: 1;
  position: fixed;
  bottom: 0;
  left: 0;

  width: 100vw;
  height: auto;
  padding: 2.4rem;

  @media ${responsive.conditionForDesktop} {
    align-items: flex-start;

    position: sticky;
    top: 16rem;
    flex: 0 0 28.8rem;
    width: 28.8rem;
    height: min-content;
    padding: 2.4rem 1.6rem;
    border-radius: 0.8rem;
  }
`;

const TextWrapper = styled.p<{ language: string }>`
  word-break: keep-all;
  white-space: ${({ language }) => (language === 'ko' ? 'nowrap' : 'pre-line')};
  text-align: center;
  width: 100%;

  ${Typography('body', 1.4, 400)};

  > span {
    color: ${colors.primary};
    font-weight: 700;
  }

  @media ${responsive.conditionForDesktop} {
    white-space: pre-line;
  }
`;
