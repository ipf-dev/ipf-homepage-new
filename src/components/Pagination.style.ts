import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const NumberContainer = styled(Container)`
  gap: 0.8rem;
  margin: 0 1.6rem;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 4rem;
  height: 4rem;
  border-radius: 0.4rem;
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

  color: ${({ theme }) => theme.colorTokens.text.primary};
  background-color: ${({ theme }) => theme.colorTokens.background.base};

  :hover {
    background-color: ${({ theme }) => theme.colorTokens.hierarchy.h5};
  }
  :active {
    background-color: ${({ theme }) => theme.colorTokens.hierarchy.h4};
  }
  :disabled {
    background-color: ${({ theme }) => theme.colorTokens.background.base};
    color: ${({ theme }) => theme.colorTokens.text.disabled};
  }
`;

export const IconButton = Button;

export const NumberButton = styled(Button)<{ isSelected: boolean }>`
  background-color: ${({ theme, isSelected }) =>
    isSelected
      ? `${theme.colorTokens.accent.default} !important`
      : theme.colorTokens.background.base};
  color: ${({ theme, isSelected }) =>
    isSelected
      ? `${theme.colorTokens.accent.on} !important`
      : theme.colorTokens.text.primary};
`;
