import React from 'react';
import styled from 'styled-components';

import Typography from '../../../layouts/Typography';
import Description from '../../../components/Description';

const FlexContainer = styled.div<{ gap?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ gap }) => gap ?? '1.6rem'};
`;

const Image = styled.img`
  width: 13rem;
  height: 13rem;
`;

const Title = styled.h4`
  text-align: center;
  margin: 0;
  ${Typography('subheading')};
  color: #10a6e9;
`;

const DescriptionStyled = styled(Description)`
  color: #868e96;
  text-align: center;
  margin: 0;
`;

interface Props {
  img: {
    src: string;
    srcSet?: string;
    alt?: string;
  };
  title: string;
  description: string;
}

export default function CoreTechnologyItem({ img, title, description }: Props) {
  return (
    <FlexContainer>
      <Image {...img} alt={img.alt ?? 'Core technology'} />

      <FlexContainer gap="0.8rem">
        <Title>{title}</Title>
        <DescriptionStyled>{description}</DescriptionStyled>
      </FlexContainer>
    </FlexContainer>
  );
}
