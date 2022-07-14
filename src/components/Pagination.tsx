import React, { ReactNode, useEffect, useState } from 'react';
import { Icon } from '@ipf-dev/web-spindle-design-system';
import {
  Container,
  IconButton,
  NumberButton,
  NumberContainer,
} from './Pagination.style';

/**
 *
 * @prop {number} currentPage - 현재 페이지로 1부터 시작함
 * @prop {number} totalPage - 총 페이지로 1 이하인 경우 null을 반환함
 * @prop {() => void} onPrevClick - 이전 버튼(<)이 클릭된 경우 실행되는 콜백 함수
 * @prop {() => void} onNextClick - 다음 버튼(>)이 클릭된 경우 실행되는 콜백 함수
 * @prop {(pageNum: number) => void} onPageNumClick - 페이지 버튼이 클릭된 경우 실행되는 콜백 함수
 * @returns
 */
export default function Pagination({
  currentPage,
  totalPage,
  // numberOfPageButtons = 9,
  onPrevClick,
  onNextClick,
  onPageNumClick,
}: {
  currentPage: number;
  totalPage: number;
  // numberOfPageButtons?: number;
  onPrevClick: () => void;
  onNextClick: () => void;
  onPageNumClick: (pageNum: number) => void;
}) {
  // 기존의 구현에선 페이지 버튼 개수에 대한 제한이 존재하지 않았습니다
  // 하지만 모바일에선 5개, 이외의 디바이스에선 9개로 제한이 걸리게 되어서 기존의 구현을 수정하지 않고 상태 및 이펙트를 추가해서 5, 9개로 제한을 걸었습니다
  // 나중에 이 상태 대신 주석 처리된 numberOfPageButtons prop를 사용하는 쪽으로 코드를 수정하고 이펙트의 리사이즈 핸들러를 수정해서 개수 제한을 제거할 수 있습니다
  const [numberOfPageButtons, setNumberOfPageButtons] = useState(9);

  useEffect(() => {
    const resizeHandler = () => {
      const width = window.innerWidth;

      if (width <= 480) {
        setNumberOfPageButtons(4);
      } else if (width <= 767) {
        setNumberOfPageButtons(5);
      } else {
        setNumberOfPageButtons(9);
      }
    };
    window.addEventListener('resize', resizeHandler);
    resizeHandler();

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  if (totalPage <= 1) {
    return null;
  }

  const numberButtons: ReactNode[] = [];
  if (totalPage <= numberOfPageButtons) {
    for (let i = 1; i <= totalPage; i++) {
      numberButtons.push(
        <NumberButton
          key={i}
          isSelected={i === currentPage}
          onClick={() => onPageNumClick(i)}
        >
          {i}
        </NumberButton>,
      );
    }
  } else {
    // 최대한 좌우 대칭되게 렌더링함

    // 첫 페이지 버튼 숫자로 최소값은 1
    let startIndex = currentPage - Math.floor(numberOfPageButtons / 2);
    if (startIndex < 1) {
      startIndex = 1;
    }

    // 마지막 페이지 버튼 숫자로 최대값은 totalPage
    let endIndex = currentPage + Math.floor(numberOfPageButtons / 2);
    if (totalPage < endIndex) {
      endIndex = totalPage;
    }
    if (endIndex !== totalPage && numberOfPageButtons % 2 === 0) {
      endIndex -= 1;
    }

    for (let i = startIndex; i <= endIndex; i++) {
      numberButtons.push(
        <NumberButton
          key={i}
          isSelected={i === currentPage}
          onClick={() => onPageNumClick(i)}
        >
          {i}
        </NumberButton>,
      );
    }

    // 페이지 버튼 개수가 모자란 경우 더 채워줘야 함
    if (numberButtons.length < numberOfPageButtons) {
      if (startIndex === 1) {
        // 더 이상 왼쪽에 추가할 수 없는 경우, 오른쪽에 추가
        let i = endIndex + 1;
        while (numberButtons.length !== numberOfPageButtons) {
          const pageNum = i;
          numberButtons.push(
            <NumberButton
              key={pageNum}
              isSelected={pageNum === currentPage}
              onClick={() => onPageNumClick(pageNum)}
            >
              {pageNum}
            </NumberButton>,
          );
          i += 1;
        }
      } else if (endIndex === totalPage) {
        // 더 이상 오른쪽에 추가할 수 없는 경우, 왼쪽에 추가
        let i = startIndex - 1;
        while (numberButtons.length !== numberOfPageButtons) {
          const pageNum = i;
          numberButtons.unshift(
            <NumberButton
              key={pageNum}
              isSelected={pageNum === currentPage}
              onClick={() => onPageNumClick(pageNum)}
            >
              {pageNum}
            </NumberButton>,
          );
          i -= 1;
        }
      }
    }
  }

  return (
    <Container>
      <IconButton
        type="button"
        disabled={currentPage === 1}
        onClick={onPrevClick}
        title="prev"
      >
        <Icon.Arrow
          styleType="chevron"
          direction="left"
          disabled={currentPage === 1}
        />
      </IconButton>

      <NumberContainer>
        {numberButtons.map((element) => element)}
      </NumberContainer>

      <IconButton
        type="button"
        disabled={currentPage === totalPage}
        onClick={onNextClick}
        title="next"
      >
        <Icon.Arrow
          styleType="chevron"
          direction="right"
          disabled={currentPage === totalPage}
        />
      </IconButton>
    </Container>
  );
}
