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

  ${props =>
    props.inline &&
    css`
      display: inline-flex;
      & + & {
        margin-left: 16px;
      }
    `}

  &:disabled {
    cursor: unset;
    background: #dddddd;
  }
`;

function Button({ inline, color, children, ...rest }) {
  return (
    <ButtonBlock inline={inline} color={color} {...rest}>
      {children}
    </ButtonBlock>
  );
}

export default Button;
