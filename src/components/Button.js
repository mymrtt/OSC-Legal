import React from "react";
import styled from "styled-components";

export const MyButton = styled.button`
  color: #fff;
  background-color: #ff4136;
  border: 0;
  border-radius: 3px;
  font-weight: 600;
  font-family: Overpass, Bold;
  font-size: 0.9rem;
  box-shadow: 0 3px 6px #00000029;
  text-transform: uppercase;
`;

export default function Button(props) {
  return (
    <MyButton
      onClick={props.onClick}
      login={props.login}
      type={props.type}
      width={props.width}
      margin={props.margin}
      padding={props.padding}
    >
      {props.text}
    </MyButton>
  );
}
