import React from 'react';
import styled, { css } from 'styled-components';

const ButtonBlock = styled.button`
  display: flex;
  margin: 0 auto;
  border: none;
  color: #ffffff;
  justify-content: center;
  padding: 10px 24px;
  outline: none;
  cursor: pointer;

  ${props =>
    props.color &&
    css`
      background: ${props.color};
    `}

  &:disabled {
    cursor: unset;
    background: #dddddd;
  }
`;

function Button({ color, children, ...rest }) {
  return (
    <ButtonBlock color={color} {...rest}>
      {children}
    </ButtonBlock>
  );
}

export default Button;
