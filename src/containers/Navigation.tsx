import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby-plugin-react-i18next';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

import colors from '../layouts/colors';
import Typography from '../layouts/Typography';

import { responsive, high_resolution } from '../layouts/responsive';

import HamburgerMenu from '../components/HamburgerMenu';
import LanguageSwitch from '../components/LanguageSwitch';

import ipf_red from '../assets/images/ipf_red.png';
import ipf_red_2x from '../assets/images/ipf_red@2x.png';
import img_header_hamburger from '../assets/images/img_header_hamburger.png';
import img_header_hamburger_2x from '../assets/images/img_header_hamburger@2x.png';
import img_header_hamburger_black from '../assets/images/img_header_hamburger_black.png';
import img_header_hamburger_black_2x from '../assets/images/img_header_hamburger_black@2x.png';
import ic_close from '../assets/images/ic_close.png';
import ic_close_2x from '../assets/images/ic_close@2x.png';

type Props = {
  mode?: 'light' | 'dark';
};

type ComponentProps = {
  linkcolor: string;
  backgroundcolor: string;
  open: boolean;
};

type HamburgerProps = {
  backgroundcolor: string;
  open: boolean;
};

const HeaderComponent = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0 calc((100% - 32rem) / 2);

  position: fixed;
  background-color: ${(props: ComponentProps) =>
    props.open ? 'white' : props.backgroundcolor};

  z-index: 99;

  width: 100%;
  height: 7.2rem;

  ${Typography('body', 1.6, 400)};
  line-height: 2.5;

  transition: background-color 0.3s ease-in-out;

  @media ${responsive.conditionForTablet} {
    padding: 0 calc((100% - 70.4rem) / 2);
    box-shadow: none;
  }

  @media ${responsive.conditionForDesktop} {
    padding: 0 calc((100% - 96rem) / 2);
    box-shadow: none;
  }
`;

const HamburgerButton = styled.button`
  display: block;
  width: 2.4rem;
  height: 7.2rem;
  line-height: 7.2rem;
  margin-left: auto;

  outline: none;
  border: none;
  background-color: transparent;
  background-image: url(${img_header_hamburger});

  background-image: ${(props: HamburgerProps) =>
    props.open && `url(${ic_close})`};

  background-image: ${(props: HamburgerProps) =>
    !props.open &&
    props.backgroundcolor === 'white' &&
    `url(${img_header_hamburger_black})`};

  @media ${high_resolution} {
    background-image: ${(props: HamburgerProps) =>
      props.open && `url(${ic_close_2x})`};

    background-image: ${(props: HamburgerProps) =>
      !props.open &&
      props.backgroundcolor === colors.primary &&
      `url(${img_header_hamburger_2x})`};

    background-image: ${(props: HamburgerProps) =>
      !props.open &&
      props.backgroundcolor === colors.black &&
      `url(${img_header_hamburger_2x})`};

    background-image: ${(props: HamburgerProps) =>
      !props.open &&
      props.backgroundcolor === 'white' &&
      `url(${img_header_hamburger_black_2x})`};
  }

  background-size: 2.4rem 2.4rem;
  background-position: center;
  background-repeat: no-repeat;

  cursor: pointer;

  @media ${responsive.conditionForTablet} {
    display: none;
  }
`;

const Logo = styled.span`
  position: fixed;
  width: 12.8rem;
  height: 5.5rem;
  background-size: cover;
  background-repeat: no-repeat;

  background-image: url(${ipf_red});

  @media ${high_resolution} {
    background-image: url(${ipf_red_2x});
  }
`;

const NavItems = styled.ul`
  display: none;
  line-height: 7.2rem;

  @media ${responsive.conditionForTablet} {
    display: flex;
    margin-left: auto;
  }
`;

type LinkProps = {
  linkcolor: string;
  backgroundcolor: string;
};

const LinkActiveStyle = {
  color: colors.primary,
  fontWeight: 700,
};

const LinkStyled = styled(Link)`
  font-family: 'Roboto', sans-serif;
  ${Typography('body', 1.6, 400)};
  transition: 0.1s linear;
  color: ${(props: LinkProps) =>
    props.linkcolor === colors.black ? colors.black : 'white'};

  margin-right: 4rem;

  :hover {
    color: ${(props: LinkProps) =>
      props.backgroundcolor === colors.primary ? 'white' : colors.primary};
  }

  :active {
    color: ${(props: LinkProps) =>
      props.backgroundcolor === colors.primary ? 'white' : colors.primary};
  }
