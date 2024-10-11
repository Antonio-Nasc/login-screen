import styled from 'styled-components';

export const ButtonContainer = styled.button<{ disable: boolean }>`
  width: 100%;
  height: 42px;
  background-color: ${({ disable }) => (disable ? '#ccc' : '#81259D')};
  color: #FFF;
  border: 1px solid #81259D;
  border-radius: 21px;

  &:hover {
    opacity: ${({ disable }) => (disable ? '1' : '0.6')};
    cursor: ${({ disable }) => (disable ? 'not-allowed' : 'pointer')};
  }

  pointer-events: ${({ disable }) => (disable ? 'none' : 'auto')};
`;
