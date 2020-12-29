import styled from "styled-components";

import Typography from "../../layouts/Typography";

const NewsItemDescription = styled.p`
  ${Typography("body", 1.4)};
  margin: 8px 0;

  white-space: pre-line;
  word-break: keep-all;
`;

export default NewsItemDescription;
