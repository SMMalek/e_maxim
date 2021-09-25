import React from 'react'
import styled from "styled-components";

const ButtonWrapper = styled.button`
  border: none;
  outline: none;
  color: #323232;
  padding: ${({ padd }) => padd ? padd : "7px 1em"};
  font-size: ${({ size }) => size ? size + "px" : "18px"};
  font-weight: 400;
  border-radius: 3px;
  background-color: #daafd2;
  align-self: center;
  cursor: pointer;
  transition: all 500ms ease-in-out;

  &:hover {
    background-color: #d076c0;
  }

  &:focus {
    outline: none;
  }
`

export function Button(props){
    const {size, padd} = props;
    return <ButtonWrapper size={size} className={props.className} padd={padd}>{props.children}</ButtonWrapper>
}
