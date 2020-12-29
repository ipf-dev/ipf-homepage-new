import styled from "styled-components";

import { responsive } from "../../layouts/responsive";
import colors from "../../layouts/colors";

const NewsItemContainer = styled.a`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: fit-content;
  padding: 3.2rem;
  border-radius: 1.6rem;
  background-color: ${colors.gray1};
  cursor: pointer;

  transition: all 0.1s linear;

  :hover {
    box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.12);
    transition: box-shadow 0.3s ease-in-out;
  }

  :active {
    background-color: ${colors.gray1};
  }

  @media ${responsive.conditionForTablet} {
    width: 22.4rem;
  }

  @media ${responsive.conditionForDesktop} {
    width: 31.4rem;
  }
`;

export default NewsItemContainer;
