import React from "react";
import styled, { css } from "styled-components";

import Typography from "../layouts/Typography";

import { high_resolution, responsive } from "../layouts/responsive";

import Description from "./Description";

import ic_close from "../assets/images/ic_close.png";
import ic_close_2x from "../assets/images/ic_close@2x.png";

import img_arrow_left_white from "../assets/images/Career/img_arrow_left_white.png";
import img_arrow_left_white_2x from "../assets/images/Career/img_arrow_left_white@2x.png";
import img_arrow_right_white from "../assets/images/Career/img_arrow_right_white.png";
import img_arrow_right_white_2x from "../assets/images/Career/img_arrow_right_white@2x.png";

type ModalContainerProps = {
  imgSource: any;
  imgSource_2x: any;
};

type ModalProps = {
  data: {
    key: number | null;
    title: string;
    description: string;
    img: any;
    img_2x: any;
  };
  onClick: (key: number | null) => void;
  onArrowClick: (key: number | null) => void;
};

const ModalBackground = styled.div`
  position: fixed;
  visibility: visible;
  transition: all 0.1s ease-in-out;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: black;
  opacity: 0.4;
  z-index: 100;
`;

const commonArrowStyle = css`
  width: 4.4rem;
  height: 4.4rem;
  position: relative;

  cursor: pointer;
  background-repeat: no-repeat;
  background-size: cover;

  @media ${responsive.conditionForTablet} {
    position: absolute;
    top: 50%;
  }
`;

const ArrowLeft = styled.span`
  ${commonArrowStyle};
  left: 0;
  margin-right: 0.8rem;

  background-image: url(${img_arrow_left_white});
  @media ${high_resolution} {
    background-image: url(${img_arrow_left_white_2x});
  }

  @media ${responsive.conditionForTablet} {
    margin-right: 2.4rem;
  }
`;

const ArrowRight = styled.span`
  ${commonArrowStyle};
  right: 0;
  margin-left: 0.8rem;

  background-image: url(${img_arrow_right_white});
  @media ${high_resolution} {
    background-image: url(${img_arrow_right_white_2x});
  }

  @media ${responsive.conditionForTablet} {
    margin-left: 2.4rem;
  }
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 50%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 200;

  padding: 0 calc((100% - 33rem) / 2);

  @media ${responsive.conditionForTablet} {
    width: 61.6rem;
    height: 36rem;
    padding: 0;
  }
`;

const OuterModal = styled.div`
  transition: all 0.1s ease-in-out;

  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 1.6rem;
  background-color: white;
  box-shadow: 0px 32px 48px rgba(0, 0, 0, 0.16);

  padding: 5.6rem 2.4rem 0 2.4rem;
  margin: 0 auto;
  border-radius: 1.6rem;

  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 100%;
  background-image: ${(props: ModalContainerProps) =>
    `url(${props.imgSource})`};
  @media ${high_resolution} {
    background-image: ${(props: ModalContainerProps) =>
      `url(${props.imgSource_2x})`};
  }

  @media ${responsive.conditionForTablet} {
    width: 48rem;
    height: 36rem;
    background-size: 48rem;
    padding: 6.4rem 4rem 0 4rem;
  }
`;

const InnerModal = styled.div`
  height: 100%;
`;

const Exit = styled.span`
  width: 2.4rem;
  height: 2.4rem;
  position: absolute;
  right: 2.4rem;
  top: 2.4rem;
  cursor: pointer;

  background-repeat: no-repeat;
  background-size: cover;

  background-image: url(${ic_close});
  @media ${high_resolution} {
    background-image: url(${ic_close_2x});
  }
`;

const ModalHeader = styled.h3`
  ${Typography("heading2")};
  text-align: left;
  margin-bottom: 1.6rem;
`;

const ArrowContainer = styled.div`
  display: flex;
  padding-top: 3.2rem;
  justify-content: center;
`;

export default function Modal({ data, onClick, onArrowClick }: ModalProps) {
  const handleLeftClick = (e: any) => {
    e.stopPropagation();

    if (data.key === 0) {
      onArrowClick(10);
    } else if (data.key !== null) onArrowClick(data.key - 1);
  };

  const handleRightClick = (e: any) => {
    e.stopPropagation();

    if (data.key === 10) {
      onArrowClick(0);
    } else if (data.key !== null) onArrowClick(data.key + 1);
  };

  const handleShow = (e: any) => {
    e.stopPropagation();

    onClick(null);
  };
  return (
    <>
      <ModalBackground onClick={handleShow}></ModalBackground>
      <ModalContainer>
        <OuterModal imgSource={data.img} imgSource_2x={data.img_2x}>
          <Exit onClick={handleShow} />
          <InnerModal>
            <ModalHeader>{data.title}</ModalHeader>
            <Description>{data.description}</Description>
          </InnerModal>
        </OuterModal>
        <ArrowContainer>
          <ArrowLeft onClick={handleLeftClick} />
          <ArrowRight onClick={handleRightClick} />
        </ArrowContainer>
      </ModalContainer>
    </>
  );
}
