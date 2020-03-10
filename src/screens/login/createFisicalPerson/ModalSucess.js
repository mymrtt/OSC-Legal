import React from "react";
import Sucess from "../../../assets/sucess.svg";
import Button from "../../../components/Button";
import { Overlay } from "./ModalTerms";
import styled from "styled-components";

export const Modal = styled.div`
  width: 45vw;
  height: 65vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: #fff;

  @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 425px) {
    width: 90%;
    padding: 0.5rem;
  }

  h1 {
    font-size: 20px;
  }

  p {
    width: 80%;
    font-size: 14px;
  }
  strong {
    margin-left: 0.5rem;
    text-decoration: underline;
    cursor: pointer;
  }
  h3 {
    text-transform: uppercase;
    font-size: 16px;
    color: #85144b;
    cursor: pointer;
  }
`;

export default function ModalSucess(props) {
  return (
    <Overlay>
      <Modal>
        <h1>Cadastro de Pessoa física concluído!</h1>
        <img src={Sucess} />
        <p>
          Enviamos um e-mail de confirmação para <b>name@email.com</b>.
          Verifique sua caixa de entrada para prosseguir.
        </p>
        <p>
          Caso não tenha recebido a confirmação, clique em
          <strong>Reenviar email.</strong>
        </p>
        <Button
          onClick={() => props.handleModalSucess()}
          text="cadastrar pessoa jurídica"
        />
        <h3>fazer login</h3>
      </Modal>
    </Overlay>
  );
}
