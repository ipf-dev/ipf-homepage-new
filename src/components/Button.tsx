import React, { ReactEventHandler } from 'react';
import styled from 'styled-components';

import colors from '../layouts/colors';
import Typography from '../layouts/Typography';
import { high_resolution } from '../layouts/responsive';

import arrow_right from '../assets/images/arrow_right.png';
import arrow_right_2x from '../assets/images/arrow_right@2x.png';
import download from '../assets/images/download.png';
import download_2x from '../assets/images/download@2x.png';

type ThemeType = 'arrow' | 'download';

type Props = {
  href?: string;
  target?: string;
  icon?: ThemeType;
  children: any;
  onClick?: ReactEventHandler;
  style?: React.CSSProperties;
  className?: string;
  filename?: string;
};

const ButtonWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: fit-content;
  height: 53px;

  white-space: nowrap;
`;

const ButtonStyled = styled.button<{ hasIcon: boolean }>`
  background-color: ${colors.primary};
  &:hover {
    background-color: #f16a4f;

    ${({ hasIcon }) =>
      hasIcon &&
      `
    padding-right: 96px;

    :after {
      left: 56px;
      transition: left 0.1s ease-in-out;
    }    
    `}
  }

  &:active {
    background-color: #d7482b;
  }

  padding: ${({ hasIcon }) => (hasIcon ? '16px 80px 16px 24px' : '16px 24px')};
  width: 100%;
  height: 100%;
  transition: all 0.1s ease-in-out;

  color: white;
  border: none;
  border-radius: 8px;

  text-align: ${({ hasIcon }) => (hasIcon ? 'left' : 'center')};
  cursor: pointer;

  ${Typography('body', 1.4, 700)};
`;

const Icon = styled.span<{ icon: ThemeType }>`
  position: absolute;
  width: 16px;
  height: 16px;
  top: 17px;
  right: 26px;

  cursor: pointer;

  background-image: ${({ icon }) =>
    icon === 'arrow' ? `url(${arrow_right})` : `url(${download})`};
  background-repeat: no-repeat;
  background-size: cover;

  @media ${high_resolution} {
    background-image: ${({ icon }) =>
      icon === 'arrow' ? `url(${arrow_right_2x})` : `url(${download_2x})`};
  }
`;

function Button({
  icon,
  href,
  target,
  onClick,
  children,
  filename = '',
  ...styleProps
}: Props) {
  const hasIcon = !!icon;
  const isLink = typeof href === 'string';

  return (
    <ButtonWrapper {...styleProps}>
      <ButtonStyled
        {...(isLink && {
          as: 'a',
          href,
          target,
          download: filename,
        })}
        onClick={onClick}
        hasIcon={hasIcon}
      >
        {children}
      </ButtonStyled>

      {hasIcon && <Icon icon={icon} />}
    </ButtonWrapper>
  );
}

export default Button;
