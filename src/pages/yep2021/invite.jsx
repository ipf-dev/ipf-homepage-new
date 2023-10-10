/* eslint-disable no-irregular-whitespace */
/* eslint-disable jsx-a11y/accessible-emoji */
import { graphql } from 'gatsby';
import React, { useEffect, useRef, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

import Button from '../../components/Button';
import Typography from '../../layouts/Typography';
import colors from '../../layouts/colors';

import NotionStyle from './Notions.style';

import first from './images/first.png';
import forth from './images/forth.png';
import id_card from './images/id_card.png';
import second from './images/second.png';
import third from './images/third.png';
import titleimg from './images/titleimg.png';

const unfoldIn = keyframes`
  0% { transform: scaleY(0.005) scaleX(0); }
  50% { transform: scaleY(0.005) scaleX(1); }
  100% { transform: scaleY(1) scaleX(1); }
`;

const unfoldOut = keyframes`
  0% {
      transform: scaleY(1) scaleX(1);
    }
    50% {
      transform: scaleY(0.005) scaleX(1);
    }
    100% {
      transform: scaleY(0.005) scaleX(0);
    }
`;

const zoomIn = keyframes`
  0% {
    transform:scale(0);
  }
  100% {
    transform:scale(1);
  }
`;

const zoomOut = keyframes` 
  0% {
    transform:scale(1);
  }
  100% {
    transform:scale(0);
  }
`;

const shake = keyframes` 
    0% { margin-left: 0rem; }
  25% { margin-left: 0.5rem; }
  75% { margin-left: -0.5rem; }
  100% { margin-left: 0rem; }
`;

const ModalContainer = styled.div`
  position: fixed;
  display: flex;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  transform: scale(0);
  z-index: 1;

  transform: scaleY(0.01) scaleX(0);
  animation: ${unfoldIn} 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;

  ${({ isModal }) =>
    !isModal &&
    css`
      transform: scale(1);
      animation: ${unfoldOut} 1s 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)
        forwards;
    `}
`;

const ModalBackground = styled.div`
  background: rgba(0, 0, 0, 0.8);
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  background: white;
  min-width: 35rem;
  padding: 4.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1.6rem;

  ${Typography('body', 1.8, 700)};
  color: ${colors.black};

  transform: scale(0);
  animation: ${zoomIn} 0.5s 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;

  ${({ isModal }) =>
    !isModal &&
    css`
      animation: ${zoomOut} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
    `}
`;

const Body = styled.p`
  width: 100%;
  ${Typography('body')};
  color: ${({ color }) => color || colors.black};

  margin-top: 1.6rem;

  white-space: pre-line;

  text-align: ${({ textAlign }) =>
    textAlign === 'center' ? 'center' : 'left'};
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;

  ${({ isValid }) =>
    isValid &&
    css`
      animation: ${shake} 0.2s ease-in-out 0s 2;
      box-shadow: 0 0 0.5em red;
    `}
`;

