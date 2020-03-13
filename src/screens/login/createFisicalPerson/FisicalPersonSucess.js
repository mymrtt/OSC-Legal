// Libs
import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

// Images
import Sucess from "../../../assets/sucess.svg";
import Button from "../../../components/Button";

const mapStateToProps = state => ({
  signup: state.signup
});

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
    font-family: Overpass, ExtraBold;
    font-size: 1.3rem;
  }

  p {
    font-family: Overpass;
    width: 80%;
    font-size: 0.7rem;
    line-height: 1rem;
  }
  strong {
    margin-left: 0.5rem;
    text-decoration: underline;
    cursor: pointer;
  }
  h3 {
    text-transform: uppercase;
    font-size: 1rem;
    color: #85144b;
    cursor: pointer;
    font-family: Overpass, Bold;
  }
  b {
    margin-left: 0.3rem;
  }
`;

function FisicalPersonSucess(props) {
  return (
    <Modal>
      <h1>Cadastro de Pessoa física concluído!</h1>
      <img src={Sucess} alt="Sucess" />
      <p>
        Enviamos um e-mail de confirmação para
        <b>{props.signup.users.email}</b>. Verifique sua caixa de entrada para
        prosseguir.
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
  );
}
export default connect(mapStateToProps)(FisicalPersonSucess);
