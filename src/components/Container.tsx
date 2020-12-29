import styled from "styled-components";
import { responsive } from "../layouts/responsive";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  flex-wrap: wrap;
  padding: 8rem calc((100% - 32rem) / 2);

  @media ${responsive.conditionForTablet} {
    flex-direction: row;
    padding: 8rem calc((100% - 70.4rem) / 2);
  }

  @media ${responsive.conditionForDesktop} {
    flex-direction: row;
    padding: 12rem calc((100% - 96rem) / 2);
  }
`;

export default Container;
