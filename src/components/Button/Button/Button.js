import React from "react";
import styled from "styled-components";
const Button = ({ className, type, onClick, children }) => {
  return (
    <ButtonWrapper className={className} type={type} onClick={onClick}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;

const ButtonWrapper = styled.button`
  display: block;
  margin: 10px auto;
  border: 1px solid #fff;
  outline: 0;
  background-color: black;
  padding: 10px;
  font-size: 15px;
  cursor: pointer;
  color: white;
  font-weight: 600;
`;
