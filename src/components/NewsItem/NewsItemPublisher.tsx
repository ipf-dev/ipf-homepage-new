import styled from "styled-components";

import Typography from "../../layouts/Typography";
import colors from "../../layouts/colors";

const NewsItemPublisher = styled.p`
  ${Typography("caption", 1.2, 700)};
  color: ${colors.primary};
  text-align: left;
  margin-bottom: 8px;
  word-break: keep-all;
`;

export default NewsItemPublisher;
