import React from "react";
import Logo from "../assets/logo.svg";
import styled from "styled-components";

export const LogoImage = styled.img`
  margin: 1.5rem 0;
  width: 180px;
`;

export default function ImageLogo() {
  return <LogoImage src={Logo} alt="Osc Logo" />;
}
