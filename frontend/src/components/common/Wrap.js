import React from 'react';
import styled from 'styled-components';

const WrapBlock = styled.div`
  width: 1200px;
  margin: 0 auto;

  ${({ theme }) => theme.mobile`
    width: 100%;
  `};
`;

function Wrap({ children }) {
  return <WrapBlock>{children}</WrapBlock>;
}

export default Wrap;
