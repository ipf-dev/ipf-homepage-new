import styled from "styled-components";

import Typography from "../../layouts/Typography";

const NewsItemHeader = styled.p`
  ${Typography("body", 1.6, 700)};
  margin-bottom: 8px;
  word-break: keep-all;
`;

export default NewsItemHeader;
