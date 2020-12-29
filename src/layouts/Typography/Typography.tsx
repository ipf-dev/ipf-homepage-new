import { css } from "styled-components";

type TextType = "hero" | "heading1" | "heading2" | "body" | "caption";

function Typography(type?: TextType, size?: number, weight?: number) {
  switch (type) {
    case "hero":
      return css`
        font-size: 5rem;
        font-weight: ${weight ? weight : 900};
        line-height: 1.08;
        @media only screen and (max-width: 1040px) {
          font-size: 4rem;
          font-weight: 700;
        }
      `;
    case "heading1":
      return css`
        font-size: 3.8rem;
        font-weight: ${weight ? weight : 700};
        line-height: 1.1;
      `;
    case "heading2":
      return css`
        font-size: 1.8rem;
        font-weight: ${weight ? weight : 700};
        line-height: 1.5;
      `;
    case "body":
      return css`
        font-size: ${size ? size : 1.6}rem;
        font-weight: ${weight ? weight : 400};
        line-height: 1.5;
      `;
    case "caption":
      return css`
        font-size: 1.2rem;
        font-weight: ${weight ? weight : 400};
        line-height: 1.5;
      `;
  }
}

export default Typography;
