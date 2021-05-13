import React, { ReactEventHandler } from 'react';
import styled, { css } from 'styled-components';

import colors from '../layouts/colors';
import Typography from '../layouts/Typography';
import { high_resolution, responsive } from '../layouts/responsive';

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
  filename?: string;
  footer?: boolean;
};

type ButtonWrapperProps = {
  footer?: boolean;
};

const ButtonWrapper = styled.div<ButtonWrapperProps>`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: fit-content;
  height: 53px;

  white-space: nowrap;

  &:hover a {
    background-color: #f16a4f;
    padding-right: 96px;

    :after {
      left: 56px;
      transition: left 0.1s ease-in-out;
    }
  }

  &:active a {
    background-color: #d7482b;
  }
  ${(props) =>
    props.footer &&
    css`
      @media ${responsive.conditionForTablet} {
        margin-left: 4rem;
        transition: margin-left 0.1s ease-in-out;
        &:hover {
          margin-left: 2.4rem;
        }
      }
    `}
`;

const ButtonComponent = styled.a`
  background-color: ${colors.primary};
  padding: 16px 80px 16px 24px;
  width: 100%;
  height: 100%;
  transition: all 0.1s ease-in-out;

  color: white;
  border: none;
  border-radius: 8px;

  text-align: left;
  cursor: pointer;

  ${Typography('body', 1.4, 700)};
`;

type IconProps = {
  icon: ThemeType;
};

const Icon = styled.span`
  position: absolute;
  width: 16px;
  height: 16px;
  top: 17px;
  right: 26px;

  cursor: pointer;

  background-image: ${(props: IconProps) =>
    props.icon === 'arrow' ? `url(${arrow_right})` : `url(${download})`};
  background-repeat: no-repeat;
  background-size: cover;

  @media ${high_resolution} {
    background-image: ${(props: IconProps) =>
      props.icon === 'arrow'
        ? `url(${arrow_right_2x})`
        : `url(${download_2x})`};
  }
`;

function Button({
  icon = 'arrow',
  href,
  target,
  onClick,
  children,
  style,
  filename = '',
  footer = false,
}: Props) {
  return (
    <ButtonWrapper style={style} footer={footer}>
      <ButtonComponent
        href={href}
        target={target}
        onClick={onClick}
        download={filename}
      >
        {children}
      </ButtonComponent>
      <Icon icon={icon} />
    </ButtonWrapper>
  );
}

export default Button;
