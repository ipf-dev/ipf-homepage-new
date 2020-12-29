import styled from "styled-components";

import Typography from "../../layouts/Typography";
import colors from "../../layouts/colors";

const NewsItemDate = styled.p`
  ${Typography("caption", 1.2, 400)};
  color: ${colors.gray4};
  text-align: left;
  margin-top: 8px;
`;

export default NewsItemDate;
