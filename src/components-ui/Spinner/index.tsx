/** @format */

import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const StyledSpinnerContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
});

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled.div`
  border: 5px solid #fff;
  border-top: 5px solid #61dafb;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
`;

export const UISpinner = () => (
  <StyledSpinnerContainer>
    <StyledSpinner />
  </StyledSpinnerContainer>
);