`;

const changeNavColorWithScroll = (
  mode: string,
  breakpoints: { mobile: boolean; tablet: boolean; desktop: boolean },
  document: Document | null,
) => {
  if (document) {
    const scrolled = document?.scrollingElement?.scrollTop || 0;
    if (mode === 'dark') {
      if (
        (scrolled >= 255 && !breakpoints.mobile) ||
        (breakpoints.mobile && scrolled >= 152)
      ) {
        return { linkcolor: colors.black, backgroundcolor: 'white' };
      }
      return { linkcolor: 'white', backgroundcolor: colors.black };
    } else if (
      (scrolled >= 642 &&
        (breakpoints.desktop || document.body.clientWidth >= 1040)) ||
      (scrolled >= 700 &&
        (breakpoints.tablet || document.body.clientWidth >= 768)) ||
      ((breakpoints.mobile || document.body.clientWidth < 768) &&
        scrolled >= 575)
    ) {
      return { linkcolor: colors.black, backgroundcolor: 'white' };
    }
  }
  return {
    linkcolor: 'white',
    backgroundcolor: colors.primary,
  };
};

function Navigation({ mode = 'light' }: Props) {
  const breakpoints = useBreakpoint();
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [headerColor, setHeaderColor] = useState<{
    linkcolor: string;
    backgroundcolor: string;
  }>(
    changeNavColorWithScroll(
      mode,
      breakpoints,
      typeof window !== `undefined` ? window.document : null,
    ),
  );

  const handleScroll = () => {
    setHeaderColor(
      changeNavColorWithScroll(
        mode,
        breakpoints,
        typeof window !== `undefined` ? window.document : null,
      ),
    );
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    setIsOpened(!isOpened);
  };

  return (
    <>
      {breakpoints.mobile && (
        <HamburgerMenu open={isOpened} onClick={handleClick} />
      )}
      <HeaderComponent
        open={isOpened}
        linkcolor={headerColor.linkcolor}
        backgroundcolor={headerColor.backgroundcolor}
      >
        <Link to="/">
          <Logo />
        </Link>
        <HamburgerButton
          backgroundcolor={headerColor.backgroundcolor}
          open={isOpened}
          onClick={handleClick}
        />
        <NavItems>
          <li key="about">
            <LinkStyled
              linkcolor={headerColor.linkcolor}
              backgroundcolor={headerColor.backgroundcolor}
              activeStyle={LinkActiveStyle}
              to="/about/"
            >
              About
            </LinkStyled>
          </li>
          <li key="product">
            <LinkStyled
              linkcolor={headerColor.linkcolor}
              backgroundcolor={headerColor.backgroundcolor}
              activeStyle={LinkActiveStyle}
              to="/product/"
            >
              Product
            </LinkStyled>
          </li>
          <li key="news">
            <LinkStyled
              linkcolor={headerColor.linkcolor}
              backgroundcolor={headerColor.backgroundcolor}
              activeStyle={LinkActiveStyle}
              to="/news/"
            >
              News
            </LinkStyled>
          </li>
          <li key="career">
            <LinkStyled
              linkcolor={headerColor.linkcolor}
              backgroundcolor={headerColor.backgroundcolor}
              activeStyle={LinkActiveStyle}
              to="/career/"
            >
              Careers
            </LinkStyled>
          </li>
          <li key="contact">
            <LinkStyled
              linkcolor={headerColor.linkcolor}
              backgroundcolor={headerColor.backgroundcolor}
              activeStyle={LinkActiveStyle}
              to="/contact/"
            >
              Contact
            </LinkStyled>
          </li>
        </NavItems>
        {!breakpoints.mobile && (
          <LanguageSwitch backgroundColor={headerColor.backgroundcolor} />
        )}
      </HeaderComponent>
    </>
  );
}

export default Navigation;
