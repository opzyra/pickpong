import React from 'react';
import styled from 'styled-components';

const InputBlock = styled.input`
  padding: 8px;
  box-sizing: border-box;
  width: 100%;
`;

function Input({ children, ...rest }) {
  return <InputBlock type="text" {...rest}></InputBlock>;
}

export default Input;
