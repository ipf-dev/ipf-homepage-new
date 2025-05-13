import React from 'react';
import styled from 'styled-components';

import { responsive, high_resolution } from '../layouts/responsive';
import colors from '../layouts/colors';

import img_home_career from '../assets/images/Home/img_home_career.jpg';
import img_home_career_2x from '../assets/images/Home/img_home_career@2x.jpg';

const Photo = styled.div`
  width: 33.6rem;
  height: 22.9rem;
  border-radius: 0.8rem;

  grid-row: 1;

  background-repeat: no-repeat;
  background-size: 100.8rem 114.5rem;

  background-image: url(${img_home_career});
  @media ${high_resolution} {
    background-image: url(${img_home_career_2x});
  }
  background-position: ${({ row, col }: { row: number; col: number }) =>
    `${col * -33.6}rem ${row * -22.9}rem`};
`;

const Carousel = styled.div`
  overflow: hidden;
  position: relative;
  padding: 4rem 0 6.4rem 0;
  background-color: ${colors.black};

  @media ${responsive.conditionForDesktop} {
    padding: 6.4rem 0 12rem 0;
  }
`;

const PhotoList = styled.ul`
  display: flex;
  height: 100%;
`;

const PhotoItem = styled.li`
  width: 35.2rem;
  margin: 0 0.8rem;

  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @keyframes translateinfinite {
    100% {
      transform: translateX(calc(-35.2rem * 10));
    }
  }
  animation: translateinfinite 40s linear infinite;
`;

function PhotoItems() {
  const photoItems = [];

  for (let i = 0; i < 2; i++) {
    for (let col = 0; col < 2; col++) {
      for (let row = 0; row < 5; row++) {
        photoItems.push(
          <PhotoItem key={`career-photo-${i}${row}${col}`}>
            <Photo row={row} col={col} />
          </PhotoItem>,
        );
        if (row == 4 && col == 1) {
          break;
        }
      }
    }
  }

  return <>{photoItems}</>;
}

export default function PhotoCarousel() {
  return (
    <Carousel>
      <PhotoList>
        <PhotoItems />
      </PhotoList>
    </Carousel>
  );
}
