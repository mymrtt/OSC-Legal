import React from "react";
import styled from "styled-components";

export const MyButton = styled.button`
  width: 87%;
  height: 50px;
  text-transform: uppercase;
  color: #fff;
  background-color: #ff4136;
  border: 0;
  font-weight: 600;
  margin: 1.5rem 0;
  font-family: Overpass, Bold;
  box-shadow: 0 3px 6px #00000029;
  border-radius: 3px;
`;

export default function Button(props) {
  return (
    <MyButton onClick={props.onClick} type={props.type}>
      {props.text}
    </MyButton>
  );
}
