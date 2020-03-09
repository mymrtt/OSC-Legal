import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffcfcd;
`;

export const Form = styled.form`
  min-width: 30%;
  min-height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 2rem;
  margin: 1rem 0;

  img {
    width: 150px;
    margin: 0.5rem 0;
  }

  input {
    border: ${props => props.withError && "1px solid red"};
  }

  @media (max-width: 375px) {
    padding: 1rem;
  }

  span {
    width: 80%;
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 375px) {
    span {
      width: 100%;
    }
    p {
      text-align: center;
    }
  }

  p {
    width: 80%;
    font-size: 11px;
    margin: 0.5rem 0;

    strong {
      color: #85144b;
      cursor: pointer;
      text-decoration: underline;
      margin: 0 0.3rem;
    }
  }
`;

export const Label = styled.label`
  width: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 375px) {
    width: 100%;
  }
  p {
    align-self: flex-start;
    text-transform: uppercase;
    color: #85144b;
    font-size: 13px;
    margin: 0.5rem 0;
  }
`;

export const Error = styled.h4`
  font-size: 11px;
  color: red;
  text-align: left;
  font-weight: normal;
  margin: 0.2rem 0;
`;

export const Overlay = styled.section`
  min-width: 100%;
  min-height: 100vh;
  background-color: #00000040;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const Modal = styled.div`
  width: 45vw;
  min-height: 65vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 0.5rem;

  h1 {
    align-self: flex-start;
    margin: 1rem 1rem;
    text-transform: uppercase;
  }
`;

export const ButtonTerms = styled.button`
  width: 90px;
  height: 35px;
  background-color: #ff4136;
  color: #fff;
  text-transform: uppercase;
  border: 0;
  border-radius: 4px;
  align-self: flex-end;
  margin: 1rem 1rem;
`;

export const BlockTerms = styled.div`
  width: 95%;
  height: 90%;
  background: #ffcfcd;
  padding: 1rem 1rem;

  h3 {
    margin: 1rem 0;
    font-size: 14px;
  }

  h4 {
    color: #f00;
    font-weight: normal;
    font-size: 14px;
  }
`;

export const Terms = styled.p`
  width: 100%;
`;
