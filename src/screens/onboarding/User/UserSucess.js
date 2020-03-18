// Libs
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Components
import Button from '../../../components/Button';

// Images
import Sucess from '../../../assets/sucess.svg';

const mapStateToProps = state => ({
  signup: state.signup,
});

const Modal = styled.div`
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


  a{
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
    }
`;

const TitleTerms = styled.h1`
    font-family: Overpass, ExtraBold;
    font-size: 1.3rem;
`;

const TextTerms = styled.p`
    font-family: Overpass;
    width: 80%;
    font-size: 0.8rem;
    line-height: 1rem;
`;

const TextTermsBold = styled.strong`
    margin-left: 0.5rem;
    text-decoration: underline;
    cursor: pointer;

`;

const ButtonLogin = styled.button`
    text-transform: uppercase;
    font-size: 1rem;
    color: #85144b;
    cursor: pointer;
    font-family: Overpass, Bold;
    background: none;
    border: none;
    background: #ff4136;
    width: 87%;
`;

const FisicalPersonSucess = props => (
    <Modal>
      <TitleTerms>Cadastro de Pessoa física concluído!</TitleTerms>
      <img src={Sucess} alt="Sucess" />
      <TextTerms>
        Enviamos um e-mail de confirmação para
        <TextTermsBold>{props.signup.users.email}</TextTermsBold>. Verifique sua caixa de entrada para
        prosseguir.
      </TextTerms>
      <TextTerms>
        Caso não tenha recebido a confirmação, clique em
        <TextTermsBold>Reenviar email.</TextTermsBold>
      </TextTerms>
      <Link to="/">
        <Button text="fazer login"/>
      </Link>
    </Modal>
  );
export default connect(mapStateToProps)(FisicalPersonSucess);