const Yep2021 = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isModal, setIsModal] = useState(true);

  const [isValid, setIsValid] = useState(false);

  const inputElement = useRef(null);

  const onClickButton = () => {
    const password = inputElement.current.value;

    if (password === '20211223') {
      setIsModal(false);
      return;
    }
    console.log(password);

    setIsValid(true);
  };

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading && '로딩중...'}
      {!isLoading && (
        <>
          <ModalContainer isModal={isModal}>
            <ModalBackground>
              <Modal isModal={isModal}>
                <Body textAlign="center" style={{ fontWeight: 700 }}>
                  초대장의 비밀번호는?
                </Body>
                <Body textAlign="center">힌트 : YEP2021 D-DAY (숫자8자리)</Body>
                <Input
                  type="number"
                  placeholder="비밀번호를 입력해주세요"
                  ref={inputElement}
                  onChange={() => setIsValid(false)}
                  isValid={isValid}
                />
                <Button onClick={onClickButton} icon="arrow">
                  비밀번호 확인
                </Button>
              </Modal>
            </ModalBackground>
          </ModalContainer>
        </>
      )}
      {!isModal && (
        <>
          <NotionStyle />
          <article
            id="6c3587c5-9d8c-4ca4-a398-bf002e07878f"
            className="page sans"
          >
            <div className="page-body">
              <figure
                id="c83bcdef-8114-43c9-8179-9e6ed45da076"
                className="image"
              >
                <a href={titleimg}>
                  <img style={{ width: '1324px' }} src={titleimg} />
                </a>
              </figure>
              <h1 id="87f55d7f-030c-45cf-b247-8475f2424148" className="">
                <strong>
                  🎉 🌈 ⭐️ 🎪 💖 🔥
                  <br /> WELCOME TO YEAR END PARTY 2021
                </strong>
              </h1>
              <p id="cca58ad5-a932-427e-a2c9-fad520ca3425" className="">
                <strong>
                  부제: 한 해 동안 열심히 수고한 당신, 신나게 즐겨라~!
                </strong>
              </p>
              <br />
              <br />
              <hr id="6631aaed-b4fc-45b4-87bc-02fb254115e7" />
              <br />
              <h2 id="382cfc56-1fe7-4789-80c3-76dc59c84f70" className="">
                안녕하세요! <strong>위원장 장경화</strong>
                입니다. (a.k.a. 꽁시기🦹🏻‍♀️)
              </h2>
              <p id="5f28ecb1-495c-40f0-ab6f-e0a471ae0381" className="">
                사회적 거리 두기가 개편되었음에도 불구하고 계속해서 확진자가
                증가하는 추세로 인해, 이번 YEP도 작년과 마찬가지로 안전하게
                온라인으로 진행될 예정입니다.
              </p>
              <br />
              <figure
                id="a6a150ba-7c7a-48ab-b70e-293d21c35e9c"
                className="image"
              >
                <a href={first}>
                  <img style={{ width: '858px' }} src={first} />
                </a>
              </figure>
              <h2 id="b5691ffe-876d-4ef5-9366-63b8efb20532" className="">
                하.지.만 아쉬워하지 마세요~!
              </h2>
              <p id="bbf11231-5043-4b58-a9a4-838eb1f90da2" className="">
                모두가 즐겁게 참여할 수 있도록 위원회가 열심히 알차게
                준비중입니다. 후후.
              </p>
              <br />
              <br />
              <hr id="4ad39cb1-9bc3-4f1c-b336-60105f403f52" />
              <br />
              <h2 id="dd9c5fcd-019e-4165-8cd8-8fd5401646bf" className="">
                더욱 알찬 <strong>YEP을 위해 준비한 숙제가 있어요!</strong>
              </h2>
              <figure
                className="block-color-gray_background callout"
                style={{ whiteSpace: 'pre-wrap', display: 'flex' }}
                id="7bba4272-2e8e-4755-a0e3-ea8dd9af653f"
              >
                <div style={{ fontSize: '1.5em' }}>
                  <span className="icon">👉🏻</span>
                </div>
                <div style={{ width: '100%' }}>
                  아래 구글 폼으로{' '}
                  <mark className="highlight-orange">
                    <strong>11월 30일 화요일 오후 6시 30분까지</strong>
                  </mark>{' '}
                  제출해 주세요!
                  <br />
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLScNzIUAu_DxNvnPa0jIiOnsT1ZeCG5O-RMNlf_TsPFRDyIosA/viewform">
                    <strong>숙제 제출하기</strong>
                  </a>
                </div>
              </figure>
              <h3 id="38147b9c-ac57-4404-bbe9-7c19f7d08782" className="">
                1️⃣ 자신의 얼<strong>굴이 잘 보이는 어린 시절 사진 1장</strong>
              </h3>
              <ul
                id="5a797f48-2fe9-4b6f-a342-a9b20b5cdf09"
                className="bulleted-list"
              >
                <li style={{ listStyleType: 'disc' }}>
                  반드시 얼굴이 잘 보여야 해요.{' '}
                </li>
              </ul>
              <h3 id="3f69e745-014e-4811-83f0-6d1fca178c79" className="">
                2️⃣ 
                <strong>
                  비밀스럽고, 웃긴, 황당한! 자신과 타인의 TMI 대잔치
                </strong>
              </h3>
              <ul
                id="4f41c82f-b3f0-4738-9e92-53b2344b873b"
                className="bulleted-list"
              >
                <li style={{ listStyleType: 'disc' }}>
                  개수는 많으면 많을수록 좋아요. 익명보장 걱정마세요~!
                </li>
              </ul>
              <ul
                id="62ee07d9-6b5a-4c0d-ab5f-11dee50a6f4c"
                className="bulleted-list"
              >
                <li style={{ listStyleType: 'disc' }}>
                  꼭 같은 팀이 아니여도 좋아요. 아포폴 내 누구든 OK~!
                </li>
              </ul>
              <ul
                id="2dce27cb-15b6-4c25-af8a-e7f979256eea"
                className="bulleted-list"
              >
                <li style={{ listStyleType: 'disc' }}>
                  <strong>자신의 TMI 2개, 타인의 TMI 1개를 필수</strong>로
                  보내주세요!
                </li>
              </ul>
              <p id="4a094bce-36ef-44a1-bdad-755d587366d0" className="">
                → <strong>TMI 예시</strong>
                <div className="indented">
                  <p id="4c94e24d-158e-419f-8f38-8cf6c883592c" className="">
                    <mark className="highlight-gray">
                      리딩앤 사업팀 박지호 팀장님은 이나영 &amp; 원빈보다 훨씬
                      이전에 시골에서 야외 결혼식을 진행하셨다고 해요. 그래서
                      이나영 &amp; 원빈이 자신을 따라했다며 분해하셨다네요~!
                      🗯🤭 (충격실화)
                    </mark>
                  </p>
                </div>
              </p>
              <br />
              <br />
              <br />
              <hr id="72417b7b-47d1-470e-bae8-f800a599bc73" />
              <p id="6e68f8f9-95e2-4ffc-b357-0ab58f522d97" className="">
                <strong>
                  (+ 사장님, 부사장님 포함) YEP에서는 모두 평등합니다 후후후
                </strong>
              </p>
              <figure
                id="00fdc83d-da99-49cc-ab7e-3e4544975dec"
                className="image"
              >
                <a href={second}>
                  <img style={{ width: '840px' }} src={second} />
                </a>
              </figure>
              <br />
              <br />
              <hr id="d53e53d0-405a-47d2-88d1-4860dd7ef596" />
              <br />
              <h2 id="4f67f6ed-41f4-48f5-8bf1-5893772368e5" className="">
                하나{' '}
                <strong>더! 사원증 제작을 위한 사진 촬영 미션이 있어요.</strong>
              </h2>
              <figure
                id="4c0fcde6-67a0-41a6-99b3-8c70ee88262f"
                className="image"
              >
                <a href={third}>
                  <img style={{ width: '672px' }} src={third} />
                </a>
                <figcaption> 묻고 따블로 가~!</figcaption>
              </figure>
              <h3 id="e3d3158d-7090-409d-87b8-8d68747a8f55" className="">
                1️⃣{' '}
                <a href="https://docs.google.com/spreadsheets/d/1DOWpC9Mtn7vql_Uq7bmkE4UE2c6XghNZZaTqtgwZRh8/edit#gid=0">
                  구글 시트
                </a>
                에서 원하는 촬영 일정 기입
              </h3>
              <ul
                id="ec2e2280-7081-4942-98da-c85386941f5c"
                className="bulleted-list"
              >
                <li style={{ listStyleType: 'disc' }}>
                  <strong>11월 22 or 24일</strong> 중 선택해 주세요. 물론 그날은
                  필수로 출근을 해주셔야겠죠?{' '}
                </li>
              </ul>
              <ul
                id="d89769b9-4d7d-478b-9e47-ecb1646ee584"
                className="bulleted-list"
              >
                <li style={{ listStyleType: 'disc' }}>
                  사진 촬영 및 보정을 흔쾌히 수락해 주신{' '}
                  <strong>홍진(아포폴 공식 촬영기사)</strong>
                  님께 감사의 인사를 전합니다. 💐
                </li>
              </ul>
              <h3 id="22616cde-49a9-45e3-bc70-b844e9ff50ed" className="">
                2️⃣ 공지 스레드에서 사원증 시안 투표
              </h3>
              <ul
                id="fca6374f-33aa-46b1-bf74-6a5d0f4fa2a4"
                className="bulleted-list"
              >
                <li style={{ listStyleType: 'disc' }}>중복 투표는 안 돼요~!</li>
              </ul>
              <ul
                id="e33ebd2a-f7f6-4bb1-9736-b82f4f9769be"
                className="bulleted-list"
              >
                <li style={{ listStyleType: 'disc' }}>
                  <span style={{ borderBottom: '0.05em solid' }}>
                    <strong>11월 24일까지 숫자 이모지로</strong>
                  </span>{' '}
                  원하는 시안을 골라 투표해 주세요.
                  <figure
                    id="3aad2e4a-0512-4bed-a390-b4cf9ddd08ba"
                    className="image"
                  >
                    <a href={id_card}>
                      <img style={{ width: '2442px' }} src={id_card} />
                    </a>
                  </figure>
                </li>
              </ul>
              <br />
              <br />
              <br />
              <hr id="42f2ff5b-a596-4052-8ddc-132042092bb4" />
              <br />
              <h1 id="67f7046f-561c-4288-a4e8-a837ddd73503" className="">
                👋🏻 👋🏻 👋🏻 그럼 다음 공지가 있을 때까지 모두 안녕~!~!
              </h1>
              <figure
                id="1346ed60-13eb-4440-993e-2efc78c73a9b"
                className="image"
              >
                <a href={forth}>
                  <img style={{ width: '672px' }} src={forth} />
                </a>
              </figure>
            </div>
          </article>
        </>
      )}
    </>
  );
};

export default Yep2021;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
